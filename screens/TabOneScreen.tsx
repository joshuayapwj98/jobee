import React from "react";
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import CarouselCards from '../components/CarouselCards'
import Carousel from 'react-native-snap-carousel';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CarouselCards />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
