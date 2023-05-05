const MAIN_HOST = "https://personal-website-typpo.vercel.app/";
const FALLBACK_HOST = "http://gate.ianww.com/";

export interface Env {
  // Add your bindings here
}

async function fetchWithHost(request: Request, host: string, useHttps: boolean = true): Promise<Response> {
  const url = new URL(request.url);
  url.host = new URL(host).host;
  url.protocol = useHttps ? 'https' : 'http';

  console.log('requesting', url.toString());
  const newRequest = new Request(url.toString(), request);
  let response = await fetch(newRequest);

  // Follow the redirect if the status code indicates a redirect
  if ([301, 302, 307, 308].includes(response.status) && response.headers.has('Location')) {
    const redirectUrl = response.headers.get('Location')!;
    console.log('Following redirect to', redirectUrl);
    response = await fetch(new Request(redirectUrl, request));
  }

  return response;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const mainResponse = await fetchWithHost(request, MAIN_HOST);

    if (mainResponse.status === 404) {
      const fallbackResponse = await fetchWithHost(request, FALLBACK_HOST, false);
      return fallbackResponse;
    }

    return mainResponse;
  },
};
