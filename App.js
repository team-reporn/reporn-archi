import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const cache = new InMemoryCache();

const defaults = {};

const stateLink = withClientState({ cache, defaults });

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: "https://swapi-graphql-api.now.sh/"
    })
  ]),
  cache
});

const GetCharacters = gql`
  query GetCharacters {
    allPeople {
      people {
        id
        name
        gender
        birthYear
      }
    }
  }
`;

const Home = graphql(GetCharacters, {
  props: ({ data: { loading, allPeople, error } }) => ({
    loading,
    allPeople,
    error
  })
})(({ loading, allPeople }) => {
  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <View
      style={{
        width: "80%",
        margin: "auto"
      }}
    >
      {allPeople.people &&
        allPeople.people.map(person => (
          <View style={styles.person} key={person.id}>
            <View
              style={{
                width: 50,
                height: 50,
                marginRight: 20
              }}
            />
            <View>
              <Text>{person.name}</Text>
              <Text
                style={{
                  fontSize: 10
                }}
              >
                {person.birthYear}
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>yolo !</Text>
        <Home />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

async function loadResourcesAndDataAsync() {
  try {
    SplashScreen.preventAutoHide()

    // Load our initial navigation state
    setInitialNavigationState(await getInitialState())

    // Load fonts
    await Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      percolate: require('./assets/icon/percolate.ttf'),
      'NunitoSans-Bold': require('./assets/font/NunitoSans-Bold.ttf'),
      'NunitoSans-Italic': require('./assets/font/NunitoSans-Italic.ttf'),
      NunitoSans: require('./assets/font/NunitoSans-Regular.ttf')
    })
  } catch (e) {
    // We might want to provide this error information to an error reporting service
    console.warn(e)
  } finally {
    setLoadingComplete(true)
    SplashScreen.hide()
  }
}
