import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import { storage } from './firebase/config'
import { ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'

import "../styles/upload-form.css"

const UploadForm = () => {
  

    // const [ file, setFile ] = useState(null);
    // const [ error, setError ] = useState(null);
    
    // const types = ['image/png', 'image/jpeg']

    // const changeHandler = (e) => { 
    //     let selected = e.target.files[0];
    //     console.log(selected)
    //     if(selected && types.includes(selected.type)) { 
    //         setFile(selected)
    //         setError('')
    //     } else {
    //         setFile(null)
    //         setError('Please select an acceptable image type (PNG or JPEG)')
    //     }
    // };
    const [ imageUpload, setImageUpload ] = useState(null)

    const uploadImage = (e) => { 

        let file = e.target.files[0];
        let fileRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable(fileRef, file)

       uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes * 100)
        console.log('Upload is ' + progress + '% done' )
       })

    }
  return (
    <form id="upload-form">
        <input type="file" onChange={uploadImage}></input>
        
    
        {/* <div>
            <div className='output'>
                { error && <div className='error'>{error}</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </div> */}
    </form>
  )
}

export default UploadForm