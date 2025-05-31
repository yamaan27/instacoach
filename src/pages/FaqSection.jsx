import React, { useState } from "react";

const faqData = [
  {
    question: "How do I get paid?",
    answer:
      "You’ll receive payment 24 hours upon submission of your PSV. This will initially show as Instacoach credit in your account which you can then cash out via Venmo (directly to your bank account).",
  },
  {
    question: "What are the fees?",
    answer:
      "10% commission on the sold price of a session. We collect this fee to maintain our platform so we can help you earn as much as you need and as flexible as possible!",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes! Instacoach has a dedicated support staff to help you and your clients deal with any issues they have using the site or with their sessions. Our priority is to build a marketplace and community with a strong foundation of trust, reliability, and safety.",
  },
  {
    question: "How long does it take to get my profile approved?",
    answer:
      "After your application is submitted, you should receive a phone call with a decision within 2 weeks. If you do not receive a decision after 2 weeks of submitting your application, please reach out to applications@instacoach.com for a status update.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto pt-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
            style={{
              maxWidth: "650px",
              width: "100%",
              border: "1px solid #9a9ab0",
              margin: "0 auto 15px",
              padding: "30px 23px",
              borderRadius: "14px",
              cursor: "pointer",
            }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <span className="text-2xl ">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && faq.answer && (
              <p
                className="mt-3 text-gray-700"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                //   lineHeight: "30px",
                //   letterSpacing: "1px",
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
