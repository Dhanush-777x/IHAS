import React from "react";


const LanguageBtn = () => {
    return (
        <div>
            <a href="https://main----ihas--india-netlify-app.translate.goog/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
                className="fixed bottom-10 left-10 rounded-full px-3.5 py-2 overflow-hidden group cursor-pointer border-2 font-medium border-black bg-black text-white hover:text-black z-10 shadow-md"
                target="_blank" rel="noreferrer"
            >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-black ease">
                    {/* Replace FontAwesomeIcon with inline SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="md:hidden" width="24" height="24">
                        <path d="M479.068,96h-216.32l-22.515,87.1l-8.083,57.242l43.329,120.845l6.957,146.639h196.633  c18.184,0,32.932-14.748,32.932-32.932V128.932C512,110.748,497.252,96,479.068,96z" style={{fill: "#E6E6E6"}} />
                        <polygon points="368.696,416 282.435,507.826 251.882,416 264.348,382.521 " style={{fill: "#3A5BBC"}} />
                        <path d="M469.565,244.174v-20.87h-79.304v-29.217h-20.87v29.217H297.92v20.87h115.89  c-6.446,13.572-17.621,35.215-32.978,58.035c-14.132-17.649-23.062-29.931-23.168-30.077l-6.129-8.445l-16.892,12.255l6.127,8.445  c0.477,0.658,10.876,14.963,27.338,35.3c-11.222,13.749-31.808,36.106-42.655,46.952l14.756,14.756  c9.362-9.362,28.774-30.214,41.426-45.327c16.459,19.553,32.523,37.194,47.854,52.526l7.378,7.378l14.758-14.755l-7.378-7.378  c-15.839-15.839-32.519-34.264-49.647-54.799c22.133-31.823,36.48-61.956,42.2-74.866H469.565z" style={{fill: "#808080"}} />
                        <path d="M349.329,357.523L368.696,416H251.882H32.932C14.734,416,0,401.252,0,383.068V37.106  C0,18.922,14.734,4.174,32.932,4.174h199.416L262.748,96l45.607,137.739L349.329,357.523z" style={{fill: "#518EF8"}} />
                        <path d="M149.301,287.374c-42.77,0-77.565-34.795-77.565-77.565s34.795-77.565,77.565-77.565  c20.704,0,40.182,8.065,54.845,22.712l-14.749,14.766c-10.723-10.71-24.961-16.608-40.097-16.608  c-31.263,0-56.696,25.433-56.696,56.696s25.433,56.696,56.696,56.696c27.698,0,50.82-19.967,55.733-46.261h-55.731v-20.87h77.565  v10.435C226.866,252.579,192.071,287.374,149.301,287.374z" style={{fill: "#FFFFFF"}} />
                    </svg>
                    <span className="hidden md:inline-block">Change Language</span>
                </span>
            </a>
        </div>
    );
};

export default LanguageBtn;
