/** @format */

import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Title from "../components/Title";

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/quize.jpg")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
});
