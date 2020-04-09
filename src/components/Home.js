import React from "react";
import { Text, View } from "react-native";
import { Redirect } from "react-router-native"; // eslint-disable-line

import gql from "graphql-tag";
import { graphql } from "react-apollo";

const getUsers = gql`
  query getUsers {
    users {
      email
      id
    }
  }
`;
let fetchable = null;
const Home = graphql(getUsers, {
  props: ({ data: { loading, users, error, refetch } }) => ({
    loading,
    users,
    error,
    refetch,
  }),
  options: { fetchPolicy: "no-cache" },
})(({ loading, error, users, userToken, refetch }) => {
  console.log("home", userToken, users);
  if (fetchable != userToken) {
    refetch();
    fetchable = userToken;
  }
  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <View
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      {users ? (
        <View>
          {users.map((user) => {
            return <Text key={user.id}>{user.email}</Text>;
          })}
        </View>
      ) : (
        <Redirect to="/login" />
      )}
    </View>
  );
});

export default Home;
