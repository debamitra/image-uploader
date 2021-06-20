import './App.css';

import axios from 'axios';
import DragAndDrop from './DragAndDrop';


const Upload = ({ getFileData, uploadingstateChange }) => {

    const handleDrop = (file) => {
        uploadingstateChange(true);
        const data = new FormData();
        data.append('file', file);

        axios.post(`${process.env.REACT_APP_API_URI}/upload`, data)
            .then((res) => {
                getFileData(res);
                uploadingstateChange(false);
            });

    }

    const handleUpload = (event) => {
        event.preventDefault();
        uploadingstateChange(true);
        const data = new FormData();
        data.append('file', event.target.files[0]);

        axios.post(`${process.env.REACT_APP_API_URI}/upload`, data)
            .then((res) => {
                getFileData(res);
                uploadingstateChange(false);
            });
    }


    return (
        <div className="container">
            <div className="heading"> Upload your image</div>
            <div className="sub-heading">File should be Jpeg, Png,...</div>
            <DragAndDrop handleDrop={handleDrop}>
                <div className="sub-container">
                    <div className="imagecontainer"></div>
                    <div className="sub-sub-container">Drag and drop your image here</div>
                </div>
            </DragAndDrop>
            <label className="cusbutton"  >
                <input name='file' hidden type="file" onChange={handleUpload} ></input>
                Choose a File
            </label>

        </div>
    );
}

export default Upload;