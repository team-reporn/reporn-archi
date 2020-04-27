import React, { useState } from "react";
import { Text, View, Button } from "react-native";
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

const getAppscreen = (appState, setAppState) => {
  if (appState === "home") {
    return (
      <View>
        <Text>reporn</Text>
        <Button
          onPress={() => {
            setAppState("game");
          }}
          title="Play"
        />
      </View>
    );
  } else if (appState === "game") {
    return <Redirect to="/wiwaldo" />;
  }
};
const Home = graphql(getUsers, {
  props: ({ data: { loading, users, error, refetch } }) => ({
    loading,
    users,
    error,
    refetch,
  }),
  options: { fetchPolicy: "no-cache" },
})(({ loading, error, users, userToken, refetch, appState, setAppState }) => {
  console.log("appstate", appState);
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
      {users ? getAppscreen(appState, setAppState) : <Redirect to="/login" />}
    </View>
  );
});

export default Home;
