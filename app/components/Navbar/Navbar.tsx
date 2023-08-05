import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <div>
      <ul className="rounded flex w-full h-16 place-items-center bg-green-700">
        <li>
          <img
            className="h-12 ml-10"
            src={logo}
            alt="logo alonso informatica"
          />
        </li>

        <li className="ml-auto p-20">
          <div className="flex flex-row gap-5">
            <FaInstagram className="text-white text-5xl ml-auto" />
            <FaFacebook className="text-white text-5xl p-1 ml-auto" />
          </div>
        </li>
      </ul>
    </div>
  );
}
