import React from "react";

export default function Select({value, onChange, name}) {
  return (
    <div className="field ">
      <label className="label">{name}</label>
      <div className="control">
        <div className="select is-fullwidth">
          <select
            value={value}
            name={name}
            onChange={onChange}>
              <option value="str">Strength</option>
              <option value="agi">Agility</option>
              <option value="int">Intelligence</option>
          </select>
        </div>
      </div>
    </div>
  );
}