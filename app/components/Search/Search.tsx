import { Form } from "@remix-run/react";

export default function Search() {
  return (
    <div className="bg-white col-span-2 rounded-xl">
      <Form className="flex" method="post">
        <input
          className="w-full h-14 text-center"
          type="text"
          placeholder="¿Qué estas buscando?"
        />
        <button
          className="text-center bg-green-500 p-3 px-5 ml-auto"
          type="submit"
        >
          Buscar
        </button>
      </Form>
    </div>
  );
}
