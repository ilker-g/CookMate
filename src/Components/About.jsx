import React from "react";

function About() {
  return (
    <section id="About">
      <div className="my-20">
        <h1 className="text-3xl font-bold text-center text-gradient-to-r from-yellow-600 to-red-600 ">
          Hakkımızda
        </h1>
        <div className="mt-10">
          <p className="text-xl text-justify mx-10">
            Yemek yapmak bazen eldeki malzemelerle harikalar yaratma sanatıdır.
            İşte tam da bu noktada CookMate devreye giriyor! Mutfağınızda hangi
            malzemelerin olduğunu girin, biz de size bu malzemelerle
            yapabileceğiniz en lezzetli tarifleri önerelim. <br /> Geleneksel
            lezzetlerden dünya mutfağına, pratik atıştırmalıklardan şık
            sofralara kadar geniş bir tarif yelpazesi sunuyoruz. İsrafı önlemeye
            yardımcı olurken, mutfakta yaratıcılığınızı da artırıyoruz. CookMate
            ile her malzeme değerli, her yemek bir keşif! İşte bunu nasıl
            yapacağın 🍽️✨ &darr;
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
