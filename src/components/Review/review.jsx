import { RiDoubleQuotesL } from "react-icons/ri";
export default function Testimonials() {
    

    const testimonials = [
      {
        id: 1,
        quote:
          "Thanks to xraysolutions360, we obtained our AERB license without any hassle. Their expertise in e-LORA saved us a lot of time and effort.",
        name: "Ramesh Thapar",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        quote:
          "Thanks to xraysolutions360, we obtained our AERB license without any hassle. Their expertise in e-LORA saved us a lot of time and effort.",
        name: "Sujeet Agarwal",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 3,
        quote:
          "xraysolutions360 provided excellent support in recovering my login id and password.",
        name: "Vivek Choudhary",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">

<span className="text-blue-600 text-6xl"><RiDoubleQuotesL/></span>
            <p className="italic text-gray-700 text-center font-bold px-10 mt-5">{testimonial.quote}</p>
            <div className="mt-4 flex items-center space-x-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  