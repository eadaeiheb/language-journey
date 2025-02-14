import React from "react";

const GiftCollectionPackPage = () => {
  const items = [
    { src: "GiftGuide.png", label: "Pack Prestige", href: "/univers-cadeaux/packprestige" },
    { src: "LuxurtGifts.png", label: "Pack Premuim", href: "/univers-cadeaux/packpremuim" },
    { src: "MustHaveGifts.png", label: "Pack Trio", href: "/univers-cadeaux/packtrio" },
    { src: "GiftCards.png", label: "Pack Duo", href: "/univers-cadeaux/packduo" },
    { src: "Services.png", label: "Pack Duo Mini", href: "/univers-cadeaux/packminiduo" },
  ];

  return (
    <section className="bg-[#F9FAFB] py-10 font-['WomanFontRegular']">
      <div className="container mx-auto p-5 flex flex-wrap justify-between">
        <div className="w-full text-center mb-5">
          <h2 className="text-[#8A2B3B] text-4xl">L'Univers Cadeaux</h2>
          <p className="text-[#4A4A4A] text-lg mt-2">
          Offrez l'élégance, personnalisez le style.
          </p>
        </div>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative flex-1 m-2 min-w-[250px] max-w-[250] h-[430px] bg-white shadow-lg overflow-hidden group"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full text-center text-white bg-[#591C1C]/80 py-3 text-lg transition-opacity duration-300 group-hover:bg-opacity-70">
              {item.label}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GiftCollectionPackPage;
