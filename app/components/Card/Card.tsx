import productos_prueba from "../../../productos_prueba.json";
import { useLoaderData } from "@remix-run/react";

export default function Card() {
  // const test = productos_prueba;
  const { data } = useLoaderData();
  return (
    <ul className="bg-white list-none h-auto w-auto gap-5 rounded-xl m-14 grid grid-cols-4 max-2xl:grid-cols-3">
      {data.map((item: any) => {
        return (
          <div
            className="bg-white drop-shadow-2xl shadow-lg shadow-black rounded-xl"
            key={item.attributes.title}
          >
            <li className="flex flex-col gap-4 rounded-xl">
              <h3 className="p-4 text-2xl">{item.attributes.title}</h3>
              {/* <h3>En categoria: {item.categoria}</h3> */}
              <div>
                <img
                  className="w-54 h-60 m-auto"
                  src={item.attributes.image.data.attributes.url}
                  alt={item.attributes.title}
                ></img>
              </div>
              <button className="p-5 w-40 self-center text-white font-bold text-2xl bg-green-700 rounded my-5 hover:bg-black hover:text-green-500">
                Ver
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
