import * as Location from "expo-location";
import {ref,getDatabase,update,onValue} from 'firebase/database'
import {getDistance, getPreciseDistance} from 'geolib';
export const db = getDatabase()
export var helpers = []
  export const getLocation = async (uid) => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
     // const { granted2 } = await Location.requestBackgroundPermissionsAsync();

      
      if (!granted /*&& !granted2*/ ) return;
     /* const {
        coords: { latitude, longitude },
      }*/
     let location  = await Location.getCurrentPositionAsync();
     if(location.coords.latitude != 0 && location.coords.longitude != 0)
     {
      let reference = ref(db,'users/assistants/' + uid)

      update(reference,{
              location:location
          })
         // console.log("location" + JSON.stringify(location)) 


     }
     
    //const { granted2 } = await Location.requestBackgroundPermissionsAsync();

    } catch (error) {
      console.log(error);
    }
  };
  export const NearbyUsers = async (uid) =>
  {
    try {
           //var helpers =[]


           let db = getDatabase()
           let latitude = 0
           let longitude = 0
      
           let users =[];

      
            let  reference = ref(db,'users/assistants');
            console.log(reference) 
            let refUser = ref(db,'users/assistants/'+uid)
            console.log(refUser)
            onValue(refUser,(snapshot) => {
              
                latitude = snapshot.val().location.coords.latitude
              longitude =  snapshot.val().location.coords.longitude
              console.log(latitude + " <=tekksii =>"+ longitude)

              

              
            })
            

           onValue(reference, (datasnapshot) => {
        datasnapshot.forEach((child) => {
          //console.log(JSON.stringify(child.val().location))
          if(datasnapshot.val.location === null) 
          {
           

          }
          else 
          {

          
          var dis = getDistance(
            { latitude: latitude, longitude: longitude },
            { latitude: child.val().location.coords.latitude, longitude: child.val().location.coords.longitude }
          );
          if (dis < 1000) {
            console.log("la distance est: " + dis);
            users.push({
              image: child.val().image,
              email: child.val().email,
              name: child.val().name,
            });
            //console.log(users)
          }
        }


        }
        );


      })
          // console.log(users)
          //console.log(users)

          helpers = [...users] 
         // console.log(helpers)
          //console.log(users)
          

        
    } catch (error) {
      return error 
        
    }

  }
 /* export const UpdateUserLocation = async ( ) => {
    try {
      let reference = ref(db,'users/assistants/' + uid)

        update(reference,{
                location:JSON.stringify(getLocation())
            })
    } catch (error) {
        return error;
    }
}*/

export const UpdateEvery = async (uid) => 
{
  getLocation(uid)
  NearbyUsers(uid)

  window.setInterval(function(){
    //console.log("location222" + JSON.stringify(getLocation()))
  getLocation(uid)

  }, 50000);
}
    