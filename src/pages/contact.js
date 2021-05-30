import * as React from "react"
import Layout from "../components/layout"
import { ImBehance2, ImInstagram, ImTwitter } from "react-icons/im"

const ContactPage = () => {
  return (
    <Layout primaryColour="yellow">
      <div className="bg-offyellow-0">
        <div className="container flex  flex-col justify-center  h-screen mx-auto py-2">
          <div className=" mb-32 text-offblack-0">
            <p className="text-center mb-6">I do commissions... so get touch</p>
            <h1 className="text-center text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
              chloeplatt@gmail.com
            </h1>
          </div>
          <div>
            <ul className="flex justify-center text-2xl md:text-4xl">
              <li className="mx-8">
                <ImBehance2 />
              </li>
              <li className="mx-8">
                <ImInstagram />
              </li>
              <li className="mx-8">
                <ImTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
