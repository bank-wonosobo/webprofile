import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropdownProps {
  children: React.ReactNode;
  name: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Menutup dropdown jika klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block p-3"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-primary rounded-md flex items-center justify-between">
        {name}
        <RiArrowDropDownLine size={23} />
      </button>

      {isOpen && (
        <div className="absolute font-medium mt-2 min-w-64 bg-white border border-gray-200 rounded-md shadow-md -left-1">
          <ul className="py-2 text-gray-700">{children}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
