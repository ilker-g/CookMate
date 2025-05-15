import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSquareXTwitter, faInstagram, faPinterest, faYoutube, faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer className='bg-[#fdf2e9] px-4 md:px-16 lg:px-28'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-6 pt-6'>
                <div className='text-[#ff914d]'>
                    <h2 className='text-2xl font-bold mb-4'>Hakkında</h2>
                    <p>
                        CookMate, elinizde bulunan malzemelerleri bir araya getirmenizi sağlayarak leziz ve yaratıcı yemek
                        tarifleri veren kullanıcı dostu bir web sitesidir.
                    </p>
                </div>

                <div className='text-[#ff914d]'>
                    <h2 className='text-2xl font-bold mb-4 whitespace-nowrap'>İletişime Geçin</h2>
                    <ul>
                        <li><a href="" className='hover:underline'>👩‍🍳Eslem Uzavcı</a></li>
                        <li><a href="" className='hover:underline'>👩‍🍳 Sıla Ezgi</a></li>
                        <li><a href="" className='hover:underline'>👨‍🍳 İlker Gülmez</a></li>
                        <li><a href="" className='hover:underline'>👨‍🍳 Hasan Yılmaz</a></li>
                    </ul>
                </div>

                <div className='-ml-19 text-[#ff914d]'>
                    <h2 className='text-2xl font-bold mb-4 whitespace-nowrap'>Kullanım Koşulları</h2>
                    <ul>
                        <li className='whitespace-nowrap'>✔ İçerik izinsiz kopyalanamaz veya paylaşılmaz.</li>
                        <li className='whitespace-nowrap'>✔ Kişisel veriler KVKK/GDPR kapsamında korunmaktadır.</li>
                        <li className='whitespace-nowrap'>✔ Site içeriği haber verilmeksizin değiştirilebilir.</li>
                        <li className='whitespace-nowrap'>✔ Üçüncü taraf linklerin içeriğinden sorumlu değiliz.</li>
                    </ul>
                </div>

                <div className='ml-28 text-[#ff914d]'>
                    <h2 className='text-2xl font-bold mb-4 whitespace-nowrap'>Takipte Kalın</h2>
                    {/*                     <ul>
                        <li className='text-xl'><a href="" className='hover:text-orange-600'><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                        <li className='text-xl'><a href="" className='hover:text-black'><FontAwesomeIcon icon={faSquareXTwitter} /> Twitter</a></li>
                        <li className='text-xl'><a href="" className='hover:text-red-600'><FontAwesomeIcon icon={faPinterest} /> Pinterest</a></li>
                        <li className='text-xl '><a href="" className='hover:text-red-700'><FontAwesomeIcon icon={faYoutube} /> Youtube</a></li>
                    </ul> */}
                </div>
            </div>

            <div className='border-t border-[#ff914d] p-4 mt-6'></div>
            <div className='text-center text-lg font-bold text-[#ff914d]'>CookMate Mobil'i indirin ve cepten tariflerin keyfini çıkarın!</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2 pt-2 text-white ml-30">

                <div className="border-t border-white bg-[#ff914d] p-3 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left max-w-[250px] h-[100px] md:h-[100px]">
                    {/* <FontAwesomeIcon icon={faGooglePlay} className="w-12 h-12 md:text-6xl" /> */}
                    <div>
                        <h2 className="text-lg font-bold whitespace-nowrap">Hemen indir</h2>
                        <h2 className="text-2xl md:text-2xl font-bold whitespace-nowrap mt-1">Google Play</h2>
                    </div>
                </div>

                <div className="border-t border-white bg-[#ff914d] p-3 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left max-w-[250px] h-[100px] md:h-[100px]">
                    {/* <FontAwesomeIcon icon={faAppStoreIos} className="w-12 h-12 md:text-6xl" /> */}
                    <div>
                        <h2 className="text-lg font-bold whitespace-nowrap">Hemen indir</h2>
                        <h2 className="text-2xl md:text-2xl font-bold whitespace-nowrap mt-1">App Store</h2>
                    </div>
                </div>

                <div className="border-t border-white bg-[#ff914d] p-3 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left max-w-[250px] h-[100px] md:h-[100px]">
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                    >
                        <title>AppGallery</title>
                        <path d="M6.734 0C1.804 0 0 1.803 0 6.733v10.535C0 22.198 1.803 24 6.734 24h10.529C22.193 24 24 22.197 24 17.268V6.733C24 1.803 22.197 0 17.266 0zM8 4h.565A3.439 3.439 0 0 0 12 7.435 3.439 3.439 0 0 0 15.435 4H16c0 2.206-1.794 4-4 4S8 6.206 8 4zm6.468 8h.52l.713 2.16.696-2.158h.66l-1.092 3.14h-.532l-.714-2.063-.714 2.063h-.528l-1.095-3.14h.678l.694 2.158zm6.236 0h.629v3.138h-.629zM2.666 12h.638v1.267h1.439V12h.637v3.142h-.637v-1.276h-1.44v1.276h-.637zm5.668 0h.637v1.772c0 .9-.496 1.417-1.36 1.417-.856 0-1.347-.507-1.347-1.39v-1.797H6.9v1.775c0 .524.255.805.719.805.46 0 .714-.273.714-.784zm2.344 0h.563l1.378 3.14h-.668l-.282-.654H10.23l-.286.654h-.651zm6.893.002h2.312v.572H18.2v.643h1.16v.573H18.2v.777h1.744v.573H17.57zm-6.623.793-.48 1.124h.964z" />
                    </svg>
                    <div>
                        <h2 className="text-lg font-bold whitespace-nowrap">Hemen indir</h2>
                        <h2 className="text-2xl md:text-2xl font-bold whitespace-nowrap mt-1">App Gallery</h2>
                    </div>
                </div>

            </div>
            <div className='border-t border-[#ff914d] p-4 mt-6'></div>
            <div><p className='text-[#ff914d] text-center pb-4 -mt-4 font-bold'>© Her hakkı saklıdır.</p></div>
        </footer>
    );
}

export default Footer;