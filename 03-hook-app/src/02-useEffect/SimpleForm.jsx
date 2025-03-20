import { useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "fernando@google.com",
  });

  const { username, email } = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username == 'strider2' && <Message />}
      <input
        type="text"
        className="form-control mt-2"
        placeholder="fernando@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};

export default SimpleForm;
