import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable} from 'react-native';

import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://tvazteca.brightspotcdn.com/dims4/default/39b3711/2147483647/strip/true/crop/1181x728+50+0/resize/1200x740!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F97%2Fca%2F6ad68c35412f91c419104c04bbb2%2Fquien-hace-la-voz-de-la-galleta-de-jengibre-en-shrek.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />

      <Text style={styles.colorText}>Inicio de react native!</Text>
      <Image
        blurRadius={0} // Desenfoque de la imagen
        source={icon} // Imagen local
        style={{
          width: 100,
          height: 100,
          resizeMode: "center",
        }}
      />

      {/* Boton nativo: */}
      <Button
        title="Boton nativo"
        onPress={() => alert("Notificacion nativa de android")}
      />

      {/* Boton personalizable: */}
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Hola")}
        style={{
          width: 200, 
          height: 50, 
          backgroundColor: 'green',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        <Text style={{color: 'white'}}>Pulsa aqui</Text>
      </TouchableHighlight>

      {/* Boton mas customizable */}
      <Pressable
        onPress={ () => {
        }}
        style={ ({pressed}) => [
          {
            backgroundColor: pressed? 'blue': 'green'
          },
          styles.wrapperCustom,
        ]}
      >
        {({pressed}) => (
          <Text style={{
            fontSize: pressed? 32: 16,
          }}>{pressed? 'Pressed': 'Press Me'}</Text>
        )}

      </Pressable>



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
  colorText: {
    color: 'black'
  }
});
