import {database }from 'firebase/database'
import {ref,getDatabase,set}from 'firebase/database'
export const db = getDatabase()
let reference=""
export const AddUser = async (valid,uid, name, email, image,location) => {

    try {
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
                location:location 

            }
    
        );
      
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