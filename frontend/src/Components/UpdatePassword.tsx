import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword] = useMutation(UPDATE_PASSWORD);

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
            })
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
