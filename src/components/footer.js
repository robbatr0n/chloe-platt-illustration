import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ primaryColour }) => {
  return (
    <>
      {" "}
      <footer
        className={`py-16 lg:py-32 ${
          primaryColour === "yellow"
            ? "bg-offyellowdark-0"
            : primaryColour === "blue"
            ? "bg-offbluedark-0"
            : "bg-offpurpledark-0"
        }`}
      >
        <div className="container mx-auto grid items-center grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mx-auto md:col-span-2">
            <h1 className="text-2xl md:text-4xl lg:text-6xl underline font-bold">
              Thanks for visiting
            </h1>
          </div>
          <div className="mx-auto text-lg: md-text-xl  md:mx-0 md:col-span-1">
            <ul className="">
              <Link to="/">
                <li className="my-4">work</li>
              </Link>

              <Link to="/about/">
                <li className="my-4">about</li>
              </Link>
              <Link to="/contact/">
                <li className="my-4">contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      <p
        className={`w-full text-center ${
          primaryColour === "yellow"
            ? "bg-offyellowdark-0"
            : primaryColour === "blue"
            ? "bg-offbluedark-0"
            : "bg-offpurpledark-0"
        }`}
      >
        developed by{" "}
        <a className="underline" href="https://www.robbatron.me">
          robbatron
        </a>{" "}
        &#169; 2021
      </p>
    </>
  )
}

export default Footer
