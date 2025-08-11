import React, { useState } from "react";
import { HiMiniPlus, HiMiniXMark } from "react-icons/hi2";

const faqs = [
  {
    question: "How long does the battery last on a full charge?",
    answer:
      "The battery lasts up to 8 hours of continuous playback on a full charge. The charging case provides multiple additional charges, extending total usage to over 24 hours.",
  },
  {
    question: "Does it have noise cancellation?",
    answer:
      "Yes, the earbuds feature active noise cancellation technology to block out ambient sounds and provide an immersive listening experience.",
  },
  {
    question: "Is it water-resistant?",
    answer:
      "Yes, the earbuds have an IPX5 rating, making them sweat and water-resistant, perfect for workouts and outdoor use.",
  },
  {
    question: "Does it support wireless charging?",
    answer:
      "Absolutely! The charging case supports Qi wireless charging for convenient cable-free power-ups.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="flex flex-col items-center pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-20">
  <h1 className="text-black text-2xl sm:text-3xl md:text-3xl font-bold mb-12 w-full px-4 sm:px-7 text-left">
    Frequently Asked Questions
  </h1>
  <div className="flex flex-col gap-3 w-full px-4 sm:px-7">
    {faqs.map((faq, idx) => (
      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          className="w-full flex items-center justify-between px-5 sm:px-7 py-4 cursor-pointer select-none text-black text-base sm:text-lg font-semibold"
          onClick={() => toggle(idx)}
          aria-expanded={openIndex === idx}
          aria-controls={`faq-answer-${idx}`}
        >
          <span>{faq.question}</span>
          <span className="text-2xl sm:text-3xl font-bold">
            {openIndex === idx ? <HiMiniXMark /> : <HiMiniPlus />}
          </span>
        </button>
        {openIndex === idx && (
          <div
            id={`faq-answer-${idx}`}
            className="px-5 sm:px-7 pb-6 pt-2 text-black text-sm sm:text-base whitespace-pre-line"
          >
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

  );
}
