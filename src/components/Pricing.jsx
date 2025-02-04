import React, { useState } from 'react';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState('Starter'); // Set the default active plan

  const plans = [
    { id: 'Starter', name: 'Starter', price: 'FREE', description: 'Full access to all features and no credit card required' },
    { id: 'Personal', name: 'Personal', price: '$18/mo', description: 'Unlimited products features and dedicated support channels' },
    { id: 'Team', name: 'Team', price: '$18/mo', description: 'Unlimited products features and dedicated support channels' },
  ];

  return (
    <div className="lg:flex items-center justify-between p-6 md:p-12 dark:bg-orange-300">
      <div className="lg:w-1/2 w-full">
        <p className="text-base leading-4 text-gray-600 dark:text-gray-800">Choose your plan</p>
        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800 dark:text-black">
          Our pricing plan
        </h1>
        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600 dark:text-gray-800">
          We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you
          think
        </p>
      </div>
      <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
        {plans.map((plan) => (
          <div
            key={plan.id}
            role="listitem"
            className={`cursor-pointer shadow rounded-lg p-6 transition-all duration-300 hover:bg-orange-500 relative z-30 mt-3 ${
              activePlan === plan.id
                ? 'bg-orange-500 text-white'
                : 'border-2 border-orange-500 text-gray-800 dark:text-black bg-transparent'
            }`}
            onClick={() => setActivePlan(plan.id)}
          >
            <div className="md:flex items-center justify-between">
              <h2 className="text-2xl font-semibold leading-6">{plan.name}</h2>
              <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6">
                {plan.price}
              </p>
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-800">
              {plan.description}
            </p>
            {activePlan === plan.id && (
              <button className="MyPageBTN2">
                Buy
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
