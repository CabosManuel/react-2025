import { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={ (event) => setName(event.target.value) }
      />
      <p>Hello, { name || "user" }</p>
    </div>
  )
}

export default NameForm;