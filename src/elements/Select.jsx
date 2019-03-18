import React from "react";

export default function Select({value, onChange}) {
  return (
    <select
      value={value}
      className="select"  
      name="attribute"
      onChange={onChange}>
      <option value="str">Strength</option>
      <option value="agi">Agility</option>
      <option value="int">Intelligence</option>
    </select>
  );
}

