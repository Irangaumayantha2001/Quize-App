
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Resault from './screens/Resault';




export default function App() {

  return (
    <View style={styles.container}>
      {/*<Home/>*/}
     {/*<Quiz/>*/ } 
     <Resault/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:28,
   paddingHorizontal:14,
  },
});
