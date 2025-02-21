import React, { use } from "react";
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate = useNavigate();
  return (
    <section id="Hero">
      <div className="mt-60 text-center ">
        <h1 className="text-3xl lg:text-5xl font-semibold pb-4 ">
          Elindeki malzemelerle hangi yemeği yapacağını bilmiyor musun?
        </h1>
        <p className="mt-6 text-lg lg:text-2xl">
          Endişelenme, elindeki malzemeleri bize söyle ve CookMate sana neler
          yapabileceğini göstersin!
        </p>
        <div className="text-center mt-15">
          <button className="font-semibold text-lg bg-[#ff914e] text-[#fdf2e9] px-4 py-2 lg:px-8 lg:py-4 rounded-lg transition duration-300 ease-in-out hover:shadow-lg shadow-[#ff914e]/50 cursor-pointer" onClick={() => navigate("/ingredients")}>
            Hemen Dene !
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
