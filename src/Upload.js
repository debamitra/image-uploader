import './App.css';

import axios from 'axios';


const Upload = ({ getFileData, uploadingstateChange }) => {

    const handleUpload = (event) => {
        event.preventDefault();
        uploadingstateChange(true);
        const data = new FormData();
        data.append('file', event.target.files[0]);

        axios.post('http://localhost:8000/upload', data)
            .then((res) => {
                getFileData(res);
                uploadingstateChange(false);
            });
    }


    return (
        <div className="container">
            <div className="heading"> Upload your image</div>
            <div className="sub-heading">File should be Jpeg, Png,...</div>
            <div className="sub-container">
                <div className="imagecontainer"></div>
                <div className="sub-sub-container">Drag and drop your image here</div>
            </div>
            <label className="cusbutton"  >
                <input name='file' hidden type="file" onChange={handleUpload} ></input>
                Choose a File
            </label>
        </div>
    );
}

export default Upload;