import React from 'react';

export function GettingStarted(){
  const steps = [
    {
      number: '01',
      title: 'Sign up and Set up',
      description: 'Create your account for proper data handling, sense of ownership, provide preferences to tailor service'
    },
    {
      number: '02',
      title: 'Data entry',
      description: 'Provide the required data as per the input given to analyze and calculate the risk associated with borrower'
    },
    {
      number: '03',
      title: 'Track the actions and collaborate',
      description: 'Track actions and collaborate effectively to monitor borrower behavior, and make informed decisions'
    }
  ];

  return (
    <div className="w-full bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header section with blue dotted border */}
        <div className="py-6 mb-8">
          <h2 className="text-3xl font-bold text-center">Getting started is easy</h2>
        </div>
        
        {/* Steps container */}
        <div className="space-y-12 px-4 flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              {/* Circular step number */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-700 to-orange-900 flex items-center justify-center mr-6">
                <span className="text-white text-xl font-bold">{step.number}</span>
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{step.title}</h3>
                <p className="text-gray-400 text-sm max-w-lg text-center">{step.description}</p>
                
                {/* Down arrow (except for the last item) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#F25F30" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};