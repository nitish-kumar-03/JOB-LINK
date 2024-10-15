import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Welcome to Home !!</Text>
      <Button color="red" title="Hello Button" onPress={() => alert("Button Pressed!")} />
    </View>
  );
};

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
    },
    title:{
        color:"white",
        paddingVertical:10,
        fontSize:20
    },
})