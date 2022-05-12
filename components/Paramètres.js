import react, { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';


export default function Paramètres() {
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
        <Text style={styles.title}>Paramètres</Text>
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
          <View>
            {/* Envoyez nous vos commentaires */}
            <TouchableOpacity style={styles.param}
                onPress={{/* Fonction à définir (routage vers la page de commentaires) */}}
            >
                <Text style={styles.comm}>Envoyez nous vos commentaires</Text>
                <Image
                    source={require('../images/arrow.png')}
                    style={{height:20, width: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.param}
                onPress={{/* Fonction à définir (routage vers la page de choix des langues) */}}
            >
                <Text style={styles.comm}>Langue</Text>
                <Image
                    source={require('../images/arrow.png')}
                    style={{height:20, width: 20}}
                />
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.footer}>
        <Text>Version</Text>
        <Text>1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 'auto',
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    height: '20%',
    maxHeight: 120,
    width: 'auto',
    backgroundColor: '#430D78',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 17,
    lineHeight: 20,
    height: '70%'
  },
  param: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: '5%',
    height: 'auto',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    bottom: 40
  },
  comm: {
      fontSize: 14,
      fontWeight: '700',
      width: 'auto'
  },
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5%',
  }
});
