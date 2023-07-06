/** @format */

import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,Image, Touchable } from "react-native";

const Resault = () => {
  return (
    <View>
      <View>
        <Text>Resault</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/quize.jpg")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity>
            <Text>hello</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export default Resault;
