import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({data}) => {
    console.log(data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
    body
  }
}
`

export default Post