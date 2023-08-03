import type { V2_MetaFunction } from "@remix-run/node";
import Banner from "~/components/Banner/Banner";
import Main from "~/components/Main/Main";
import Navbar from "~/components/Navbar/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Alonso Informática" },
    { name: "description", content: "Bienvenido a Alonso Informática." },
  ];
};

export default function Index() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Main />
      </main>
      <footer className="text-center">
        <small className="text-white">©️ Copyright 2023 Nestor Rosales.</small>
      </footer>
    </>
  );
}
