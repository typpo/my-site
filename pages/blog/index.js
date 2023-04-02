import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import frontmatter from 'remark-frontmatter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';

import Header from '../../components/Header';

const BlogIndex = ({ posts }) => {
  return (
    <div className="blog-container">
      <Header />
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link href={`/blog/${post.year}/${post.month}/${post.day}/${post.slug}`}>
              {post.data.title}
            </Link>
          </h2>
          <p className="blog-date">Posted: {post.data.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.htmlPreview }} />
          <Link href={`/blog/${post.year}/${post.month}/${post.day}/${post.slug}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync('./posts');
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const [slug] = file.split('.');
        const fileContent = fs.readFileSync(`./posts/${file}`).toString();
        const { content, data } = matter(fileContent);

        const datestr = data.date.toISOString().split('T')[0];
        const splits = datestr.split('-');
        const year = splits[0];
        const month = splits[1];
        const day = splits[2];

        // Preview up until the first header, OR the first 4 paragraphs, whichever is earlier.
        const paragraphs = content.split('\n\n');
        const firstHeaderIndex = paragraphs.findIndex((p) => p.startsWith('#'));
        const previewContent = paragraphs.slice(0, Math.min(4, firstHeaderIndex)).join('\n\n');
        const htmlPreview = await unified()
          .use(remarkParse)
          .use(frontmatter)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeRaw)
          .use(rehypeFormat)
          .use(rehypeStringify)
          .process(previewContent);

        return {
          slug,
          htmlPreview: htmlPreview.toString(),
          year,
          month,
          day,
          data: {
            ...data,
            date: datestr,
          },
        };
      }),
  );

  // Sort the posts by date in descending order and take the 5 most recent.
  const recentPosts = posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  //.slice(0, 5);

  return {
    props: {
      posts: recentPosts,
    },
  };
}

export default BlogIndex;
