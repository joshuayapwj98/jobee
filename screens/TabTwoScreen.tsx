import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import JobProfile from '../components/JobProfile';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Company Name - Position Name</Text>
      </View>
      <View style={{ margin: 10, width: "90%", height: "80%" }}>
        <JobProfile></JobProfile>
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
