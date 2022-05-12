import react, { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function A_Propos() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.navBar}>
        <TouchableOpacity style={{padding: 5}}
          onPress={{/* Fonction à définir (affichage du menu) */}}
        >
          {/* Image 4 barres menu */}
          <Image
            source={require('../images/menu.png')}
            style={styles.images}
          />
        </TouchableOpacity>
        <Text style={styles.title}>A propos</Text>
        <TouchableOpacity style={{padding: 5}}
          onPress={{/* Fonction à définir (Mode accessible) */}}
        >
          {/* Image oeil */}
          <Image
            source={require('../images/oeil.png')}
            style={styles.images}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.main}>
          NAIsee est une application développée par 3 jeunes étudiants en école d'ingénieur:{"\n"}
          </Text>
          <View style={styles.noms}>
            <Text style={styles.noms}>
              {'\u2022'} NDIAYE Antoine Latgrand{"\n"}
              {'\u2022'} MBOUP Issa{"\n"}
              {'\u2022'} EL HABCHAOUI Nawfal
            </Text>
          </View>
          <Text style={styles.main}>
          D'où son nom NAIsee (Nawfal, Antoine, Issa). Elle a été développée dans le but de venir en aide aux personnes malvoyantes dans leurs tâches quotidiennes en les mettant en rapport avec une personne géographiquement proche d'elles, ou s'il n'y a personne de relativement proche en déclanchant un appel avec un bénévole pour donner des indications.{"\n"}
          Nous espérons que votre expérience avec notre application sera agréable,{"\n"}cordialement,{"\n"}l'équipe NAIsee.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    height: 120,
    width: 'auto',
    backgroundColor: '#430D78',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },
  images: {
    height: 42,
    width: 42,
    resizeMode: 'stretch'
  },
  title: {
    fontSize: 40,
    fontWeight: '600'
  },
  main: {
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 17,
    lineHeight: 22,
  },
  noms: {
    fontSize: 17,
    paddingTop: 3,
    paddingLeft: '2%',
    height: 80
  }
});
