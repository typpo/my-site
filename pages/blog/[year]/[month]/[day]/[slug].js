import fs from 'fs'

import matter from 'gray-matter'
import { Meta, MDXProvider } from '@mdx-js/react'

const BlogPost = ({ content, data }) => {
  console.log('fux', data)
  return (
    <MDXProvider>
      <h1>{data.title}</h1>
      <p>Posted: {data.date}</p>
      {content}
    </MDXProvider>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync('./posts')

  const paths = files.filter(file => file.endsWith('.md')).map(file => {
    const [slug] = file.split('.')
    const fileContent = fs.readFileSync(`./posts/${file}`).toString()
    const parsedMatter  = matter(fileContent).data

    const datestr = parsedMatter.date.toISOString().split('T')[0]
    console.log({datestr})
    const splits = datestr.split('-')
    const year = splits[0]
    const month = splits[1]
    const day = splits[2]

    return {
      params: {
        year,
        month,
        day,
        slug,
      },
    }
  })
  console.log(paths)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`./posts/${params.slug}.md`)
  const { content, data } = matter(file)

  return {
    props: {
      content,
      data: {
        ...data,
        date: data.date.toISOString().split('T')[0],
      },
      slug: params.slug,
    },
  }
}

export default BlogPost
