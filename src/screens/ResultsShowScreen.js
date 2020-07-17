import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id)
  })

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={{ uri: item }} />
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 5
  }
});

export default ResultsShowScreen;