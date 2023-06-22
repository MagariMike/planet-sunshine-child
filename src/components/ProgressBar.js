// // import React from "react";
// // import useStorage from "./hooks/useStorage";

// // const ProgressBar = ({file, setFile }) => { 
    
// //     const { url, progress } = useStorage(file)
// //     console.log(progress, url)
    
// //     return (
// //         <div className="progress-bar" style={ {width: progress + '%'}}>progress</div>
// //     )
    
// // }

// // export default ProgressBar



// import React, { useState } from 'react'
// import ProgressBar from './ProgressBar';
// import { storage } from './firebase/config'
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

// import "../styles/upload-form.css"

// export default const UploadForm = () => {

    
//     const [progress, setProgress ] = useState(0);
//     const [ file, setFile ] = useState(null);
//     const [ error, setError ] = useState(null)
//     const [ url, setUrl ] = useState(null)
    
    
//     const uploadImage = (e) => { 

//         let file = e.target.files[0];
//         let fileRef = ref(storage, file.name)
//         const uploadTask = uploadBytesResumable(fileRef, file)

//        uploadTask.on('state_changed', (snapshot) => {
//         const percentage = (snapshot.bytesTransferred / snapshot.totalBytes * 100)
//         setProgress(percentage)
//         console.log('Upload is ' + percentage + '% done' )
//     })

//     }

//     const changeHandler = (e) => {

//         let selected = e.target.files[0];
        
//         console.log(selected)
//         if(selected) { 
//             setFile(selected)
//             setError('')
//         } else {
//             setFile(null)
//             setError('Please select an acceptable image type (PNG or JPEG)')
       
        

//     };

//   return (
//     <form id="upload-form">
//         <input type="file" accept="image/png, image/jpeg" onChange={changeHandler}></input>
//         {progress}
//         <button onClick={uploadImage}>Upload</button>
    
//         <div>
//             <div className='output'>
//                 {/* { error && <div className='error'>{error}</div>} */}
//                 {/* { file && <div>{file.name}</div>} */}
//                 {/* { file && <ProgressBar file={file} setFile={setFile}/> } */}
//             </div>
//         </div>
//     </form>
//   )
// }

// export default UploadForm