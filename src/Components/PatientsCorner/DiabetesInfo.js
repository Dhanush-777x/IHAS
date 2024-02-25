import React from 'react';

const DiabetesInfo = () => {
  return (
    <div className="p-20 text-left my-20">
      <h1 className="text-3xl font-bold text-primary mb-10 text-center">DIABETES</h1>
      <p className="mb-8">
        What is diabetes?
        Diabetes is a chronic disease that occurs either when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces. Insulin is a hormone that regulates blood sugar. Hyperglycaemia, or raised blood sugar, is a common effect of uncontrolled diabetes and over time leads to serious damage to many of the body's systems.
      </p>
      <h2 className="text-xl mb-4">What type of Diabetes do I have?</h2>
      <p className="mb-4">
        <strong>Type 1 Diabetes:</strong>
        If you have type 1 diabetes, your pancreas doesn't make insulin or makes very little insulin. Insulin helps blood sugar enter the cells in your body for use as energy. Without insulin, blood sugar can't get into cells and builds up in the bloodstream. High blood sugar is damaging to the body and causes many of the symptoms and complications of diabetes, it can develop at any age. Type 1 diabetes is less common than type 2—about 5-10% of people with diabetes have type 1.
      </p>
      <p className="mb-4">
        What causes Type 1 Diabetes?
        Type 1 diabetes is thought to be caused by an autoimmune reaction (the body attacks itself by mistake). This reaction destroys the cells in the pancreas that make insulin, called beta cells. This process can go on for months or years before any symptoms appear.
      </p>
      <p className="mb-4">
        <strong>Type 2 Diabetes:</strong>
        Type 2 diabetes most often develops in people over age 45, but more and more children, teens, and young adults are also developing it.
      </p>
      <p className="mb-4">
        What causes Type 2 Diabetes?
        If you have type 2 diabetes, cells don’t respond normally to insulin, this is called insulin resistance. Your pancreas makes more insulin to try to get cells to respond. Eventually your pancreas can’t keep up, and your blood sugar rises, setting the stage for prediabetes and type 2 diabetes. High blood sugar is damaging to the body and can cause other serious health problems, such as heart disease, vision loss, and kidney disease.
      </p>
      <p className="mb-4">
        <strong>Gestational Diabetes:</strong>
        Gestational diabetes occurs when your body can’t make enough insulin during your pregnancy. During pregnancy, your body makes more hormones and goes through other changes, such as weight gain. These changes cause your body’s cells to use insulin less effectively, a condition called insulin resistance. Insulin resistance increases your body’s need for insulin.
      </p>
      <p className="mb-4">
        <strong>How to Manage Diabetes?</strong>
        You may be able to manage your diabetes with healthy eating and being active, or your doctor may prescribe insulin, other injectable medications, or oral diabetes. It’s also important to keep your blood pressure and cholesterol close to the targets your doctor sets for you and get necessary screening tests. You’ll need to check your blood sugar regularly. Stress is a part of life, but it can make managing diabetes harder, including managing your blood sugar levels and dealing with daily diabetes care. Regular physical activity, getting enough sleep, and relaxation exercises can help.
      </p>
      <p className="mb-4">
        <strong>Diabetes Risk Factors</strong>
      </p>
      <p className="mb-4">
        Type 1 Diabetes
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Family history: Having a parent, brother, or sister with type 1 diabetes.</li>
        <li>Age: You can get type 1 diabetes at any age, but it usually develops in children, teens, or young adults.</li>
      </ul>
      <p className="mb-4">
        Type 2 Diabetes
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>You’re at risk for type 2 diabetes if you:</li>
        <li>Have prediabetes.</li>
        <li>Are overweight.</li>
        <li>Have a parent, brother, or sister with type 2 diabetes.</li>
        <li>Are physically active less than 3 times a week.</li>
        <li>Have ever had gestational diabetes (diabetes during pregnancy) or given birth to a baby who weighed over 9 pounds.</li>
        <li>If you have non-alcoholic fatty liver disease you may also be at risk for type 2 diabetes.</li>
      </ul>
      <p className="mb-4">
        You can prevent or delay type 2 diabetes with proven lifestyle changes. These include losing weight if you’re overweight, eating a healthy diet, and getting regular physical activity.
      </p>
      <h2 className="text-xl mb-4">CONFUSED WHICH SPECIALISTS TO GO TO??</h2>
      <div className="ml-8 mb-4">
        <ul className="list-disc">
          <li>ENDOCRINOLOGIST: An endocrinologist is a diabetes expert. This physician specializes in the endocrine gland system. People with type 1 diabetes rather than type 2 seek treatment from an endocrinologist.</li>
          <li>NEPHROLOGIST: Patients with diabetes have a higher risk of developing kidney disease with time. The nephrologist helps manage your kidney disease if present.</li>
          <li>OPHTHALMOLOGIST: Over time, patients with diabetes develop eye complications because of high sugar levels that damage the delicate eye structures and retina.</li>
          <li>PODIATRIST: A podiatrist is a foot specialist and helps diabetic patients maintain their foot health which is prevalent in patients with diabetes.</li>
          <li>CARDIOLOGIST: Heart diseases are extremely common in patients with Diabetes because these have similar risk factors.</li>
          <li>DIETICIAN: A diabetes dietician is a specialist who offers evidence-based dietary advice to patients with diabetes based on medication, nutritional status, lifestyle, and diabetes control.</li>
        </ul>
      </div>
      <h2 className="text-xl mb-4">AYUSH:</h2>
      <p className="mb-4">(To be taken under supervision of a Registered Ayurvedic physician)</p>
      <ol className="list-decimal ml-8 mb-4">
        <li>Shamana (Palliative) treatment: Simple drugs like, Amalaki churna, Haridra churna (Curcuma longa linn.) and compound drugs like Nishamalaki churna/tablet, Triphala churna/ tablet are commonly used for prevention and control of Diabetes mellitus.</li>
        <li>Samshodhana Chikitsa (Purificatory procedures): is a specialized therapeutic approach of Ayurveda to eliminate toxins from the body by giving bio-cleansing procedures i.e. Panchakarma. It is usually followed by Shamana Chikitisa (Palliative therapy).</li>
        <li>Rasayana (Rejuvenation Therapy): Shilajatu, Amalaki, Haridra.</li>
      </ol>
    </div>
  );
};

export default DiabetesInfo;
