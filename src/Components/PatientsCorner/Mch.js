import React from 'react';

const OverviewSection = () => {
  return (
    <div className="my-8">
    <h1 className='text-primary text-3xl font-bold mb-4 text-center'>Maternal and Child Health</h1>
      <h2 className=" text-xl font-bold mb-4">Overview</h2>
      <h3 className="text-xl font-bold mb-2">What is maternal and child health?</h3>
      <p className="text-sm">
        Maternal and child health (MCH) encompasses medical care and support for women during pregnancy, childbirth, and postpartum, as well as the well-being of infants, children, and adolescents. It includes services like prenatal care, skilled birth attendance, immunizations, nutrition, breastfeeding promotion, and early childhood development programs. MCH targets women of reproductive age (15-49), children, adolescents, and school-age populations.
      </p>
      <h3 className="text-xl font-bold mb-2">India's Maternal and Child Health Initiative</h3>
      <p className="text-sm">
        By 2030, India aims to reach a maternal mortality ratio of 70, as well as ending preventable death of newborns and children under 5 years of age, aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under 5 mortalities to at least as low as 25 per 1,000 live births.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29395268/" className="text-blue-500">Source</a>
      </p>
    </div>
  );
};

const RiskFactorsSection = () => {
  return (
    <div className="my-8">
      <h2 className=" text-xl font-bold mb-4">RISK FACTORS</h2>
      <h3 className="text-xl font-bold mb-2">Pregnancy's Hurdles: Common Complications</h3>
      <p className="text-sm">
        Maternal mortality in India is influenced by several key factors, including complications during childbirth like hemorrhage, hypertensive disorders, infections, and unsafe abortion practices. Additionally, inadequate access to skilled healthcare providers, deficient infrastructure, socioeconomic disparities, and limited education on reproductive health contribute to the high maternal mortality rate. Postpartum hemorrhage, often caused by issues like uterine contraction failure or retained placenta, is a primary concern. The World Health Organization recommends midwives receive training to perform manual placenta removal promptly after delivery, as this significantly reduces risks of blood loss, infection, and mortality.
      </p>
      <h3 className="text-xl font-bold mb-2">Early Detection and Management of Childhood Illnesses</h3>
      <p className="text-sm">
        Children are more susceptible to sickness due to their underdeveloped immune systems and their high exposure to germs at schools and child care facilities. Most children may have 6 to 8 colds a year. Other common childhood illnesses include allergies, skin problems, eye conditions, neurological issues and gastrointestinal conditions. It's important to understand which conditions affect certain age groups as well as the degree of severity. To promote good health, parents should know the symptoms of common childhood illnesses and how to manage them before they progress to an advanced stage. Always consult a health care provider for specific advice on managing common childhood illnesses.
      </p>
    </div>
  );
};

const ManagementSection = () => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">MANAGEMENT</h2>
      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">The Vital Role of Prenatal and Postpartum Health</h3>
        <p className="text-sm">
          Maintaining a healthy lifestyle and proper healthcare before, during, and after pregnancy is crucial for reducing complications. Start by scheduling a preconception check-up to assess your health and address any concerns. Maintain a balanced diet, exercise regularly, and avoid harmful substances like alcohol and tobacco. Take prenatal vitamins with folic acid at least one month before conception. Review medications with your healthcare provider and consider genetic counseling if needed. Initiate prenatal care promptly after conception and discuss any health conditions or past medical history. Attend postpartum care appointments to address physical discomforts and emotional challenges. Collaborate with healthcare providers for comprehensive care and optimal recovery after childbirth.
        </p>
        <h3 className="text-xl font-bold mb-2">Postnatal Checkups: The Essential Routine for Newborns</h3>
        <p className="text-sm">
          Regular checkups for newborns are essential for monitoring their health and development. These visits involve comprehensive assessments of growth, development, and overall well-being. Healthcare providers monitor indicators like weight gain, feeding, milestones, and vaccinations. Parents can discuss concerns and receive guidance on breastfeeding, sleep, and infant care. Adhering to this schedule ensures timely medical support for optimal growth and development.
        </p>
        <h3 className="text-xl font-bold mb-2">Specialists for Maternal and Child Health: Who to Consult?</h3>
        <p className="text-sm">
          OB/GYN focuses on women's health, covering pregnancy, childbirth, and reproductive issues. Pediatricians specialize in children's health, with subspecialties like cardiology and oncology. Neonatologists care for newborns, particularly premature infants. REI addresses fertility, while gynecologic oncology handles female reproductive cancers. Urogynecology manages pelvic disorders, and maternal mental health addresses psychological challenges during pregnancy. Child and adolescent psychiatry focuses on young individuals' mental health, and complex family planning addresses unique reproductive needs.
        </p>
      </div>
    </div>
  );
};

const AyushSection = () => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">AYUSH</h2>
      <h3 className="text-xl font-bold mb-2">Integrating Traditional and Modern Approaches in Maternal and Child Health Care</h3>
      <p className="text-sm">
        The Indian Systems of Medicine and modern medicine collaborate effectively. Siddha medicine is particularly popular in Tamil Nadu, where the government has initiated efforts to deploy at least one AYUSH practitioner in every primary health center over time. These centers are strategically located alongside additional PHCs to offer alternative medical treatments or supplementary care options. This setup aims to provide the public with a range of healthcare choices and improve access to health services.
      </p>
      <h3 className="text-xl font-bold mb-2">The Power of Pregnancy Nutrition</h3>
      <p className="text-sm">
        During pregnancy, nutrition is vital for the health of both mother and baby. A balanced diet provides essential nutrients crucial for fetal growth and development, including folic acid, iron, calcium, and protein, which help prevent birth defects and support healthy outcomes. Proper nutrition also reduces the risk of complications such as anemia and preterm birth while sustaining the mother's energy levels and immune function. A nourishing diet rich in fruits, vegetables, whole grains, lean proteins, and dairy products ensures both mother and baby thrive during pregnancy.
      </p>
      <p className="text-sm">
        <a href="https://wcd.nic.in/sites/default/files/Diet%20Chart%20For%20South%20India.pdf" className="text-blue-500">DIET CHART FOR SOUTH INDIA</a>
      </p>
    </div>
  );
};

const Mch = () => {
  return (
    <div className="container mx-auto px-4 text-left my-40">
      <OverviewSection />
      <RiskFactorsSection />
      <ManagementSection />
      <AyushSection />
    </div>
  );
};

export default Mch;