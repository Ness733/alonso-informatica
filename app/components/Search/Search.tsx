import { Form } from "@remix-run/react";

export default function Search() {
  return (
    <div className="bg-green-400">
      <Form method="post">
        <input
          className="w-80"
          type="text"
          placeholder="¿Qué estas buscando?"
        />
        <button type="submit">Buscar</button>
      </Form>
    </div>
  );
}
