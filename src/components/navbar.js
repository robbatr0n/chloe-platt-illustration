import * as React from "react"
import { Link } from "gatsby"
const Navbar = ({ primaryColour }) => {
  return (
    <nav
      className={`flex py-6 ${
        primaryColour === "yellow"
          ? "bg-offyellow-0"
          : primaryColour === "blue"
          ? "bg-offblue-0"
          : "bg-offpurple-0"
      }
       `}
    >
      <ul className="flex text-offblack-0  justify-center w-full uppercase">
        <Link to="/">
          <li className="mx-4">work</li>
        </Link>
        <Link to="/about/">
          <li className="mx-4">about</li>
        </Link>
        <Link to="/contact/">
          <li className="mx-4">contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
