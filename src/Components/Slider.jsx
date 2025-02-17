import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Slide() {
  // const [aktifYemek, setAktifYemek] = useState({});

  // const showRecipe = (yemek) => {
  //   setAktifYemek((prev) => ({
  //     [yemek]: !prev[yemek],
  //   }));
  // };

  // const showLess = () => {
  //   setAktifYemek(null);
  // };

  const navigate = useNavigate();

  const goToRecipe = (hash) => {
    navigate("/recipes");
    setTimeout(() => {
      window.location.hash = hash;
    }, 100);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768, // Tablet ve altı için
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full my-30">
        <div>
          <h3 className="text-2xl ml-5 my-5 lg:text-3xl font-bold lg:ml-20 lg:my-20">
            Çok Sevilen Tarifleri Dene
          </h3>
        </div>

        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-orange-200 pt-8 p-4 text-[#333] rounded-xl lg:min-h-[450px] min-h-[400px] hover:cursor-pointer md:min-h-[400px] relative">
              <div
                className="ml-2 rounded-t-xl whitespace-normal
 flex gap-5 items-center"
              >
                <img
                  src={d.image}
                  alt="yemek görselleri"
                  className="h-32 w-auto rounded-xl object-cover"
                />

                <h2 className="font-semibold text-xl lg:text-3xl">{d.name}</h2>
              </div>

              <div className="mx-4 my-4">
                <p className="text-md lg:text-xl ">{d.description}</p>
                <div className="text-center text-[#fdf2e9] bottom-4 left-1/2 transform -translate-x-1/2 absolute mb-3 ">
                  <button
                    className=" text-xl mt-auto px-9 py-3 bg-[#ff914d] rounded-lg transition duration-300 ease-in-out hover:shadow-lg shadow-[#ff914e]/50 hover:cursor-pointer "
                    // onClick={() => showRecipe(d.name)}
                    onClick={() => goToRecipe(d.hash)}
                  >
                    Tarife Git
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

const data = [
  {
    name: "İskender Kebap",
    description:
      "İnce dilimlenmiş döner etinin tereyağlı domates sosu ve yoğurt ile birlikte servis edildiği, üzerine eritilmiş tereyağı dökülen geleneksel bir yemektir. ",
    image: "/images/iskender.webp",
    hash: "iskender",
  },
  {
    name: "Mantı",
    description:
      "Mantı, ince hamurun içine kıyma, soğan ve baharat karışımının konulup kapatılmasıyla yapılan geleneksel bir Türk yemeğidir. ",
    image: "/images/mantı.webp",
    hash: "mantı",
  },
  {
    name: "Kuru Fasulye",
    description:
      "Haşlanmış fasulyenin soğan, salça ve çeşitli baharatlarla pişirilmesiyle hazırlanan geleneksel bir yemektir. Genellikle pilav ile birlikte servis edilir.",
    image: "/images/kuruFasulye.webp",
    hash: "fasulye",
  },
  {
    name: "Hünkar Beğendi",
    description:
      "Közlenmiş patlıcanın süt, tereyağı ve un ile ezilerek hazırlanan püre üzerine kuzu veya dana etiyle yapılan Osmanlı dönemine ait bir yemektir.",
    image: "/images/hünkar.webp",
    hash: "hünkar",
  },
  {
    name: "Lahmacun",
    description:
      "İnce açılmış hamurun üzerine kıyma, soğan, domates ve baharatlarla hazırlanan harcın yayılıp taş fırında pişirilmesiyle yapılan bir yemektir.",
    image: "/images/lahmacun.webp",
    hash: "lahmacun",
  },
  {
    name: "Zeytinyağlı Yaprak Sarma",
    description:
      " Asma yapraklarının içine pirinç, soğan ve baharatlarla hazırlanan harcın konulup sarılmasıyla yapılan geleneksel bir yemektir. Soğuk servis edilir.",
    image: "/images/sarma.webp",
    hash: "sarma",
  },
  {
    name: "Karnıyarık",
    description:
      "İç harcı kıyma, soğan ve çeşitli baharatlarla doldurulmuş bir çeşit patlıcan yemeğidir. Genellikle yanında pilav ve cacıkla harika gider.",
    image: "/images/karnıyarık.webp",
    hash: "karnıyarık",
  },
  {
    name: "Su Böreği",
    description:
      "Yufkaların arasına peynir veya kıyma gibi malzemeler konarak yapılan bir börektir. Yufkalar, kaynar suda haşlandıktan sonra aralarına iç malzeme eklenip fırında pişirilir.",
    image: "/images/börek.webp",
    hash: "suBörek",
  },
  {
    name: "Mercimek Çorbası",
    description:
      "Mercimek çorbası, kırmızı mercimek, soğan, havuç ve baharatlarla yapılan besleyici bir Türk çokesidir. Genellikle zeytinyağı veya tereyağı ile pişirilir ve ince bir kıvama getirilir.",
    image: "/images/mercimek.webp",
    hash: "mercimek",
  },
  {
    name: "Künefe",
    description:
      "Künefe, tel kadayıf arasına tuzsuz peynir konularak tereyağında kızartılan ve üzerine şerbet dökülen geleneksel bir tatlıdır.",
    image: "/images/künefe.webp",
    hash: "künefe",
  },
];

export default Slide;
