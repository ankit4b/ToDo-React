import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name : ", name);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>

      <h3>
        Fullname : {name.firstName} - {name.lastName}
      </h3>
    </>
  );
}
