import React from "react";
import pageImage from "../../assets/pages-photo.png"
const AboutUs = () => {
    
  return (
    <>
    <div className="flex justify-center">
     <img src={pageImage}/>
    </div>
      <div className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white py-16 px-8">
      <div className=" mx-auto">
        {/* Header */}
        <p className="text-lg font-semibold">
          Welcome to <span className="font-bold">xraysolutions360</span>, your trusted partner in navigating the complexities of AERB regulations and the e-LORA application process.
        </p>

        {/* Section: Our Mission */}
        <h2 className="text-4xl font-bold mt-8">Our Mission</h2>
        <p className="mt-4 text-lg">
          Our mission is to simplify the regulatory journey for our clients, ensuring compliance with safety standards while saving you time and effort. 
          We provide expert guidance and support, allowing clients to focus on their core operations.
        </p>

        {/* Section: Our Expertise */}
        <h3 className="text-2xl font-semibold mt-6">Our Expertise</h3>
        <ul className="mt-4 list-disc pl-5 text-lg">
          <li><span className="font-bold">AERB License Registration:</span> Assistance with the complete registration process for X-ray equipment.</li>
          <li><span className="font-bold">e-LORA Applications:</span> Expert help in submitting and managing e-LORA applications.</li>
          <li><span className="font-bold">Compliance Consultation:</span> Guidance on safety protocols and AERB guidelines.</li>
          <li><span className="font-bold">Quality Assurance Support:</span> Assistance with regulatory compliance.</li>
        </ul>

        {/* Section: Why Choose Us */}
        <h3 className="text-2xl font-semibold mt-6">Why Choose Us?</h3>
        <ul className="mt-4 list-disc pl-5 text-lg">
          <li><span className="font-bold">Personalized Service:</span> Customized solutions for unique needs.</li>
          <li><span className="font-bold">Experienced Team:</span> Deep knowledge of AERB regulations and e-LORA.</li>
          <li><span className="font-bold">Hassle-Free Process:</span> We handle licensing complexities.</li>
          <li><span className="font-bold">Commitment to Excellence:</span> Focus on quality service and long-term relationships.</li>
        </ul>

        {/* Call to Action Section */}
        <div className="mt-10 bg-white text-black p-6 rounded-lg shadow-lg text-center flex justify-between">
          <div>
          <h3 className="text-2xl font-bold">Call To Action</h3>
          <p className="mt-2 text-lg">Contact us today to learn how we can assist you!</p>
          </div>
          <a
            href="conatct-us"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default AboutUs;
