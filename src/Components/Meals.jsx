import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Meals() {

    const [selectedItems, setSelectedItems] = useState([]);
const navigate=useNavigate();
  
  
  const handleSelection = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item]; 
      }
    });
  };

  
  const handleNavigate = () => {
    navigate("/deneme", { state: { selectedItems } });
  };

     return(
        <>
<h2 className='text-xl text-center p-5 mb-5 '>TÜRLER</h2>

<p className="text-center pb-10 text-[20px]">Dilediğiniz kadar tür seçiniz ve seçtiğiniz türler ile ilgili tarifleri görmek için malzemeler sayfasına gidiniz.</p>

        <div className='grid grid-cols-4 justify-center gap-5 lg:flex lg:gap-25 '>
{data.map((d)=>( 
    
    <div className={`hover:cursor-pointer lg:space-y-2 transform hover:scale-110 transition ease-in-out 
        ${selectedItems.includes(d) ? 'opacity-50' : ''} // If the item is selected, apply the opacity class
      `}
      onClick={() => handleSelection(d)}
    >

        <img src={d.img} alt="yemek görseli" className='w-[5rem] h-auto rounded-xl ' />
        <p className='md:text-center text-center'>{d.name} </p>
        </div>
))}
        </div>

<div className="flex justify-center mb-10 mt-10">
        <button onClick={handleNavigate} 
        className="font-semibold mt-5 bg-[#FF914D] text-white px-8 py-3 rounded-lg  transition duration-300 ease-in-out hover:shadow-lg shadow-[#ff914e]/50 hover:cursor-pointer"
        disabled={selectedItems.length === 0} >
        Malzemelere Gidiniz
      </button>
      </div>
        <h2 className='text-xl text-center p-5 mb-5 '>YÖRELER</h2>

<div className='grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4 pb-8'>
    {regions.map((r,index)=>(
        
        <div key=""className={`${colors[index % colors.length]} text-white p-4 rounded-lg shadow-md transform hover:scale-110 hover:cursor-pointer hover:z-20 transition ease-in-out`}>
            <div className='flex gap-2 items-center'>
            <img src={r.img} className='w-[5rem] rounded-xl' alt="yemek görseli" />
            <p className='text-lg'>{r.name}</p> 
            </div>

            <div>
<p className='text-wrap'>{r.descriptions} </p>
</div>
        </div>
    ))}

</div>

</>

     )
}
const colors = ["bg-red-500",
    "bg-slate-400",
    "bg-green-500",
"bg-yellow-400",
"bg-pink-300",
"bg-cyan-900",
"bg-orange-200",
"bg-purple-400",
];

const data = [
    {
        name:"Ana Yemek", 
        img:"/images/ana-yemek.png"

    },

    {
        name:"Çorba", 
        img:"/images/corba.png"

    },

    {
        name:"Fast Food", 
        img:"/images/fast-food.png"

    },

    {
        name:"Hamur İşi", 
        img:"/images/hamur-isi.png"

    },

    {
        name:"Salata ve Meze", 
        img:"/images/salata.png"

    },

    {
        name:"Tatlı", 
        img:"/images/tatlıı.jpeg"

    },

    {
        name:"Makarna", 
        img:"/images/makarna.png"

    },
    {
        name:"Pilav",
        img:"/images/ppilav.jpeg"
    }
]
const regions =[
    {
        name:"İstanbul ve Saray Mutfağı",
        img:"/images/istanbul.jfif",
        descriptions:"Osmanlı saray mutfağının mirasını taşır.Bol baharat, kuru meyve, badem, fıstık ve zengin soslar kullanılır.",
    
    }, 
    {
        name:"Gaziantep Mutgağı",
        img:"/images/gaziantep.jfif",
        descriptions:"Et ve baharat ağırlıklıdır. Antep fıstığı, nar ekşisi, sumak sıkça kullanılır.",
    },
    {
        name:"Hatay (Antakya) Mutfağı",
        img:"/images/hatay.jfif",
        descriptions:"Arap, Osmanlı ve Akdeniz mutfaklarının harmanıdır. Bol baharat, tahin, nar ekşisi ve zeytinyağı kullanılır.",
    },
    {
        name:"Karadeniz Mutfağı",
        img:"/images/karadeniz.jfif",
        descriptions:"Deniz ürünleri, mısır ve yeşillikler yoğun kullanılır. Mısır unu, tereyağı ve peynir sıkça tüketilir.",
    },
    {
        name:"Ege Mutfağı",
        img:"/images/ege.jfif",
        descriptions:"Zeytinyağlı yemekler, otlar ve hafif yiyecekler ön plandadır. Deniz ürünleri, sebze ağırlıklı yemekler ve keçi sütünden yapılan peynirler öne çıkar.",
    },
    {
        name:"Doğuananadolu Mutfağı",
        img:"/images/danadolu.jfif",
        descriptions:"Et, bulgur ve süt ürünleri ağırlıklıdır. Yoğun baharat kullanımı görece azdır, yemekler genellikle doğal lezzetindedir.",
    },
    {
        name:"Güneydoğu Anadolu Mutfağı",
        img:"/images/gdanadolu.jfif",
        descriptions:"Acı, baharat, et ve yoğurtlu yemekler ağırlıktadır. Kebap kültürü oldukça yaygındır.",
    },
    {
        name:"İçanadolu Mutfağı",
        img:"/images/içanadolu.jfif",
        descriptions:"Hamur işleri ve tahıl ağırlıklıdır.Etli yemekler de sıkça tüketilir.",
    },
        
]

export default Meals;