import React from 'react';

const News = () => {
    return (
        <div className='my-40' id='NewsSection'>
            <div className='mt-20 font-semibold text-4xl'>
                <h1>News and Updates</h1>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="max-w-lg bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Long COVID fatigue linked to malfunctioning mitochondria</h2>
                                <p className="text-gray-600">At least 65 million peopleTrusted Source around the world have long COVID, a condition where they continue to experience COVID-19 symptoms</p>
                                <a href="https://www.medicalnewstoday.com/articles/long-covid-fatigue-linked-to-malfunctioning-mitochondria" className="block mt-4 text-sm font-semibold text-orange-600" target='_blank'>Read More</a>
                            </div>
                        </div>
                        <div className="max-w-lg bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Why people with severe psoriasis have a higher risk of heart disease</h2>
                                <p className="text-gray-600">Globally, psoriasis affects an estimated 125 millionTrusted Source people around the world. Despite its prevalence, this immune-mediated dermatological condition still holds many mysteries.</p>
                                <a href="https://www.medicalnewstoday.com/articles/why-people-with-severe-psoriasis-have-a-higher-risk-of-heart-disease" className="block mt-4 text-sm font-semibold text-orange-600" target='_blank'>Read More</a>
                            </div>
                        </div>
                        <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Researchers introduce a pioneering approach to combat neurodegenerative diseases</h2>
                                <p className="text-gray-600">Researchers led by Northwestern University and the University of Wisconsin-Madison have introduced a pioneering approach aimed at combating neurodegenerative diseases such as Alzheimer's disease, Parkinson's disease and Amyotrophic lateral sclerosis (ALS).</p>
                                <a href="https://www.news-medical.net/news/20240216/Researchers-introduce-a-pioneering-approach-to-combat-neurodegenerative-diseases.aspx" className="block mt-4 text-sm font-semibold text-orange-600" target='_blank'>Read More</a>
                            </div>
                        </div>
                        <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Switching arms for vaccines could help boost your immunity, study finds</h2>
                                <p className="text-gray-600">people receive the COVID-19 vaccine in the upper arm, which has multidose options. Multidose vaccines can be received in the same or different injection site for each dose. Other examplesTrusted Source of multidose vaccines include those for measles mumps and rubella (MMR) and shingles.</p>
                                <a href="https://www.medicalnewstoday.com/articles/alternating-arms-for-vaccines-may-boost-immunity" className="block mt-4 text-sm font-semibold text-orange-600" target='_blank'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
