import react, { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import A_Propos from './components/A propos';
import Paramètres from './components/Paramètres';

export default function App() {
  return (
    A_Propos()
    /* Ou bien retourner la page Paramètres
    *  Paramètres()
    */
  );
}

const styles = StyleSheet.create({
});
