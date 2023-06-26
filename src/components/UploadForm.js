import React, { useState } from "react";
import { storage } from "./firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "../styles/upload-form.css";


const UploadForm = () => {

  
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);


    const uploadImage = (e) => {

        const file = e.target.files[0];
        const fileRef = ref(storage, `/${file.name}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on("state_changed", (snapshot) => {

            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setProgress(percentage);
            console.log("Upload is " + percentage + "% done");
        },


        getDownloadURL(ref(storage, `/${file.name}`))
            .then((url) => {
                setUrl(url);
                console.log(url);

            })
            .catch((err) => {
                setError(err);
            })
        );
    };




    return (
        <form id="upload-form">
            <input type="file" accept="image/png, image/jpeg" onChange={uploadImage}></input>

            <div>{progress} </div>

        </form>
    );
};

export default UploadForm;