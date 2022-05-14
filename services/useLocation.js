import * as Location from "expo-location";
import {database }from 'firebase/database'
import {ref,getDatabase,update} from 'firebase/database'
export const db = getDatabase()
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
          console.log("location" + JSON.stringify(location)) 


     }
     
    //const { granted2 } = await Location.requestBackgroundPermissionsAsync();

    } catch (error) {
      console.log(error);
      console.log("yeahhhhh")
    }
  };
  export const NearbyUsers = asyn(uid) 
  {
    try {
           let db = getDatabase()
      

      
            const uid = auth.getAuth().currentUser.uid;
            let users =[];
            let  reference = ref(db,'users/assistans');
            console.log(reference)

           await onValue(reference, (datasnapshot) => {
              datasnapshot.forEach((child) => {
                console.log(JSON.stringify(child.val().location))
              if(child.val().uid=== uid)
              {
                console.log('yesss')
                  
              }
              else {  
                users.push ({
                  userName:child.val().location
              })
              console.log('yess')
              }
          }
              )
              

           })
           console.log(users)
           this.setState({
             results:users
           })
          
           
        
    } catch (error) {
        alert(error)
        
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
  window.setInterval(function(){
    //console.log("location222" + JSON.stringify(getLocation()))
  getLocation(uid)    

  }, 50000);
}
    