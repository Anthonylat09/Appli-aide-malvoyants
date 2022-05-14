import * as Location from "expo-location";

  export const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
     // const { granted2 } = await Location.requestBackgroundPermissionsAsync();

      
      if (!granted /*&& !granted2*/ ) return;
     /* const {
        coords: { latitude, longitude },
      }*/
     let location  = await Location.getCurrentPositionAsync();
     console.log("location" + JSON.stringify(location))
    //const { granted2 } = await Location.requestBackgroundPermissionsAsync();

    } catch (error) {
      console.log(error);
      console.log("yeahhhhh")
    }
  };
  var intervalId = window.setInterval(function(){
    getLocation()
  }, 500000);