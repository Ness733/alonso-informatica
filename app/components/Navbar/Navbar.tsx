import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <ul className="rounded flex w-full h-16 place-items-center bg-green-800">
        <li>
          <h1 className="text-white text-2xl p-20">Alonso Informática</h1>
        </li>

        <li className="ml-auto p-20">
          <div className="flex flex-row gap-5">
            <FaInstagram className="text-white text-3xl ml-auto" />
            <FaFacebook className="text-white text-3xl ml-auto" />
          </div>
        </li>
      </ul>
    </div>
  );
}
