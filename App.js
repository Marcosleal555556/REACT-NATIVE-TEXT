import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
    
<Text style={{ backgroundColor: 'white', color: 'blue', textAlign:'right', fontWeight: 'bold', fontSize: 30, borderStyle:'solid' }}>Marcos Antônio Cordeiro Hermes Leal Dos Santos</Text>
<Text style={{ backgroundColor: 'white', color: 'red', textAlign:'left', fontStyle: 'Italic', fontSize: 25, borderWidth: 1 , borderColor:'black', borderStyle:'solid' }}>Notebook 24</Text>
<Text style={{ backgroundColor: 'pink', color: 'white', textAlign:'center', fontSize: 20, borderStyle:'solid' }}>Sala 7</Text>
<Text style={{ backgroundColor: 'green', color: 'white', textAlign:'center', fontSize: 20, borderWidth: 1, borderColor:'red', borderStyle:'solid' }}>Segundo elemento</Text>

</View>
);
}

const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
flex: 1,
}
})