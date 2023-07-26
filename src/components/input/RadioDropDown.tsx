import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Option {
    id: number;
    name: string;
}

interface RadioOptionProps {
    options: Option[];
    label: string;
    placeholder: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({ options, label, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <label className="font-semibold">{label}</label>

            <div
                className="w-[393px] mt-5 bg-[#F6F8FB] focus:border border-gray-500 rounded p-3 cursor-pointer"
                onClick={handleToggle}
            >
                {selectedOption ? selectedOption.name : placeholder}
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
                                    type="radio"
                                    name="radioOption"
                                    checked={selectedOption!?.id === option.id}
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

export default RadioOption;
