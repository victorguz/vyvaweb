'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-light rounded-default overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 w-full flex justify-between items-center text-left cursor-pointer hover:bg-primary-soft/50 transition-colors duration-200"
      >
        <h3 className="font-semibold text-lg text-dark pr-4">{question}</h3>
        <span
          className={`text-2xl text-primary transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ↓
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-0 pb-4 text-dark/70">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
};
