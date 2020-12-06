import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ title, onClick }) => {
  return (
    <li className="list-reset border-b border-b-gray">
      <button
        type="button"
        className="px-6 py-4 w-full outline-none focus:outline-none active:opacity-50 text-left"
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
