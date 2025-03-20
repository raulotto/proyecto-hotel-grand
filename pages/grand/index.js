import fs from "fs";
import path from "path";
import Intro from "../../components/Intro";
import RestBar from "../../components/RestBar";
import Link from "next/link";

export async function getStaticProps() {
  // Obtener el JSON con los datos del hotel
  const filePath = path.join(process.cwd(), "data", "hotel_es.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const hotel = JSON.parse(jsonData);

  return {
    props: { hotel },
  };
}

export default function Home({ hotel }) {
  return (
    <main className="container mx-auto p-6">
      {/* Título y descripción del hotel */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">{hotel.name}</h1>
        <p className="text-gray-700">{hotel.description}</p>
      </header>

      {/* Enlace a la versión en inglés */}
      <div className="text-center my-4">
        <Link href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport">
          🇬🇧 English Version.
        </Link>
      </div>

      {/* Componentes de la página */}
      <Intro />
      <RestBar />
    </main>
  );
}
