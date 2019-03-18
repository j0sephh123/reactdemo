import React from "react";

export default function Input({value, onChange}) {
  return (
    <div className="field">
      <p className="control">
        <input
          name="name"
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
