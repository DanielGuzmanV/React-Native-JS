# Fundamentos de React Native con Expo
Proyecto creado con una plantilla vacia
```bash
npx create-expo-app@latest ejemplo-react-native --template blank
```
## Correr el proyecto
```bash
npm run start o npm start
```

## Opciones que saldra:
```bash
› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor
```
## Desarrollo
Usaremos `Press w │ open web`, pero cuando se crea con una plantilla vacia esta no funcionara, para ello pondremos el siguiente comando
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```
finalmente podremos correrlo en la web.
Tambien podremos correrlo con el codigo QR que nos saldra, pero tendremos que descarga su App llamada `Expo Go`

