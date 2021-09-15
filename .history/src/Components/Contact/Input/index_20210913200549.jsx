// import React from "react";

export default function Input({
  name,
  type,
  onChange,
  value,
  placeholder,
  id,
}) {
  return (
    <>
      <input
        name={name}
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="inputLog"
      />
    </>
  );
}
