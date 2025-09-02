// src/components/Button.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // optional: if you want custom styling

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
};

// ✅ Prop validations
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
