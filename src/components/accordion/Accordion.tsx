import React, { useState } from 'react';

interface AccordionItemProps {
    title: string
    content: string
}

interface AccordionProps {
    items: any
}

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group w-full">
      <button
        onClick={toggleAccordion}
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">{title}</h2>
        <svg
          className={`h-5 w-5 shrink-0 transition duration-300 ${
            isOpen ? '-rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <p className="mt-4 px-4 leading-relaxed text-gray-700">{content}</p>}
    </div>
  );
};

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className="space-y-4">
      {items.map((item: any, index: number) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion