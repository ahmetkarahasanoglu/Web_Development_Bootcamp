import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("timmy");  // at any given moment, this 'username' is the value that whatever is in the input's value.
  const updateUsername = (evt) => {    
    setUsername(evt.target.value);  // 'evt.target' refers to the 'input' element below. And 'value' refers to the input's value.
  };
  return (
    <div>
      <label htmlFor="username">Enter a username</label>  {/* We use 'htmlFor', instead of 'for' (in React). [just like 'className' instead of 'class'] */}
      <input
        type="text"
        placeholder="username"
        value={username}  // Important
        onChange={updateUsername}  // Important
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}
