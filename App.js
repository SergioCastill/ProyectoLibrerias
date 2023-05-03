import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Communications, { text } from "react-native-communications";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';




export default function App() {
  const [texto, setTexto] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.Encabezado}>App Comunicaciones</Text>
            <TextInput
            backgroundColor="lightblue"
        editable
        maxLength={40}
        onChangeText={text => setTexto(text)}
        value={texto}
        style={{padding: 10}}
      />
      <View style={styles.contenedorROW}>
                        <TouchableOpacity
          style={styles.touch}
          onPress={() =>
            Communications.text(
            texto,
              "Holiwis amigo"
            )
          }
        >
           <Ionicons name="chatbox-ellipses-outline" size={30} color="red" />
        </TouchableOpacity>
               
          <TouchableOpacity
          style={styles.touch}
          onPress={() =>
            Communications.email(
              [texto],
              null,
              null,
              "Ejemplo Email",
              "Contenido de ejemplo prueba de email"
            )
          }
        >
          <Ionicons name="mail" size={30} color="red" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Encabezado:{
    textAlign: "center",
    fontSize: 25,
    color: "blue",
    fontWeight: "bold",
  },
    botones: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    justifyContent: "center",
    marginBottom: 20,
  },
    touch: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  TextInput:{
    flexDirection:"row",
    textAlign:"center",
    height: 20,
  },
  contenedorROW:{
    flexDirection:"row",
    alignItems:"center",
  },
  
});
