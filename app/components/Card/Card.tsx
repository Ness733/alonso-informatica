import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import productos_prueba from "../../../productos_prueba.json";

export const loader = async () => {
  const test = productos_prueba;
  return json(test);
};

export default function Card() {
  const data = useLoaderData();
  const test = productos_prueba;
  console.log(test);
  return (
    <div>
      {test.teclado.map((item: any) => {
        return (
          <div key={item.nombre}>
            <li>
              <h3>{item.nombre}</h3>
              <h3>En categoria: {item.categoria}</h3>
              <img src={item.imagen} alt={item.nombre}></img>
              <button>Realizar Consulta</button>
            </li>
          </div>
        );
      })}
    </div>
  );
}
