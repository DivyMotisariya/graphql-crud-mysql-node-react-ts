import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_USER = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (parent: any, args: any) => {
    const { name, username, password } = args;
    try {
      await Users.insert({ name, username, password });
      return {
        successful: true,
        message: "User Created Successfully",
      };
    } catch (error) {
      throw error;
    }
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLID },
    oldPassword: { type: GraphQLID },
    newPassword: { type: GraphQLID },
  },
  resolve: async (parent: any, args: any) => {
    const { username, oldPassword, newPassword } = args;
    try {
      let user = await Users.findOne({ where: { username } });

      if (!user) {
        throw new Error("Invalid Username");
      }

      if (oldPassword !== user.password) {
        throw new Error("Old Password Does Not Match");
      }

      await Users.update({ username }, { password: newPassword });
      return {
        successful: true,
        message: "Password Updated Successful",
      };
    } catch (error) {
      throw error;
    }
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (parent: any, args: any) => {
    const { id } = args;
    try {
      await Users.delete({ id });
      return {
        successful: true,
        message: "Deleted Successful",
      };
    } catch (error) {
      throw error;
    }
  },
};
