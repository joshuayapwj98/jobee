import React, { useState, useEffect } from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [selectedListing, selectListing] = useState([]);
  const getIcon = () => {
    return Math.random() < 0.5 ? 'times' : 'check'
  }
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'A', data: ['Apple', 'Ant Group', 'Accenture', 'Adobe'] },
          { title: 'M', data: ['Microsoft'] },
          { title: 'I', data: ['IBM'] },
        ]}
        renderItem={({ item }) =>
          <View style={styles.viewItem}>
            <Text style={styles.item}>{item}</Text>
            <FontAwesome
              style={styles.icon}
              name={getIcon()}
              color='grey'
              size={40}
            />
          </View>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
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
  item: {
    padding: 30,
    marginVertical: 0.5,
    fontSize: 18,
    height: 80,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  viewItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F8F8F8',
  },
  icon: {
    position: 'absolute',
    right: 50,
    top: 15
  }
});
