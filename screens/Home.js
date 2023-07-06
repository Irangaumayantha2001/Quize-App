import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import Title from '../components/Title';

const Home = () => {
    return (
       <View>
        <Title/>
        <View>
            <Image
            source={require('../assets/quize.jpg')}
            style={styles.banner}
            />
        </View>
        <TouchableOpacity>
            <Text>
                start
            </Text>
           
        </TouchableOpacity>
       </View> 
    );
}

export default Home;
const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
})
