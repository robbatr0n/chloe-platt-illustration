import * as React from "react"
import Layout from "../components/layout"
import { GiJumpingDog, GiSittingDog } from "react-icons/gi"
import { FaDog } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout primaryColour="blue">
      <Seo title="about" />

      <div className="bg-offblue-0">
        <div className="container flex flex-col px-2 md:px-4 lg:px-8 md:h-screen justify-center mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12  py-12">
            <div className="flex items-center">
              <StaticImage
                className=""
                src="../images/soo.jpg"
                alt="user image"
              />
            </div>
            <div className="text-xl flex flex-col   justify-center">
              <div className="my-6 prose">
                <p>
                  Hi there my name is Chloe Platt and I am a self-taught,
                  freelance <span className="underline font-bold">artist</span>
                  and <span className="underline font-bold">illustrator</span>
                  &nbsp;based in Norwich aiming to create unique pieces for
                  friends, family and customers to treasure forever. I work with
                  a variety of mediums, including pencil, ink, wax and acrylic
                  paint, on different bases, such as canvas, cardboard and paper
                  to produce different textures and results.
                </p>

                <p>
                  I take inspiration from nature, animals and the human form,
                  and especially love painting man’s best friend, dogs. I am
                  open to taking commissions for custom, one-off projects and
                  have previously produced portraits of pets for customers. If
                  you would like to work with me on a commission, please send me
                  an email and I hope you enjoy browsing through my work.
                </p>
              </div>
              <div className="py-8">
                <ul className="flex justify-center text-2xl md:text-4xl ">
                  <li className="mx-8">
                    <FaDog />
                  </li>
                  <li className="mx-8">
                    <GiJumpingDog />
                  </li>
                  <li className="mx-8">
                    <GiSittingDog />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
