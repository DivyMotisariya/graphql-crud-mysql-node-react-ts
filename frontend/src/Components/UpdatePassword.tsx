import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <React.Fragment>
      <div className="updatePassword">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />
        <input
          type="text"
          placeholder="old password"
          value={oldPassword}
          onChange={(evt) => setOldPassword(evt.target.value)}
        />
        <input
          type="text"
          placeholder="new password"
          value={newPassword}
          onChange={(evt) => setNewPassword(evt.target.value)}
        />
        <button
          onClick={async (evt) =>
            updatePassword({
              variables: { username, oldPassword, newPassword },
            }).catch(console.log)
          }
          type="submit"
        >
          Update Password
        </button>
      </div>
    </React.Fragment>
  );
};

export default UpdatePassword;
