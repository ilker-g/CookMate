import React from "react";

// const Recipe = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(decodeURIComponent(location.hash.substring(1)));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);
// }

function Recipes() {
  return (
    <>
      <div className=" lg:mx-0">
        <div className="bg-[#333] text-nowrap flex items-center gap-5 p-6 lg:justify-center mb-10">
          <img
            src="/images/cookmate.png"
            alt="logo"
            className="w-[9rem] md:w-xs lg:mx-10 lg:w-sm hover:cursor-pointer"
            onClick={() => {
              window.location = "/";
            }}
          />
          <h1 className="text-center text-xl font-bold md:text-3xl lg:text-4xl ">
            Çok Sevilen Tarifler
          </h1>
        </div>

        {data.map((r) => (
          <section
            id={r.hash}
            className="mb-10 mx-[2.5%] md:mb-20 md:grid md:grid-cols-4 md:flex-wrap bg-orange-200 rounded-xl lg:items-center lg:w-[95%] md:overflow-hidden  "
          >
            <div className="flex md:flex md:flex-col md:justify-center p-4 lg:p- items-center space-x-5 lg:space-x-0 lg:flex-col  rounded-xl">
              <img
                src={r.image}
                alt="yemek görselleri"
                className="rounded-xl w-30 lg:w-xs"
              />
              <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl lg:my-10 p-2 lg:text-center ">
                {r.name}
              </h1>
            </div>

            <div className="lg:flex lg:mt-0 md:flex md:items-stretch md:gap-2 md:mt-2  ">
              <div className="p-4 rounded-xl md:min-w-[110%]  ">
                <h3 className="mb-4 text-2xl md:py-4 lg:text-4xl md:text-3xl ">
                  Malzemeler
                </h3>
                {r.ingredients.map((ingredient, index) => (
                  <p
                    className="font-semibold first-letter:uppercase md:text-lg   lg:text-xl text-[#333] mb-1"
                    key={index}
                  >
                    {ingredient}
                  </p>
                ))}
              </div>
              <div className=" rounded-xl p-4 pb-8 md:min-w-[170%] ">
                <h3 className="text-2xl md:py-4 md:text-3xl lg:text-4xl mb-4 ">
                  Yapılış
                </h3>
                <ul>
                  {r.steps.map((step, index) => (
                    <li
                      className=" text-[#333] font-semibold lg:text-xl md:text-lg lg:break-all lg:whitespace-normal mb-1 "
                      key={index}
                    >
                      🍽️ {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

const data = [
  {
    name: "İskender Kebap",
    ingredients: [
      "döner eti: 300g",
      "tereyağı: 2 yemek kaşığı",
      "pideler: 2 adet",
      "domates sosu: 1 su bardağı",
      "yoğurt: 1 su bardağı",
      "tuz: 1 çay kaşığı",
      "karabiber: 1 çay kaşığı",
    ],
    hash: "iskender",
    image: "/images/iskender.webp",

    steps: [
      "Pideleri küp küp doğrayın ve tereyağında hafifçe kızartın.",
      "Döner etini tavada ısıtın veya hazır döner kullanıyorsanız kızartın.",
      "Domates sosunu küçük bir tencerede ısıtın ve tuz ile karabiber ekleyin.",
      "Servis tabağına pideleri yayın, üzerine döner etlerini koyun.",
      "Üzerine domates sosunu gezdirin ve eritilmiş tereyağı dökün.",
      "Yanına yoğurt ekleyerek sıcak servis edin.",
    ],
  },
  {
    name: "Mantı",
    ingredients: [
      "un: 3 su bardağı",
      "su: 1 su bardağı",
      "tuz: 1 tatlı kaşığı",
      "yumurta: 1 adet",
      "kıyma: 250g",
      "soğan: 1 adet rendelenmiş",
      "karabiber: 1 çay kaşığı",
      "tereyağı: 2 yemek kaşığı",
      "yoğurt: 1 su bardağı",
      "sarımsak: 2 diş",
      "kırmızı toz biber: 1 çay kaşığı",
    ],
    hash: "mantı",
    image: "/images/mantı.webp",

    steps: [
      "Un, su, tuz ve yumurtayı yoğurarak sert bir hamur elde edin.",
      "Hamuru ince açın ve küçük kareler halinde kesin.",
      "Kıyma, rendelenmiş soğan, tuz ve karabiberi karıştırarak iç harcı hazırlayın.",
      "Her kare hamurun ortasına kıymalı harçtan koyun ve bohça şeklinde kapatın.",
      "Kaynar tuzlu suda mantıları haşlayın.",
      "Yoğurdu ezilmiş sarımsak ile karıştırın.",
      "Mantıların üzerine sarımsaklı yoğurt ve tereyağında kızdırılmış kırmızı biber gezdirerek servis edin.",
    ],
  },
  {
    name: "Kuru Fasulye",
    ingredients: [
      "kuru fasulye: 2 su bardağı",
      "su: 5 su bardağı",
      "soğan: 1 adet doğranmış",
      "salça: 1 yemek kaşığı",
      "sıvı yağ: 3 yemek kaşığı",
      "tuz: 1 tatlı kaşığı",
      "karabiber: 1 çay kaşığı",
      "pul biber: 1 çay kaşığı",
      "sucuk veya pastırma: Opsiyonel",
    ],
    hash: "fasulye",
    image: "/images/kuruFasulye.webp",

    steps: [
      "Fasulyeleri bir gece önceden suda bekletin.",
      "Ertesi gün süzüp yeni suyla haşlayın.",
      "Tencerede sıvı yağı ısıtın, doğranmış soğanı ekleyip kavurun.",
      "Salçayı ekleyip birkaç dakika kavurun.",
      "Haşlanmış fasulyeleri ekleyin, tuz ve baharatları koyun.",
      "Üzerine sıcak su ekleyip kısık ateşte pişirin.",
      "İsteğe bağlı olarak sucuk veya pastırma ekleyebilirsiniz.",
      "Pirinç pilavı ile servis edin.",
    ],
  },
  {
    name: "Hünkar Beğendi",
    ingredients: [
      "kuşbaşı kuzu eti: 400g",
      "tereyağı: 2 yemek kaşığı",
      "soğan: 1 adet doğranmış",
      "domates: 2 adet rendelenmiş",
      "biber: 1 adet doğranmış",
      "salça: 1 yemek kaşığı",
      "tuz: 1 çay kaşığı",
      "karabiber: 1 çay kaşığı",
      "patlıcan: 2 adet közlenmiş",
      "un: 1 yemek kaşığı",
      "süt: 1 su bardağı",
      "kaşar peyniri: 1 çay bardağı rendelenmiş",
    ],
    hash: "hünkar",
    image: "/images/hünkar.webp",

    steps: [
      "Tencerede tereyağını eritin, kuşbaşı eti ekleyip kavurun.",
      "Doğranmış soğan, biber ve salçayı ekleyerek kavurmaya devam edin.",
      "Domatesleri ekleyin, tuz ve baharatları koyun, kısık ateşte pişirin.",
      "Patlıcanları közleyin, kabuklarını soyup ezerek bir kaba alın.",
      "Başka bir tencerede tereyağını eritip unu kavurun.",
      "Sütü ekleyip hızlıca karıştırın, közlenmiş patlıcanları ekleyin.",
      "Kaşar peynirini ekleyip karıştırarak beğendiyi hazırlayın.",
      "Beğendiyi tabağa koyun, üzerine pişen etleri ekleyerek servis edin.",
    ],
  },
  {
    name: "Lahmacun",
    ingredients: [
      "un: 4 su bardağı",
      "su: 1.5 su bardağı",
      "tuz: 1 tatlı kaşığı",
      "maya: 1 paket",
      "kıyma: 250g",
      "soğan: 1 adet doğranmış",
      "domates: 1 adet doğranmış",
      "biber: 1 adet doğranmış",
      "maydanoz: Yarım demet doğranmış",
      "salça: 1 yemek kaşığı",
      "karabiber: 1 çay kaşığı",
      "pul biber: 1 çay kaşığı",
      "limon: 1 adet",
    ],
    hash: "lahmacun",
    image: "/images/lahmacun.webp",

    steps: [
      "Un, su, maya ve tuzu yoğurarak hamur yapın, 30 dakika dinlendirin.",
      "Kıyma, soğan, domates, biber, salça, baharatlar ve maydanozu karıştırarak iç harcı hazırlayın.",
      "Hamuru bezelere ayırıp ince açın.",
      "İç harcı hamurun üzerine yayın.",
      "200 derece fırında 10-15 dakika pişirin.",
      "Limon sıkarak sıcak servis edin.",
    ],
  },

  {
    name: "Zeytinyağlı Yaprak Sarma",
    ingredients: [
      "asma yaprağı: 300g",
      "pirinç: 1 su bardağı",
      "soğan: 2 adet doğranmış",
      "zeytinyağı: 1 çay bardağı",
      "domates: 1 adet rendelenmiş",
      "tuz: 1 tatlı kaşığı",
      "karabiber: 1 çay kaşığı",
      "limon: 1 adet",
      "su: 2 su bardağı",
    ],
    hash: "sarma",
    image: "/images/sarma.webp",

    steps: [
      "Soğanı zeytinyağında kavurun, pirinci ekleyip birkaç dakika çevirin.",
      "Domates, tuz ve baharatları ekleyip karıştırın, iç harcı hazırlayın.",
      "Asma yapraklarını sıcak suda bekletip süzün.",
      "Her yaprağın ortasına iç harçtan koyup rulo şeklinde sarın.",
      "Tencereye dizip üzerine limon dilimleri koyun.",
      "Üzerine su ekleyip kısık ateşte pişirin.",
      "Soğuduktan sonra servis edin.",
    ],
  },
  {
    name: "Karnıyarık",
    ingredients: [
      "patlıcan: 4 adet",
      "kıyma: 250g",
      "soğan: 1 adet doğranmış",
      "domates: 1 adet doğranmış",
      "yeşil biber: 1 adet doğranmış",
      "salça: 1 yemek kaşığı",
      "tuz: 1 çay kaşığı",
      "karabiber: 1 çay kaşığı",
      "sıvı yağ: 1 çay bardağı",
    ],
    hash: "karnıyarık",
    image: "/images/karnıyarık.webp",

    steps: [
      "Patlıcanları alacalı soyup tuzlu suda bekletin, ardından kurulayın ve kızartın.",
      "Kıyma, soğan, biber ve domatesi tavada kavurun, salça ve baharatları ekleyin.",
      "Kızarmış patlıcanların ortasını açıp iç harcı doldurun.",
      "Biraz su ekleyerek fırında 180°C’de 20 dakika pişirin.",
      "Pirinç pilavı ile servis edin.",
    ],
  },
  {
    name: "Su Böreği",
    ingredients: [
      "un: 4 su bardağı",
      "yumurta: 4 adet",
      "su: 1 su bardağı",
      "tuz: 1 tatlı kaşığı",
      "peynir: 250g",
      "maydanoz: Yarım demet doğranmış",
      "tereyağı: 3 yemek kaşığı",
    ],
    hash: "suBörek",
    image: "/images/börek.webp",

    steps: [
      "Un, yumurta, su ve tuzu yoğurarak hamur yapın, 30 dakika dinlendirin.",
      "Hamuru bezelere ayırıp ince yufkalar açın.",
      "Yufkaları kaynar suya batırıp soğuk suya alın, süzün.",
      "Tepsiye bir kat yufka serin, peynirli harç ekleyin, bu işlemi tekrarlayın.",
      "Üzerine eritilmiş tereyağı sürüp 180°C’de kızarana kadar pişirin.",
      "Dilimleyerek sıcak servis edin.",
    ],
  },
  {
    name: "Mercimek Çorbası",
    ingredients: [
      "kırmızı mercimek: 1 su bardağı",
      "soğan: 1 adet doğranmış",
      "havuç: 1 adet doğranmış",
      "su veya et suyu: 5 su bardağı",
      "tereyağı: 1 yemek kaşığı",
      "tuz: 1 çay kaşığı",
      "karabiber: 1 çay kaşığı",
      "kırmızı toz biber: 1 çay kaşığı",
    ],
    hash: "mercimekCorbası",
    image: "/images/mercimek.webp",

    steps: [
      "Tencerede tereyağını eritip soğanı kavurun.",
      "Havucu ekleyip birkaç dakika daha kavurun.",
      "Mercimek ve suyu ekleyin, kaynamaya bırakın.",
      "Tuz ve baharatları ekleyip 20 dakika pişirin.",
      "Blenderdan geçirerek pürüzsüz hale getirin.",
      "Üzerine tereyağında kızdırılmış kırmızı biber dökerek servis edin.",
    ],
  },
  {
    name: "Künefe",
    ingredients: [
      "kadayıf: 300g",
      "tereyağı: 3 yemek kaşığı",
      "peynir (tuzsuz): 200g",
      "şeker: 2 su bardağı",
      "su: 1.5 su bardağı",
      "limon suyu: 1 tatlı kaşığı",
      "antep fıstığı: Üzeri için",
    ],
    hash: "künefe",
    image: "/images/künefe.webp",

    steps: [
      "Şeker ve suyu kaynatıp limon suyu ekleyerek şerbeti hazırlayın, soğumaya bırakın.",
      "Kadayıfı ince ince doğrayın ve eritilmiş tereyağı ile harmanlayın.",
      "Yağlanmış tepsiye kadayıfın yarısını yayın.",
      "Üzerine peynir ekleyip kalan kadayıfı üzerine kapatın.",
      "Orta ateşte altı kızarana kadar pişirin, sonra ters çevirip diğer yüzünü pişirin.",
      "Sıcak künefeye soğuk şerbeti dökün.",
      "Antep fıstığı ile süsleyip sıcak servis edin.",
    ],
  },
];

export default Recipes;
