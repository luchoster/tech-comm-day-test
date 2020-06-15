import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default props => {
  const {
    allSanityExhibitors: { edges: data }
  } = props.data

  return (
    <Layout>
      <SEO />
      <div className="container">
        {data.map(({ node: ex }, index) => {
          return <h1 key={index}>{ex.title}</h1>
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityExhibitors {
      edges {
        node {
          title
        }
      }
    }
  }
`
