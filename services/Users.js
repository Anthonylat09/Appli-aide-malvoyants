import {database }from 'firebase/database'
import {ref,getDatabase,set}from 'firebase/database'
export const db = getDatabase()

export const AddUser = async (uid, name, email, image,location) => {

    try {
      const reference = ref(db,'users/' + uid)
      console.log(reference)
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