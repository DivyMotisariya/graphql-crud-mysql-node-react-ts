import { GraphQLList } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    return await Users.find();
  },
};
