import {database }from 'firebase/database'
import {ref,getDatabase,set}from 'firebase/database'
import { getLocation } from './useLocation'
export const db = getDatabase()
let reference=""
export const AddUser = async (valid,uid, name, email, image,location) => {

    try {
        // valid est un parametre qui nous permets de savoir si la personne est un malvoyant ou un assistant 
        /// true ==> malvoyants
        /// false ==> assistants 
        /**On interroge la base de données en fonction du status de l'utilisateur */
        if (!valid) 
        {
             reference= ref(db,'users/malvoyants/' + uid)
            console.log(reference)
          

        }
        else {
            reference = ref(db,'users/assistants/' + uid)
            
        }
        set (reference,
            {
                uid:uid,
                name:name,
                email:email,
                image:image,
                myLocation:location,
                goTo:location


            }
    
        );
        getLocation(uid)

      
    } catch (error) 
    {
        console.log(error);
    }
    }
export const UpdateUserImage = async (image, uid) => {
    try {
        return await database
            .getDatabase()
            .ref("users/" + uid)
            .update({
                image:image
            })
    } catch (error) {
        return error;
    }
}