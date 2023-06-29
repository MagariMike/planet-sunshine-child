import React, { useState } from "react";
import { storage } from "./firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "../styles/upload-form.css";

const UploadForm = () => {
	const [uploadProgress, setUploadProgress] = useState(0);
	const [file, setFile] = useState(null);
	// const [url, setUrl] = useState(null);
	// const [error, setError] = useState(null);

	const handleChange = (e) => {
		setFile(e.target.files[0]);
		console.log(file);
	};

	const uploadImage = (e) => {
		if(!file){
			alert("Please attach a file");
		}
		const storageRef = ref(storage, `/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(progress);
				console.log(progress);
			},
			() => {
				// getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
				// 	console.log("Download Url:", downloadUrl);
				// });

				getDownloadURL(ref(storage, `/${file.name}`)).then((url) => {
					// setUrl(url);
					console.log(url);
				});
			}
		);

		// getDownloadURL(ref(storage, `/${file.name}`)).then((url) => {setUrl(url);
		// 	console.log(url);
		// }).catch((/*err*/) => {
		// 	// setError(err);
		// })
		// );
	};

	return (
		<form id="upload-form">
			<input
				type="file"
				accept="image/png, image/jpeg"
				onChange={handleChange}
			></input>
			<button onClick={uploadImage}>Upload</button>
			{/* <div>{progress} </div> */}
		</form>
	);
};

export default UploadForm;
