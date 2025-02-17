import React from "react";

function Howitworks() {
  return (
    <section id="Howitworks" className=" overflow-hidden scroll-mt-50">
      <div className="text-center mx-auto px-4">
        <h1 className="text-3xl font-bold my-10">Nasıl Çalışır</h1>

        <div className="flex md:flex-row items-center justify-center gap-2 md:gap-20 flex-nowrap min-w-0 mb-8">
          <img
            className="w-[10rem] md:w-[15rem] max-w-full h-auto object-scale-down flex-shrink-0"
            src="/images/telefon.png"
            alt="telefon"
          />
          <h2 className=" whitespace-normal  text-lg lg:text-3xl">
            YAPMAK İSTEDİĞİN YEMEK TÜRÜNÜ SEÇ
          </h2>
          <div className="text-[5rem] md:text-[15rem] text-[#ff914e] opacity-25 flex-shrink-0">
            1
          </div>
        </div>

        <div className="flex md:flex-row items-center justify-center gap-4 md:gap-20 flex-nowrap min-w-0 mb-8">
          <div className="text-[5rem] md:text-[15rem] text-[#ff914e] opacity-25 flex-shrink-0">
            2
          </div>
          <h2 className="whitespace-normal  text-lg lg:text-3xl">
            MALZEMELERİNİ LİSTEYE EKLE
          </h2>
          <img
            className="w-[10rem] md:w-[15rem] max-w-full h-auto object-contain flex-shrink-0"
            src="/images/telefon.png"
            alt="telefon"
          />
        </div>

        <div className="flex md:flex-row items-center justify-center gap-4 md:gap-20 flex-nowrap min-w-0 mb-8">
          <img
            className="w-[10rem] md:w-[15rem] max-w-full h-auto object-contain flex-shrink-0"
            src="/images/telefon.png"
            alt="telefon"
          />
          <h2 className="whitespace-normal  text-lg lg:text-3xl">
            SENİN İÇİN BULDUĞUMUZ TARİFLERDEN <br /> DİLEDİĞİNİ SEÇ
          </h2>
          <div className="text-[5rem] md:text-[15rem] text-[#ff914e] opacity-25 flex-shrink-0">
            3
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howitworks;
