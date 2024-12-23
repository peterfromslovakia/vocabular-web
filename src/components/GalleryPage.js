import React, { useState } from "react";

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: `${process.env.PUBLIC_URL}/images/hlavne_okno.png`,
      alt: "Hlavné okno aplikácie",
      description: "Hlavné okno aplikácie Vocabular",
      isMain: true, // Označíme hlavný obrázok
    },
    {
      src: `${process.env.PUBLIC_URL}/images/pridavanie_slovicok.png`,
      alt: "Pridávanie slovíčok",
      description: "Pridanie nových slovíčok do databázy",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/spravna_odpoved.png`,
      alt: "Správna odpoveď",
      description: "Ukážka správnej odpovede počas testovania",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/nespravna_odpoved.png`,
      alt: "Nesprávna odpoveď",
      description: "Ukážka nesprávnej odpovede počas testovania",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/test_ukonceny.png`,
      alt: "Test ukončený",
      description: "Štatistika po ukončení testu",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/zobrazenie_slovicok.png`,
      alt: "Zobrazenie slovíčok",
      description: "Zobrazenie všetkých slovíčok v databáze",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/vyhladanie_slovicok.png`,
      alt: "Vyhľadávanie slovíčok",
      description: "Vyhľadávanie konkrétnych slovíčok v databáze",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ padding: "30px 20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "28px" }}>Galéria</h2>

      {/* Hlavný obrázok */}
      <div
        style={{
          marginBottom: "30px",
          cursor: "pointer",
          maxWidth: "600px",
          margin: "0 auto",
        }}
        onClick={() => handleImageClick(images[0])}
      >
        <img
          src={images[0].src}
          alt={images[0].alt}
          style={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <p style={{ marginTop: "10px", fontSize: "16px" }}>
          {images[0].description}
        </p>
      </div>

      {/* Ostatné obrázky */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {images.slice(1).map((image, index) => (
          <div key={index} style={{ cursor: "pointer" }} onClick={() => handleImageClick(image)}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <p style={{ marginTop: "10px", fontSize: "14px" }}>{image.description}</p>
          </div>
        ))}
      </div>

      {/* Zväčšený obrázok */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeImage}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "8px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.8)",
              }}
            />
            <p style={{ color: "white", marginTop: "10px", fontSize: "16px" }}>{selectedImage.description}</p>
            <button
              onClick={closeImage}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
