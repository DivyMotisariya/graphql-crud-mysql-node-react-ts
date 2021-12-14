import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { DELETE_USER } from "../Graphql/Mutation";
import { GET_ALL_USERS } from "../Graphql/Queries";

const ListOfUsers = () => {
  const { data } = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => (
          <ul key={user.id}>
            {user.name} {"->"} {user.username} {"-> "}
            <button
              onClick={(evt) => deleteUser({ variables: { id: user.id } })}
            >
              Delete User
            </button>
          </ul>
        ))}
    </div>
  );
};

export default ListOfUsers;
