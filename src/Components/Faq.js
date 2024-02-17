import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Faq.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        question: 'What is Lorem Ipsum?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        question: 'Why do we use it?',
        answer:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        question: 'What is Lorem Ipsum?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container text-4xl" id='faqSection'>
      <h2 className="faq-heading font-semibold">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.question}</span>
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
