import { FaWhatsapp } from "react-icons/fa";
import Search from "../Search/Search";
import Card from "../Card/Card";

export default function Main() {
  return (
    <main className="inline-grid grid-cols-7 bg-black gap-x-10 max-2xl:grid-cols-5 gap-5">
      <div className="bg-green-600 flex text-white text-2xl p-2 px-7 w-52 h-14 align-center rounded-full text-center ml-10 hover:cursor-pointer hover:bg-white hover:text-green-600">
        WhatsApp <FaWhatsapp className="text-4xl ml-auto row-span-1" />
      </div>

      <Search />

      <div className="bg-green-600 ml-10 rounded-xl text-center w-4/5 col-start-1 row-start-3">
        categorias
      </div>
      <div className="bg-white text-center rounded-xl col-span-full col-start-2 mr-10 row-start-3">
        <Card />
      </div>
    </main>
  );
}
