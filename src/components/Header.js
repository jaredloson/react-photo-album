import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Header = ({ title, onBack }) => {
  const [displayTitle, setDisplayTitle] = useState("");

  useEffect(() => {
    if (title) {
      setDisplayTitle(title);
    }
  }, [title]);

  return (
    <div className="p-6">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center text-left text-gray outline-none focus:outline-none absolute top-0 right-0 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>

          <span>Back</span>
        </button>
      )}

      <h2 className="font-heading text-xl text-gray">{displayTitle}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
};

Header.defaultProps = {
  title: null,
  onBack: null,
};

export default Header;
