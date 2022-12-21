/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Botton, Stack} from '@rneui/themed';
import 'react-native-gesture-handler';
import  Header  from "../components/AppHeader"
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Tareas = () => {

  const navigation = useNavigation()
  const navigateTo = (route) => {
      navigation.navigate(route)
  }

  return (
    <SafeAreaProvider>
       <Header title= "Tareas"/>
        <View   style={{...styles.viewGrid}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#b22222"}}>
            <Text style={styles.textButton}>Tareas</Text>
          </TouchableOpacity>
        <Button
          title="Back Home"
          color="#b22222"
          onPress={()=>navigateTo("Home")}
        />
        </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  textButton: {
    justifyContent: "center",
    color: "white",
    fontSize:20,
    fontWeight:"700",
  },
  viewGrid: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  buttonGrid:{
    borderRadius: 8,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#606060",
    width: WIDTH*.4,
    height: WIDTH*.4,
    opacity:.8
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal:24,
  },
  selectionTitle: {
    color:"black",
    fontSize: 24,
    fontWeight: "600",
    justifyContent:"center",
    alignItems: 'center'
  },
  selectionDescription:{
    marginTop:8,
    fontSize:18,
    fontWeight:"400",
  },
  highlight:{
    fontWeight:"700",
  },
});

export default Tareas;
