import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('')

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('submitted')}
      />
      <Text>{term}</Text>
      <Text>Search Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen