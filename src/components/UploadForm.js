import React from "react";
import { useState } from "react";

const UploadForm = () => {
	const [file, setFile] = useState();

	const handleChange = (e) => {
		setFile(e.target.files[0]);
	};
	if(file) {console.log(file.name);}
	
	const uploadImage = () => {
		
	};
	return (
		<div>
			<input
				type="file"
				accept="image/png, image/jpeg"
				onChange={handleChange}
			></input>
		</div>
	);
};

export default UploadForm;
