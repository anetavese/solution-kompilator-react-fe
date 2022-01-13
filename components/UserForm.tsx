import React, { useState } from "react";

type UserFormProps = {
  name?: string;
  birthdate?: Date;
  about?: string;
  height?: number;
  isHuman?: boolean;
  drinkPreference?: string;
};

const UserForm = ({
  name,
  birthdate,
  about,
  height,
  isHuman,
  drinkPreference,
}: UserFormProps) => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  const [user, setUser] = useState({
    name: "",
    birthdate: "",
    about: "",
    height: "",
    is_human: "",
    drink_preference: "",
  });

  function handleChange(event) {
    const value = event.target.value;

    setUser({
      ...user,
      [event.target.name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        className="input_field"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label>Birthdate:</label>
      <input
        className="input_field"
        type="date"
        name="birthdate"
        value={birthdate?.toString()}
        onChange={handleChange}
      />
      <label>About</label>
      <textarea
        className="about_field "
        name="about"
        value={about}
        onChange={handleChange}
      />
      <label>Height:</label>
      <input
        className="input_field"
        type="number"
        name="height"
        checked={isHuman ?? true}
        onChange={handleChange}
      />
      <label>Human:</label>
      <input
        className="input_field"
        type="checkbox"
        name="is_human"
        value={height}
        onChange={handleChange}
      />
      <label>Drink preference:</label>
      <div className="select">
        <select
          className="dropdown input_field"
          name="drink_preference"
          value={drinkPreference}
          onChange={handleChange}
        >
          <option value="none">Select item...</option>
          <option value="whiskey">Whiskey</option>
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
          <option value="vodka">Vodka</option>
        </select>
      </div>
      <input className="button" type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
