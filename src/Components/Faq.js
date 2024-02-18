import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Faq.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'Who with Diabetes needs Insulin?',
      answer:'In type 1 diabetes, insulin is essential for survival. For type 2 diabetes, insulin may be recommended in specific situations such as during pregnancy, before, during, and after surgery, during severe infections, or when eating is not possible for any reason. Additionally, insulin may be prescribed when oral medications fail to effectively control blood sugar levels.',
    },
    {
      question: 'Should people with diabetes completely avoid sweets?',
      answer:"People with diabetes should limit sweets and sugary foods due to their high carbohydrate content, which can cause blood sugar spikes. However, they don't need to completely avoid sweets. Moderation and portion control are key. Working with healthcare professionals and dietitians to create a balanced meal plan is important. Some individuals may enjoy occasional small portions of sweets as part of a balanced diet, adjusting medication or insulin as needed. Monitoring blood sugar levels is crucial for managing dietary choices effectively."
    },
    {
      question: "Can Dengue Fever Occur to The Same Person Twice?",
      answer: "Yes, you can get dengue fever more than once. There are four types of dengue virus, and if you get sick with one type, you can still get sick with another type later on. Sometimes, getting dengue a second time can make you even sicker. That's why it's important to keep protecting yourself from mosquito bites even if you've had dengue before."
    },
    {
      question: "Can dengue mosquito bite at night?",
      answer: "Yes, dengue mosquitoes can bite at night. They are most active during the early morning and late afternoon, but they can also bite at night, especially if there are lights on or if you're near areas with stagnant water where they breed. So, it's important to take precautions against mosquito bites both during the day and at night."
    },
    {
      question: "Can Dengue Spread from Person to Person?",
      answer: "No, dengue cannot spread directly from person to person. It is transmitted through the bite of an infected mosquito, typically the Aedes aegypti mosquito. When a mosquito bites a person infected with dengue virus, it can pick up the virus and transmit it to other people when it bites them. Therefore, the primary mode of dengue transmission is through the bite of infected mosquitoes, not from person to person."
    },
    {
      question: "What makes a pregnancy high risk?",
      answer: "Several factors can elevate the risk associated with a pregnancy. These include the mother's age, with pregnancies in women younger than 17 or older than 35 being at higher risk. Pre-existing medical conditions like diabetes, hypertension, or heart disease can also contribute, as can a history of previous pregnancy complications. Additionally, pregnancies involving multiples such as twins or triplets, and certain lifestyle factors like smoking, alcohol consumption, or drug use, can further increase the risk. High-risk pregnancies require close monitoring and management by a team of healthcare providers, which may include obstetricians, maternal-fetal medicine specialists and neonatologists."
    },
    {
      question: "When should I reach out to my doctor regarding my child's fever?",
      answer: "If your child has a fever, contact your doctor if they're under 3 months old with a temperature of 100.4°F (38°C) or higher, between 3 and 6 months old with a temperature of 102°F (38.9°C) or higher, or over 6 months old with a temperature of 103°F (39.4°C) or higher lasting more than a day or two. Also, seek medical advice if your child shows signs of dehydration, difficulty breathing, persistent vomiting, or a rash, or if the fever persists despite treatment, or if your child has a chronic medical condition or takes immunosuppressant medications."
    },
    {
      question: "Can a vaccine cause my baby to get sick?",
      answer: "Vaccines are highly safe, with serious side effects being rare occurrences. Most post-vaccination discomfort is minor and temporary, typically manifesting as soreness at the injection site or a mild fever. These symptoms can often be managed by following a doctor's advice, such as taking over-the-counter pain medication or applying a cold compress to the injection site. If parents have concerns, they should reach out to their doctor or healthcare provider for guidance."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container text-4xl" id='faqSection'>
      <h2 className="faq-heading font-semibold">Frequently Asked Questions</h2>
      <div className="lg:flex lg:flex-wrap">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item lg:w-1/2">
            <button
              className="faq-question text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
            </button>
            {activeIndex === index && (
              <div className="faq-answer text-left">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
