import * as React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div className="container mx-auto py-12">
      <div className="mb-32">
        <div className=" relative w-24 h-24 md:w-36 md:h-36 mx-auto mb-8">
          <StaticImage
            className="rounded-full md:w-36 md:h-36 mx-auto "
            src="../images/pp.jpg"
            alt="user image"
          />
        </div>
        <h1 className="uppercase text-center text-6xl sm:text-9xl lg:text-big text-offblack-0">
          chloe platt
        </h1>
        <p className="text-center md:text-xl mt-8">
          A freelance illustrator based in Norwich.
        </p>
      </div>

      <Portfolio data={data} />
    </div>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
  query AssetsPhotos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        dir: { regex: "../images/art/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              width: 600

              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
