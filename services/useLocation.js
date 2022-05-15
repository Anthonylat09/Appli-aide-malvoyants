import * as Location from "expo-location";
import {ref,getDatabase,update,onValue} from 'firebase/database'
import {getDistance, getPreciseDistance} from 'geolib';
export const db = getDatabase()
// cette liste contient les personnes qui sont geographiquement proches 
export var helpers = []
  export const getLocation = async (uid) => {
    try {
      /**On ne recupere la location que si l'utilisateur est sur l'appli (pas en arrière plan ) */
      const { granted } = await Location.requestForegroundPermissionsAsync(); 
      if (!granted /*&& !granted2*/ ) return;
     
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
          /**On repcupere les utilisateur situés sur un rayon de 1 km */
          if (dis < 1000) {
            console.log("la distance est: " + dis);
            // on ne prends pas enc ompte l'utilisateur qui a besoins d'aide lui-meme
            if(dis === 0) {

            }
          else 
          {
            users.push({
              image: child.val().image,
              email: child.val().email,
              name: child.val().name,
              distance:dis,
              location:child.val().location
            });

          }
           
            //console.log(users)
          }
        


        }
        );


      })
          

          helpers = [...users] 
        // console.log(helpers)
        
          

        
    } catch (error) {
      return error 
        
    }

  }

export const getDest = (uid) => 
{
  const goTo = null 
  const myRef = ref(db,'users/assistants'+uid) 
  onValue(myRef,(snapshot) => {
    goTo =snapshot.val().goTo
}) 
  return goTo

} 
export const resetDest = async (uid) => 
{
  const myRef =  reference = ref(db,'users/assistants'+uid) 
  update(myRef,(snapshot) => {
    goTo :null
}) 


} 
export const ShareMyLocationTo = async(myUID, otherUID)  =>
{
  const location = null
  const myRef =  reference = ref(db,'users/malvoyants'+myUID)
  const otherRef =  reference = ref(db,'users/assistants'+otherUID) 
  /**Je récupere la location de l'utilisateur courant  */
  onValue(myRef,(snapshot) => {
    location =snapshot.val().location
}) 
/// on mets à jour les données de la personne qui veut aider 
  update(otherRef,{
  goTo:location
   })


}

export const UpdateEvery = async (uid) => 
{
  // On initialise d'abord la location 
  getLocation(uid)
  NearbyUsers(uid)

  window.setInterval(function(){
    //console.log("location222" + JSON.stringify(getLocation()))
  getLocation(uid)

  }, 50000);
}
    