import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export const CircleInfoIcon = (props) => (
  <FontAwesome6 name="circle-info" size={32} color="black" {... props}/>
);

export const HomeIcon =(props) => (
  <FontAwesome name="home" size={32} color="black" {... props}/>
)

export const InfoIcon = (props) => (
  <FontAwesome name="info" size={32} color="white" {...props}/>
)

export const BasicIcon = (props) => (
  <AntDesign name="block" size={32} color="white" {...props}/>
)