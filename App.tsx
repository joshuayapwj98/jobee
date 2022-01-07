import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPrkrKh12m3knnDBJMVjg2JuP6Jdgm4F8",
  authDomain: "jobee-a3f4c.firebaseapp.com",
  databaseURL: "https://jobee-a3f4c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jobee-a3f4c",
  storageBucket: "jobee-a3f4c.appspot.com",
  messagingSenderId: "655147211068",
  appId: "1:655147211068:web:efad8985bedc60e6372639",
  measurementId: "G-SZXM1D7FW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
