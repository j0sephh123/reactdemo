import React from "react";

export default function Input({value, onChange, name}) {
  return (
    <div className="field">
      <label className="label">{name}</label>
      <p className="control">
        <input
          name={name}
          className="input"
          type="text"
          value={value}
          placeholder="name"
          onChange={onChange}
        />
      </p>
    </div>
  );
}
