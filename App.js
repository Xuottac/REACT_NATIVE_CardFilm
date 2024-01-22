import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Presentation } from './components/Presentation';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View><Text style={styles.title}>A voir !</Text></View>
        {Presentation("https://lepauledorion.files.wordpress.com/2022/01/arcane.jpeg", "Arcane", "Arcane est une série faites dans l'univers de League of Legends", "2021", "Anime", "Fantasy", "Fortiche Production")}
        {Presentation("https://fr.web.img3.acsta.net/c_310_420/pictures/23/01/03/14/13/0717778.jpg", "Game of Throne", "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.", "2011", "Drame", "Fantasy", "R. R. Martin")}
        {Presentation("https://fr.web.img5.acsta.net/pictures/23/09/11/09/25/4087505.jpg", "Solo Leveling", "Solo Leveling est une série de romans web sud-coréens écrite par Chugong et publiée en ligne sur KakaoPage avant d'être éditée par D&C Media sous sa marque de publication Papyrus. La série est composée de 270 chapitres répartis en 14 volumes.", "2024", "Anime", "Fantasy", "Chu-Gong")}
        {Presentation("https://fr.web.img3.acsta.net/pictures/21/10/29/16/12/4876966.jpg", "The Witcher", "Le sorceleur Geralt, un chasseur de monstres, se bat pour trouver sa place dans un monde où les humains se révèlent plus vicieux que les bêtes. Il est alors happé dans une mystérieuse toile tissée par les forces luttant pour contrôler le monde.", "2019", "Action", "Fantasy", "Lauren Schmidt Hissrich")}
      </ScrollView>
    </SafeAreaView>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  }
});
