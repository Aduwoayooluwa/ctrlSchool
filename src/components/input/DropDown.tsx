import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Option {
  id: number;
  name: string;
}

interface CheckboxOptionProps {
  options: Option[];
  label: string;
  placeholder: string;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ options, label, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    const isOptionSelected = selectedOptions.some((selected) => selected.id === option.id);

    if (isOptionSelected) {
      setSelectedOptions(selectedOptions.filter((selected) => selected.id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative">
      <label className="font-semibold">{label}</label>

      <div
        className="w-[393px] mt-5 bg-[#F6F8FB] focus:border border-gray-500 rounded p-3 cursor-pointer"
        onClick={handleToggle}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((option) => option.name).join(', ')
          : placeholder}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 z-20 left-0 w-[393px] bg-white border border-gray-300 rounded p-3 shadow"
        >
          {options.map((option) => (
            <div key={option.id} className="cursor-pointer hover:bg-gray-100 p-2">
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.some((selected) => selected.id === option.id)}
                  onChange={() => handleSelectOption(option)}
                />
                <span className="ml-2">{option.name}</span>
              </label>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CheckboxOption;
