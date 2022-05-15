import React, {Component} from "react";
import { View } from "react-native";
import MapView, {Marker} from "react-native-maps";

class Map extends Component{
constructor(props)
  {
    super(props)
    this.state = {
      HeaderText : "NAIsee est une application développée par 3 jeunes étudiants en école d’ingénieur\n• NDIAYE Antoine Latgrand \n• MBOUP Issa \n• EL HABCHAOUI Nawfal\n D’où son nom NAIsee (Nawfal, Antoine, Issa). Elle a été développée dans le but de venir en aide aux personnes malvoyantes dans leur taches quotidiennes, en les mettant en rapport avec une personne géographiquement proche d’elles, ou s’il n’y a personne de relativement proche en déclanchant un appel avec un bénévole pour donner des indications. Nous espérons que votre expérience avec notre application sera agréable, cordialement, l’équipe NAIsee.",
    }
  }


  render(){
    return (
        <>
         <MapView style={{flex:1}}
          showsUserLocation = {true}
        >
        <Marker
            coordinate={{latitude: 42.882004,
            longitude: 74.582748}}
            title={"title"}
            description={"description"}
         />
      </MapView>   

        </>
    )
}
}

export {Map}