import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// import JobProfile from '../components/JobProfile';
import Card from '../components/Card'
import SelectDropdown from 'react-native-select-dropdown'
// import MultiSelect from 'react-native-multiple-select';

export default function TabTwoScreen() {
  const listing = ["All", "SWE Intern", "Frontend Human", "DevOps"];
  const [selectedListing, selectListing] = useState([]);

  return (
    <View style={styles.container}>

      {/* <View style={{ margin: 10, width: "90%", height: "80%" }}> */}
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
