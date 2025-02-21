import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex h-screen bg-cover bg-center bg-[url('/images/ratatouille.jpg')]">
        <div className="w-full max-w-sm m-auto bg-[#fdf2e9] rounded p-8">
          <header>
            <img
              className="w-[10rem] mx-auto mb-5 hover:cursor-pointer"
              src="/public/images/cookmate.png"
              onClick={() => (window.location = "/")}
            />
          </header>
          <form>
            <div>
              <label className=" block mb-2 text-[#333] text-lg" for="username">
                Kullanıcı Adı
              </label>
              <input
                className="w-full p-2 mb-6 text-[#333] border-b-2 border-[#ff914e] outline-none focus:bg-gray-300"
                type="text"
                name="username"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#333] text-lg" for="password">
                Şifre
              </label>
              <input
                className="w-full p-2 mb-6 text-[#333] border-b-2 border-[#ff914e] outline-none focus:bg-gray-300"
                type="password"
                name="password"
              />
            </div>
            <div>
              <input
                className="w-full bg-[#ff914e] hover:bg-pink-700 text-white font-bold py-2 px-8 mb-6 rounded hover:cursor-pointer"
                type="submit"
              />
            </div>
          </form>
          <footer>
            <a
              className="text-[#ff914e] hover:underline text-md float-left"
              href="#"
            >
              Şifremi Unuttum?
            </a>
            <a
              className="text-[#ff914e] hover:underline  text-md float-right"
              href="#"
            >
              Hesap Oluştur
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
