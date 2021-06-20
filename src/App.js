
import './App.css';
import Upload from './Upload';
import Uploading from './Uploading';
import Uploaded from './Uploaded';
import { useState } from 'react';



const App = () => {

  const [uploading, setUploading] = useState(false);
  console.log("uploading: ", uploading);

  const [file, setFile] = useState(null);
  console.log("file: ", file);

  const uploadingstateChange = (newState) => {
    setUploading((prevState) => {
      return newState;
    });
  }

  const getFileData = (data) => {
    setFile((prevData) => {
      return data;
    });
  }


  if (!file && !uploading)
    return (
      <div>
        <Upload getFileData={getFileData} uploadingstateChange={uploadingstateChange} />
      </div>
    );
  else if (uploading) return (
    <div>
      <Uploading />
    </div>
  );
  else
    return (
      <div>
        <Uploaded name={file.data.filename} />
      </div>
    );
}

export default App;
