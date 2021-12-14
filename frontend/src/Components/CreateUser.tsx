import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  return (
    <React.Fragment>
      <div className="createUser">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button
          onClick={async (evt) =>
            createUser({ variables: { name, username, password } })
          }
          type="submit"
        >
          Create User
        </button>
      </div>
    </React.Fragment>
  );
};

export default CreateUser;
