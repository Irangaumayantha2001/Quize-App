
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Resault from './screens/Resault';

export default function App() {

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:10,
   paddingHorizontal:16,
  },
});
