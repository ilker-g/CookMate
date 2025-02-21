import React, { useState } from "react";

function Meals() {
  return (
    <>
      <section id="Meals">
        <h3 className="text-3xl font-bold text-center p-5 mb-5 ">YÖRELER</h3>

        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4 pb-8">
          {regions.map((r, index) => (
            <div
              key="index"
              className={`${
                colors[index % colors.length]
              } text-white lg:text-[20px] p-4 rounded-lg shadow-md transform hover:scale-110 hover:cursor-pointer hover:z-20 transition ease-in-out`}
            >
              <div className="flex gap-2 items-center">
                <img
                  src={r.img}
                  className="w-[5rem] rounded-xl"
                  alt="yemek görseli"
                />
                <h2 className="text-2xl">{r.name}</h2>
              </div>

              <div>
                <p className="text-wrap">{r.descriptions} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
const colors = [
  "bg-red-500",
  "bg-slate-400",
  "bg-green-500",
  "bg-yellow-400",
  "bg-pink-300",
  "bg-cyan-900",
  "bg-orange-200",
  "bg-purple-400",
];

const regions = [
  {
    name: "İstanbul ve Saray Mutfağı",
    img: "/images/istanbul.jfif",
    descriptions:
      "Osmanlı saray mutfağının mirasını taşır.Bol baharat, kuru meyve, badem, fıstık ve zengin soslar kullanılır.",
  },
  {
    name: "Gaziantep Mutfağı",
    img: "/images/gaziantep.jfif",
    descriptions:
      "Et ve baharat ağırlıklıdır. Antep fıstığı, nar ekşisi, sumak sıkça kullanılır.",
  },
  {
    name: "Hatay (Antakya) Mutfağı",
    img: "/images/hatay.jfif",
    descriptions:
      "Arap, Osmanlı ve Akdeniz mutfaklarının harmanıdır. Bol baharat, tahin, nar ekşisi ve zeytinyağı kullanılır.",
  },
  {
    name: "Karadeniz Mutfağı",
    img: "/images/karadeniz.jfif",
    descriptions:
      "Deniz ürünleri, mısır ve yeşillikler yoğun kullanılır. Mısır unu, tereyağı ve peynir sıkça tüketilir.",
  },
  {
    name: "Ege Mutfağı",
    img: "/images/ege.jfif",
    descriptions:
      "Zeytinyağlı yemekler, otlar ve hafif yiyecekler ön plandadır. Deniz ürünleri, sebze ağırlıklı yemekler ve keçi sütünden yapılan peynirler öne çıkar.",
  },
  {
    name: "Doğuananadolu Mutfağı",
    img: "/images/danadolu.jfif",
    descriptions:
      "Et, bulgur ve süt ürünleri ağırlıklıdır. Yoğun baharat kullanımı görece azdır, yemekler genellikle doğal lezzetindedir.",
  },
  {
    name: "Güneydoğu Anadolu Mutfağı",
    img: "/images/gdanadolu.jfif",
    descriptions:
      "Acı, baharat, et ve yoğurtlu yemekler ağırlıktadır. Kebap kültürü oldukça yaygındır.",
  },
  {
    name: "İçanadolu Mutfağı",
    img: "/images/içanadolu.jfif",
    descriptions:
      "Hamur işleri ve tahıl ağırlıklıdır.Etli yemekler de sıkça tüketilir.",
  },
];

export default Meals;
