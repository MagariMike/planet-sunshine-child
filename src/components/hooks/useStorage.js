
import { useState, useEffect } from "react";
import { storage } from "../firebase/config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const useStorage = (file) => { 
    
    const [ progress, setProgress] = useState(0);
    const [ error, setError ] = useState(null);
    const [ url, setUrl ] = useState(null)


    useEffect(() => {

        const storageRef = ref(storage, `/archive/${file.name}`)
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on('state_changed', (snap) => { 
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => { 
            setError(err);
        }, async () => { 
            getDownloadURL(ref(storage, `/archive/${file.name}`)).then((url) => {

        setUrl(url)
  })        
        })
    }, [file])

    return ( 
        {progress, url, error }
    )
}

export default useStorage