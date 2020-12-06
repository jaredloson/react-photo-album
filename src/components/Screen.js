import React from "react";
import PropTypes from "prop-types";

const Screen = ({ position, children }) => {
  return (
    <section
      className="absolute inset-0 flex flex-col transition transition-transform duration-666"
      style={{
        transform: `translateX(${position * window.innerWidth}px)`,
      }}
    >
      {children}
    </section>
  );
};

Screen.propTypes = {
  position: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Screen;
