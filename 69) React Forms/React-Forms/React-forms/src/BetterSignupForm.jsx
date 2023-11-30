// (This file is an important template for React Forms).
import { useState } from "react";

export default function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changedField]: newValue  // [changedField] is a "COMPUTED PROPERTY NAME".  We wrote [changedField] in square brackets, because: square brackets are used to create a computed property name in JavaScript object literals. If we had written it as 'changedField: newValue' without square brackets, it would be interpreted as a property with a literal name "changedField" rather than using the value of the changedField variable as the property name.
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
