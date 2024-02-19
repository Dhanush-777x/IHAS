import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
const ChatWithAIButton = () => {
    return (
        <div>
            <Link
                to="/"
                className="fixed bottom-10 right-10 rounded-full px-3.5 py-2 overflow-hidden group cursor-pointer border-2 font-medium border-black bg-black text-white hover:text-black z-10 shadow-md"
            >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-black ease">
                    <FontAwesomeIcon icon={faComments} className="hidden md:inline-block mr-2" />
                    <FontAwesomeIcon icon={faRobot} className="md:hidden" />
                    <span className="hidden md:inline-block">Chat with AI</span>
                </span>
            </Link>
        </div>

    );
};

export default ChatWithAIButton;
