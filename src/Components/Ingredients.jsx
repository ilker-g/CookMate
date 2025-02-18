import { useState } from "react";
import "./Ingredients.css";

export default function MalzemeSecici() {
    // Kategorilere göre malzemeler
    const kategoriler = [
        {
            kategori: "Tahıl",
            malzemeler: ["Salata Turşusu", "Salça", "Soğan", "Patates", "Pastırma", "Sucuk", "Kaşar", "Salata Turşusu", "Salça", "Soğan", "Patates", "Pastırma", "Sucuk", "Kaşar", "Salata Turşusu", "Salça", "Soğan", "Patates", "Pastırma", "Sucuk", "Kaşar",],
        },
        {
            kategori: "Et ve Et Ürünleri",
            malzemeler: ["Tavuk", "Dana Eti", "Balık", "Sucuk", "Kıyma", "Tavuk", "Dana Eti", "Balık", "Sucuk", "Kıyma", "Tavuk", "Dana Eti", "Balık", "Sucuk", "Kıyma", "Tavuk", "Dana Eti", "Balık", "Sucuk", "Kıyma", "Tavuk", "Dana Eti", "Balık", "Sucuk", "Kıyma",],
        },
        {
            kategori: "Sebzeler",
            malzemeler: ["Domates", "Biber", "Marul", "Mantar", "Brokoli", "Domates", "Biber", "Marul", "Mantar", "Brokoli", "Domates", "Biber", "Marul", "Mantar", "Brokoli", "Domates", "Biber", "Marul", "Mantar", "Brokoli", "Domates", "Biber", "Marul",],
        },
        {
            kategori: "Süt ve Süt Ürünleri",
            malzemeler: ["süt", "peynir", "yoğurt", "ayran", "kaşar", "misket peynir", "örgü peynir", "tel peynir", "süt", "peynir", "yoğurt", "ayran", "kaşar", "misket peynir", "örgü peynir", "tel peynir"]
        },
        {
            kategori: "Bakliyat",
            malzemeler: ["süt", "peynir", "yoğurt", "ayran", "kaşar", "misket peynir", "örgü peynir", "tel peynir", "süt", "peynir", "yoğurt", "ayran", "kaşar", "misket peynir", "örgü peynir", "tel peynir"]
        },

        {
            kategori: "Baharat ve Diğer Malzemeler",
            malzemeler: ["kimyon", "nane", "kekik", "zerdeçal", "tuz", "karabiber", "kumkat", "safran", "kapari", "yenibahar", "kişniş", "haşhaş", "safran", "kapari", "yenibahar", "kişniş", "haşhaş"],
        }
    ];

    // Seçilen malzemeleri saklamak için state
    const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);
    const [yeniMalzeme, setYeniMalzeme] = useState("");


    // Butona tıklanınca malzemeyi ekleyen/çıkaran fonksiyon
    const malzemeEkleCikar = (malzeme) => {
        if (secilenMalzemeler.includes(malzeme)) {
            setSecilenMalzemeler(secilenMalzemeler.filter((item) => item !== malzeme));
        } else {
            setSecilenMalzemeler([...secilenMalzemeler, malzeme]);
        }
    };


    // Seçilen malzemeyi kaldıran fonksiyon
    const malzemeKaldir = (malzeme) => {
        setSecilenMalzemeler(secilenMalzemeler.filter(item => item !== malzeme));
    };

    // yeni malzeme ekleme
    const yeniMalzemeEkle = () => {
        if (yeniMalzeme.trim() !== "" && !secilenMalzemeler.includes(yeniMalzeme)) {
            setSecilenMalzemeler([...secilenMalzemeler, yeniMalzeme]);
            setYeniMalzeme("");
        }
    }

    return (
        <div>


            <div className="p-5">
                <h2 className="mt-5 text-2xl font-bold mb-6 text-center font-weight:25px">Malzemeler</h2>
                <div className="m-5">
                    <input type="text"
                        value={yeniMalzeme}
                        onChange={(e) => setYeniMalzeme(e.target.value)}
                        placeholder="Malzeme ekle.."
                        className="max-w-1/4 w-full h-10 p-3 border border-gray-300 rounded-lg" />
                    <button
                        onClick={yeniMalzemeEkle}
                        className=" ml-5 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                        Ekle
                    </button>
                </div>

                {/* Kategorileri göster */}
                <div className="grid grid-cols-3 gap-6 ml-6">
                    {kategoriler.map((kategori, index) => (
                        <div key={index} className="custom-scroll bg-[#ffc19b] p-4 rounded-lg shadow-md h-50 w-130 overflow-y-auto">
                            <h3 className="text-lg font-bold mb-3">{kategori.kategori}</h3>
                            <div className="flex flex-wrap gap-2">
                                {kategori.malzemeler.map((malzeme) => (
                                    <button
                                        key={malzeme}
                                        onClick={() => malzemeEkleCikar(malzeme)}
                                        className={`bg-[#ff904d] text-white px-3 py-1 rounded-lg hover:bg-[#ff6c12] 
                                            ${secilenMalzemeler.includes(malzeme) ? "selected" : ""}`}
                                    >
                                        {malzeme}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seçilen malzemeleri göster */}
                <div className="mt-6 ml-5 p-4 bg-orange-200 rounded-lg shadow-md flex justify-between items-center w-435">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Seçilen Malzemeler:</h3>
                        <div className="flex flex-wrap gap-4">
                            {secilenMalzemeler.map((malzeme, index) => (
                                <span key={`${malzeme}-${index}`} className="bg-orange-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-orange-700 transition"
                                onClick={()=> malzemeKaldir(malzeme)} // tıklanınca silme işi
                                >
                                    {malzeme}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tarifleri Göster Butonu */}
                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-150 ease-in-out"
                        onClick={() => console.log("Tarifleri Göster butonuna tıklandı")}
                    >
                        Tarifleri Göster
                    </button>
                </div>
            </div>
        </div>
    );
}

