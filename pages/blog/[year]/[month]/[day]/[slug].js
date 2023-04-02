import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import Author from '../../../../../components/Author';
import CodeBlock from '../../../../../components/CodeBlock';
import Header from '../../../../../components/Header';

const components = {
  code: CodeBlock,
};

const BlogPost = ({ mdxSource, data }) => {
  return (
    <div className="blog-container">
      <nav>
        <Header />
      </nav>
      <h1>{data.title}</h1>
      <p>Posted: {data.date}</p>
      <MDXRemote {...mdxSource} components={components} />
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
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      data: {
        ...data,
        date: data.date.toISOString().split('T')[0],
      },
      slug: params.slug,
    },
  };
}

export default BlogPost;
