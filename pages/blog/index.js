import fs from 'fs';

import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

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
          <p>Posted: {post.data.date}</p>
          <MDXRemote {...post.mdxPreview} />
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
        console.log({ datestr });
        const splits = datestr.split('-');
        const year = splits[0];
        const month = splits[1];
        const day = splits[2];

        const paragraphs = content.split('\n\n').slice(0, 2).join('\n\n');
        const mdxPreview = await serialize(paragraphs);

        return {
          slug,
          mdxPreview,
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
  const recentPosts = posts
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    .slice(0, 5);

  return {
    props: {
      posts: recentPosts,
    },
  };
}

export default BlogIndex;
