import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";

const LanguageBtn = () => {
    return (
        <div>
        <Link
            to="https://main----ihas--india-netlify-app.translate.goog/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
            className="fixed bottom-10 left-10 rounded-full px-3.5 py-2 overflow-hidden group cursor-pointer border-2 font-medium border-black bg-black text-white hover:text-black z-10 shadow-md"
            target="_blank"
        >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-white transition duration-300 group-hover:text-black ease">
                <span className="hidden md:inline-block">Change Language</span>
            </span>
        </Link>
    </div>
    );
};

export default LanguageBtn;
