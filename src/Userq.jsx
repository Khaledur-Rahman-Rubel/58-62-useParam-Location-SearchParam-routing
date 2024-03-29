import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Userq = () => {
  const [searceParams, setSearceParams] = useSearchParams();
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearceParams({ name: name, age: age });
  };

  return (
    <div>
      <h1>{searceParams.get("name")}</h1>
      {/*  <h1>{searceParams.get("id")}</h1>
      <h1>{searceParams.get("age")}</h1>
      <h1>{searceParams.get("name")}</h1> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          value={age}
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="submit">Find User</button>
      </form>
    </div>
  );
};

export default Userq;
