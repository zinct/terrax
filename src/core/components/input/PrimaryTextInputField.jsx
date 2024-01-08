import React from "react";

const PrimaryTextInputField = ({ label, name, className, placeholder, suffix, required = false, error, ...props }) => {
  return (
    <div>
      <label className="text-white block">{label}</label>
      <input className="py-3 px-5 w-full rounded-lg bg-zinc-800 text-white" name={name} type="text" placeholder={placeholder}></input>
      {/* {error && <span className="text-[#F82F1E] text-[12px] ms-1">{error}</span>} */}
      <span className="text-[#F82F1E] text-[12px] ms-1">{"error"}</span>
    </div>
  );
};

export default PrimaryTextInputField;
