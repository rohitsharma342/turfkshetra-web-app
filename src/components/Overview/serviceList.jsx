import React, { useEffect, useState } from "react";
import { FaUniversity, FaBuilding, FaUserTie, FaPencilRuler } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import { FaHospitalUser } from "react-icons/fa6";
import { IoFingerPrint } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const services = [
  {
    icon: <FaUniversity className="text-blue-600 text-4xl" />,
    title: "About AERB and e-Lora",
    description:
      "The Atomic Energy Regulatory Board (AERB) is the regulatory authority in India responsible for ensuring the safe use of radiation and nuclear energy.",
  },
  {
    icon: <FaBuilding className="text-blue-600 text-4xl" />,
    title: "Register Institute with AERB",
    description:
      "Institute Registration in diagnostic radiology is the initial step for any facility intending to use diagnostic X-ray equipment.",
  },
  {
    icon: <FaUserTie className="text-blue-600 text-4xl" />,
    title: "Radiational Professional Registration (RPR)",
    description:
      "Formal recognition to professionals who are qualified to handle radiation safety duties, such as RSOs, X-ray technologists, and other personnel involved in radiation protection.",
  },
  {
    icon: <FaPencilRuler className="text-blue-600 text-4xl" />,
    title: "Procurement Permission",
    description:
      "A License for Operation is a regulatory approval required for using diagnostic X-ray equipment in a medical or diagnostic facility.",
  },
  {
    icon: <TiStarburst className="text-blue-600 text-4xl" />,
    title: "License for Operation",
    description:
      "Procurement Permission is a mandatory regulatory step required before acquiring diagnostic X-ray equipment.",
  },
  {
    icon: <FaHospitalUser className="text-blue-600 text-4xl" />,
    title: "Adhoc Applications",
    description:
      "Remove duplicate or incorrectly declared X-ray equipment; Recognition of X-ray technologist course Application for enforcement compliance report",
  },
  {
    icon: <IoFingerPrint className="text-blue-600 text-4xl" />,
    title: "e-LORA Login Issue",
    description: "Facing issue with E-lora login.",
  },
  {
    icon: <TfiReload className="text-blue-600 text-4xl" />,
    title: "Employer Change",
    description:
      "An Employer Change in the context of diagnostic radiology facilities refers to the regulatory process of transferring responsibilities from the existing employer (who holds the current license) to a new employer. ",
  },
];

const ServiceList = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("service-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="service-section" className="mx-auto px-5 space-y-6">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex items-start space-x-4 p-4 rounded-lg shadow-md transform transition-all duration-700 ease-in-out ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } delay-[${index * 100}ms]`}
        >
          {/* Icon */}
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">{service.icon}</div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>

            {/* Button */}
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Read More →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;