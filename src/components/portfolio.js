import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = ({ data }) => {
  return (
    <div className="grid grid-cols-1 px-2 md:px-4 lg:px-8 md:grid-cols-3 gap-4 md:gap-8 ">
      {data.allFile.edges.map(edge => {
        const img = getImage(edge.node.childImageSharp)
        return (
          <div className="relative max-w-xs sm:max-w-sm md:max-w-none filter group flex mx-auto">
            <GatsbyImage
              image={img}
              alt="portfolio image"
              aspectRatio={16 / 9}
              className=" group-hover:filter group-hover:brightness-50 group-hover:grayscale "
            />
            <p className="absolute text-white hidden text-center group-hover:block filter inset-x-2/4 inset-y-2/4 transform -translate-y-1/2 -translate-x-1/2 brightness-200 ">
              {edge.node.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Portfolio
