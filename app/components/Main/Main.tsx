import { FaWhatsapp } from "react-icons/fa";
import Search from "../Search/Search";
import Card from "../Card/Card";

export default function Main() {
  return (
    <main className="inline-grid grid-cols-7 grid-rows-2 bg-black gap-x-10 max-2xl:grid-cols-5">
      <div className="bg-green-600 flex text-white text-2xl p-5 w-52 align-center rounded-full text-center ml-10">
        WhatsApp <FaWhatsapp className="text-4xl ml-auto" />
      </div>
      <div className="col-span-2">
        <Search />
      </div>
      <div className="bg-green-600 ml-10 mt-5 rounded-xl text-center w-4/5 col-start-1">
        categorias
      </div>
      <div className="bg-white text-center rounded-xl col-span-full col-start-2 mr-10">
        <h1>Ventana Productos</h1>
        <main>
          <h3>producto</h3>
          <Card />
        </main>
      </div>
    </main>
  );
}
