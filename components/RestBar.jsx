import React from 'react'

const RestBar = () => {
  return (
    <section className="bg-white p-6 min-h-screen items-center justify-center flex flex-col">
        
  
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Contenedor de imágenes */}
      <div className="flex-1 max-w-md lg:max-w-lg">
        <div> 
            <h6 className="suptitle">Servicios de primera clase</h6>
            {/* Título principal */}
            <h3 className="pb-2 font-bold text-title-section">
                COMER Y BEBER
            </h3>
            <div className="divider-line"></div>
        </div>
        <div className="mx-auto">
        <p className="text-parrafos">
        En Wyndham Grand Costa del Sol Lima Airport descubre lo mejor de la reconocida gastronomía peruana en  ambientes sofisticados y con un servicio excepcional. Comienza el día con un desayuno buffet que combina clásicos peruanos y favoritos internacionales en nuestro restaurante de cocina global abierto todo el día. Disfruta de cócteles cuidadosamente elaborados, una selección de vinos, licores y bebidas sin alcohol en nuestro elegante bar 24/7, o prueba auténticos sabores locales en nuestro snack bar de comida callejera peruana, perfecto para viajeros en movimiento. Y para la máxima comodidad, nuestro room service 24/7 te lleva lo mejor de la gastronomía peruana directamente a tu habitación.
        </p>
        <div className="mt-8">
    <button className="bg-olive-grand text-white px-6 py-3 text-xs rounded-md flex items-center gap-2">
      <a href="#">VER RESTAURANTES Y BARES
      </a>
    </button>
  </div>
        </div>
      </div>
  
      {/* Contenido del hotel */}
      <div className="flex-1 max-w-lg p-6 text-black-grand">
      <img
            src="https://cdn2.paraty.es/wyndham-grand-cancun/images/868847eb274c834"
            alt="Piscina del hotel"
            className="w-full h-full object-cover rounded-lg"
          />
      </div>
    </div>
  </section>

  )
}

export default RestBar
