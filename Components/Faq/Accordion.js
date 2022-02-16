import { useState } from "react";

const CustomAccordion = ({ title, desc, index }) => {
  const [isOpen, setIsOpen] = useState(index <= 2 ? true : false);

  return (
    <div className="card">
      <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
        <a
          className="text-white background-dark-blue-2 collapsed"
          aria-expanded={isOpen}
        >
          {title}
        </a>
      </div>
      <div className={`collapse ${isOpen ? "show" : ""}`}>
        <div className="card-body">
          <h6 className="text-white">{title}</h6>
          <p className="text-grey">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default CustomAccordion;
