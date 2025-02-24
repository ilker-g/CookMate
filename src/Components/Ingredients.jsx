import { useState } from "react";
import "./Ingredients.css";

function Ingredients() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelection = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  // Seçilen malzemeleri saklamak için state
  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);
  const [yeniMalzeme, setYeniMalzeme] = useState("");

  // Butona tıklanınca malzemeyi ekleyen fonksiyon
  const malzemeEkle = (malzeme) => {
    if (secilenMalzemeler.includes(malzeme)) {
      setSecilenMalzemeler(
        secilenMalzemeler.filter((item) => item !== malzeme)
      );
    } else {
      setSecilenMalzemeler([...secilenMalzemeler, malzeme]);
    }
  };

  // // Seçilen malzemeyi kaldıran fonksiyon
  // const malzemeKaldir = (malzeme) => {
  //   setSecilenMalzemeler(secilenMalzemeler.filter((item) => item !== malzeme));
  // };

  // yeni malzeme ekleme
  const yeniMalzemeEkle = () => {
    if (yeniMalzeme.trim() !== "" && !secilenMalzemeler.includes(yeniMalzeme)) {
      setSecilenMalzemeler([...secilenMalzemeler, yeniMalzeme]);
      setYeniMalzeme("");
    }
  };

  const closeAlert = (malzeme) => {
    const chipElement = document.getElementById("chip");
    chipElement.style.display = "none"; // Hide the chip
    setSecilenMalzemeler(secilenMalzemeler.filter((item) => item !== malzeme));
  };

  return (
    <div>
      <div className="bg-[#333] text-nowrap flex items-center gap-5 p-6 lg:justify-center mb-10">
        <img
          src="/images/cookmate.png"
          alt="logo"
          className="w-[10rem] lg:w-[6rem] md:w-xs lg:mx-10 lg:w-xs hover:cursor-pointer"
          onClick={() => {
            window.location = "/";
          }}
        />
      </div>

      <div className="pt-10 mx-10">
        <h2 className="text-center text-2xl lg:text-3xl pb-20 ">
          Dilediğiniz kadar tür seçin ve seçtiğiniz türler ile ilgili tarifleri
          görmek için aşağıdan malzeme seçip tarifleri göster butonuna
          tıklayınız.
        </h2>

        <div className="grid grid-cols-4 justify-center gap-5 lg:flex lg:gap-25 ">
          {data.map((d) => (
            <div
              className={`hover:cursor-pointer lg:space-y-2 transform hover:scale-110 transition ease-in-out 
                ${
                  selectedItems.includes(d) ? "opacity-50" : ""
                } // If the item is selected, apply the opacity class
                `}
              onClick={() => handleSelection(d)}
            >
              <div>
                <img
                  src={d.img}
                  alt="yemek görseli"
                  className=" w-[5rem] h-auto rounded-xl "
                />
                <p>{d.name} </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col p-5 items-center">
        <div className="my-10">
          <input
            type="text"
            value={yeniMalzeme}
            onChange={(e) => setYeniMalzeme(e.target.value)}
            placeholder="Malzeme ekle.."
            className="lg:w-[450px]  h-10 p-3 border border-gray-300 rounded-lg"
          />
          <button
            onClick={yeniMalzemeEkle}
            className=" ml-5 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            Ekle
          </button>
        </div>

        {/* Kategorileri göster */}
        <div className="grid lg:grid-cols-3 gap-10 text-center ">
          {kategoriler.map((kategori, index) => (
            <div
              key={index}
              className="custom-scroll bg-[#ffc19b] p-4 rounded-lg shadow-md h-50 overflow-y-auto"
            >
              <h3 className="text-lg font-bold mb-3">{kategori.kategori}</h3>
              <div className="flex flex-wrap gap-2">
                {kategori.malzemeler.map((malzeme) => (
                  <button
                    key={malzeme}
                    onClick={() => malzemeEkle(malzeme)}
                    className={`bg-[#ff904d] text-white px-3 py-1 rounded-lg hover:bg-[#ff6c12] 
                                            ${
                                              secilenMalzemeler.includes(
                                                malzeme
                                              )
                                                ? "selected"
                                                : ""
                                            }`}
                  >
                    {malzeme}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Seçilen malzemeleri göster */}
        <div className="mt-10 p-4 bg-orange-200 rounded-lg shadow-md flex justify-between items-center lg:w-[1000px] w-screen  flex-col">
          <div>
            <h3 className="text-lg font-semibold mb-2">Seçilen Malzemeler:</h3>
            <div className="flex flex-wrap gap-4">
              {secilenMalzemeler.map((malzeme, index) => (
                // <span
                //   key={`${malzeme}-${index}`}
                //   className="bg-orange-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-orange-700 transition"
                //   onClick={() => malzemeKaldir(malzeme)} // tıklanınca silme işi
                // >
                //   {malzeme}
                // </span>

                <div
                  id="chip"
                  class="relative rounded-md flex bg-[#ff904d] hover:bg-[#ff6c12] py-1 pl-2.5 pr-10 border border-transparent text-sm text-white transition-all shadow-sm"
                >
                  {malzeme}
                  <button
                    class="flex items-center justify-center transition-all p-1 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-0.5 right-0.5 hover:cursor-pointer"
                    type="button"
                    key={index}
                    onClick={() => closeAlert(malzeme)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tarifleri Göster Butonu */}
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-150 ease-in-out mt-10"
            onClick={() => console.log("Tarifleri Göster butonuna tıklandı")}
          >
            Tarifleri Göster
          </button>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Ana Yemek",
    img: "/images/ana-yemek.png",
  },

  {
    name: "Çorba",
    img: "/images/corba.png",
  },

  {
    name: "Fast Food",
    img: "/images/fast-food.png",
  },

  {
    name: "Hamur İşi",
    img: "/images/hamur-isi.png",
  },

  {
    name: "Salata ve Meze",
    img: "/images/salata.png",
  },

  {
    name: "Tatlı",
    img: "/images/tatlıı.jpeg",
  },

  {
    name: "Makarna",
    img: "/images/makarna.png",
  },
  {
    name: "Pilav",
    img: "/images/ppilav.jpeg",
  },
];

// Kategorilere göre malzemeler
const kategoriler = [
  {
    kategori: "Tahıl",
    malzemeler: [
      "Salata Turşusu",
      "Salça",
      "Soğan",
      "Patates",
      "Pastırma",
      "Sucuk",
      "Kaşar",
      "Salata Turşusu",
      "Salça",
      "Soğan",
      "Patates",
      "Pastırma",
      "Sucuk",
      "Kaşar",
      "Salata Turşusu",
      "Salça",
      "Soğan",
      "Patates",
      "Pastırma",
      "Sucuk",
      "Kaşar",
    ],
  },
  {
    kategori: "Et ve Et Ürünleri",
    malzemeler: [
      "Tavuk",
      "Dana Eti",
      "Balık",
      "Sucuk",
      "Kıyma",
      "Tavuk",
      "Dana Eti",
      "Balık",
      "Sucuk",
      "Kıyma",
      "Tavuk",
      "Dana Eti",
      "Balık",
      "Sucuk",
      "Kıyma",
      "Tavuk",
      "Dana Eti",
      "Balık",
      "Sucuk",
      "Kıyma",
      "Tavuk",
      "Dana Eti",
      "Balık",
      "Sucuk",
      "Kıyma",
    ],
  },
  {
    kategori: "Sebzeler",
    malzemeler: [
      "Domates",
      "Biber",
      "Marul",
      "Mantar",
      "Brokoli",
      "Domates",
      "Biber",
      "Marul",
      "Mantar",
      "Brokoli",
      "Domates",
      "Biber",
      "Marul",
      "Mantar",
      "Brokoli",
      "Domates",
      "Biber",
      "Marul",
      "Mantar",
      "Brokoli",
      "Domates",
      "Biber",
      "Marul",
    ],
  },
  {
    kategori: "Süt ve Süt Ürünleri",
    malzemeler: [
      "süt",
      "peynir",
      "yoğurt",
      "ayran",
      "kaşar",
      "misket peynir",
      "örgü peynir",
      "tel peynir",
      "süt",
      "peynir",
      "yoğurt",
      "ayran",
      "kaşar",
      "misket peynir",
      "örgü peynir",
      "tel peynir",
    ],
  },
  {
    kategori: "Bakliyat",
    malzemeler: [
      "süt",
      "peynir",
      "yoğurt",
      "ayran",
      "kaşar",
      "misket peynir",
      "örgü peynir",
      "tel peynir",
      "süt",
      "peynir",
      "yoğurt",
      "ayran",
      "kaşar",
      "misket peynir",
      "örgü peynir",
      "tel peynir",
    ],
  },

  {
    kategori: "Baharat ve Diğer Malzemeler",
    malzemeler: [
      "kimyon",
      "nane",
      "kekik",
      "zerdeçal",
      "tuz",
      "karabiber",
      "kumkat",
      "safran",
      "kapari",
      "yenibahar",
      "kişniş",
      "haşhaş",
      "safran",
      "kapari",
      "yenibahar",
      "kişniş",
      "haşhaş",
    ],
  },
];

export default Ingredients;
