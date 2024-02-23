import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';

const HelplineCard = ({ title, number }) => {
    const handleCall = () => {
        window.location.href = `tel:${number}`;
    };

    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                        <div className="mt-2 text-gray-900 py-4">{number}</div>
                    </div>
                    <button onClick={handleCall} className="bg-primary text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                        Call
                    </button>
                </div>
            </div>
        </div>
    );
};


const HelplineNumbers = () => {
    const helplines = [
        { "title": "National Emergency Number", "number": "112" },
        { "title": "Police", "number": "100" },
        { "title": "Fire", "number": "101" },
        { "title": "Ambulance", "number": "102" },
        { "title": "Disaster Management Services", "number": "108" },
        { "title": "Women Helpline", "number": "1091" },
        { "title": "Women Helpline - (Domestic Abuse)", "number": "181" },
        { "title": "Air Ambulance", "number": "9540161344" },
        { "title": "Aids Helpline", "number": "1097" },
        { "title": "Anti Poison (New Delhi)", "number": "1066" },
        { "title": "Disaster Management (N.D.M.A)", "number": "01126701728" },
        { "title": "EARTHQUAKE / FLOOD / DISASTER (N.D.R.F Headquarters)", "number": "011-24363260" },
        { "title": "Deputy Commissioner Of Police – Missing Child And Women", "number": "1094" },
        { "title": "Railway Enquiry", "number": "139" },
        { "title": "Senior Citizen Helpline", "number": "14567" },
        { "title": "Medical Helpline", "number": "108" },
        { "title": "Railway Accident Emergency Service", "number": "1072" },
        { "title": "Road Accident Emergency Service", "number": "1073" },
        { "title": "Road Accident Emergency Service On National Highway For Private Operators", "number": "1033" },
        { "title": "ORBO Centre, AIIMS (For Donation Of Organ) Delhi", "number": "1060" },
        { "title": "Kisan Call Centre", "number": "18001801551" },
        { "title": "Relief Commissioner For Natural Calamities", "number": "1070" },
        { "title": "Children In Difficult Situation", "number": "1098" },
        { "title": "National Poisons Information Centre - AIIMS NEW DELHI (24*7)", "number": "1800116117" },
        { "title": "Poison Information Centre (CMC, Vellore)", "number": "18004251213" },
        { "title": "Tourist Helpline", "number": "1363" },
        { "title": "LPG Leak Helpline", "number": "1906" },
        { "title": "KIRAN MENTAL HEALTH Helpline", "number": "18005990019" },
        { "title": "CYBER CRIME HELPLINE", "number": "155620" },
        { "title": "COVID 19 HELPLINE", "number": "1075" }
      ]
      

    return (
        <div className="flex flex-wrap justify-center items-center mt-8 md:mt-16 lg:mt-24 px-4 my-40">
            {helplines.map((helpline, index) => (
                <HelplineCard key={index} title={helpline.title} number={helpline.number} />
            ))}
        </div>
    );
};

export default HelplineNumbers;
