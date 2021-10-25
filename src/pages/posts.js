import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import {MDXRenderer} from 'gatsby-plugin-mdx'

const Posts = ({ data }) => {
    console.log(data)
    const list = data.allMdx.nodes.filter(item => (
        item.frontmatter.date !== null
    ))
    console.log(data)
  return (
    <Layout pageTitle="Blog Page">
      <ul>
        {list.map((node) => (
          <article key={node.id}>
            <h2><Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};
export const query = graphql`
query MyQuery {
    allMdx(filter: {slug: {ne: null}},sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`;

export default Posts;
