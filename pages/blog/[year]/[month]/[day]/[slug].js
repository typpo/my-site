import fs from 'fs';
import matter from 'gray-matter';
import frontmatter from 'remark-frontmatter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

import 'highlight.js/styles/atom-one-light.css';

import Author from '../../../../../components/Author';
import Header from '../../../../../components/Header';

const BlogPost = ({ htmlContent, data }) => {
  return (
    <div className="blog-container">
      <nav>
        <Header />
      </nav>
      <h1>{data.title}</h1>
      <p className='blog-date'>Posted: {data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Author />
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync('./posts');

  const paths = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const [slug] = file.split('.');
      const fileContent = fs.readFileSync(`./posts/${file}`).toString();
      const parsedMatter = matter(fileContent).data;

      const datestr = parsedMatter.date.toISOString().split('T')[0];
      const splits = datestr.split('-');
      const year = splits[0];
      const month = splits[1];
      const day = splits[2];

      return {
        params: {
          year,
          month,
          day,
          slug,
        },
      };
    });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`./posts/${params.slug}.md`);
  const { content, data } = matter(file);
  const htmlContent = await unified()
    .use(remarkParse)
    .use(frontmatter)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return {
    props: {
      htmlContent: htmlContent.toString(),
      data: {
        ...data,
        date: data.date.toISOString().split('T')[0],
      },
      slug: params.slug,
    },
  };
}

export default BlogPost;
