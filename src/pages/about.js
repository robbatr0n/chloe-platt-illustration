import * as React from "react"
import Layout from "../components/layout"
import { ImBehance2, ImInstagram, ImTwitter } from "react-icons/im"

const AboutPage = () => {
  return (
    <Layout primaryColour="blue">
      <div className="bg-offblue-0">
        <div className="container flex flex-col h-screen justify-center mx-auto py-12">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="border w-96 h-96 bg-black mx-auto"></div>
            </div>
            <div className="text-xl flex flex-col  justify-between">
              <div>
                <p>
                  Hi my name is
                  <span className="text-4xl mx-2 font-bold underline">
                    Chloe Platt
                  </span>
                  ,
                </p>
                <p className="text-center my-6">
                  and I am a <span className="underline">artist</span>,{" "}
                  <span className="underline">painter</span> and{" "}
                  <span className="underline">illustrator</span> currently
                  residing in Norwich, Norfolk.
                </p>
              </div>
              <div>
                <ul className="flex justify-center ">
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
              <div className="">
                <p>
                  Deserunt ea tempor adipisicing adipisicing pariatur non. Ex
                  amet ut do deserunt cupidatat cillum esse nostrud nulla aute
                  occaecat esse.
                </p>
                <p>
                  Cupidatat cupidatat laboris commodo Lorem minim occaecat
                  exercitation quis incididunt. Ut aliqua reprehenderit mollit
                  fugiat minim consectetur laboris proident et. Quis ut ipsum
                  officia dolore occaecat labore anim elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
