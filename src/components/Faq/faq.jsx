import { useState } from "react";

const faqs = [
  {
    question: "How often do I need to submit a Radiation Protection Survey Report?",
    answer: "Survey reports must be submitted periodically as per regulatory guidelines. Contact AERB for specific timelines.",
  },
  {
    question: "How do I modify the layout of my X-ray room in e-LORA?",
    answer:
      "If you need to change the layout of your X-ray room, you must submit an application for a Change in Layout through e-LORA. This involves updating shielding details and submitting a revised layout plan to AERB for approval. We can guide you through the entire modification process to ensure compliance.",
  },
  {
    question: "What happens if my facility fails to comply with AERB regulations?",
    answer: "Non-compliance may lead to penalties, suspension, or cancellation of licenses. It is essential to follow all AERB guidelines to avoid any such consequences.",
  },
  {
    question: "How can I contact AERB for help regarding my application?",
    answer: "You can reach out to AERB through their official website, email support, or helpline for assistance regarding your application.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <p className="text-gray-600 mt-2">Answers to common queries about our services and how we can assist you.</p>
      <div className="mt-8 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg mb-4 cursor-pointer">
            <button
              className="w-full text-left px-4 py-3 font-semibold text-gray-900 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {openIndex === index ? "-" : "+"} {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
