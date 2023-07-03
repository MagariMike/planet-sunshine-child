import React from "react";
import { useState } from "react";
import { storage } from "./firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UploadForm = () => {
	const [file, setFile] = useState();
	const [progress, setProgress] = useState(0);
	const [url, setUrl] = useState(null);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setFile(e.target.files[0]);
	};

	const uploadImage = () => {
		const fileRef = ref(storage, `/${file.name}`);
		const uploadTask = uploadBytesResumable(fileRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
		<div>
			<input
				type="file"
				accept="image/png, image/jpeg"
				onChange={handleChange}
			></input>
			<button onClick={uploadImage}>Upload</button>
			<div>{progress}{url}</div>
		</div>
	);
};

export default UploadForm;
