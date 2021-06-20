
import './App.css';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Uploaded = ({ name }) => {
    let imageLink = process.env.REACT_APP_API_URI + '/'+ name;

    const handleClick = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(imageLink);

    }

    return (
        <div className="container">
            <FontAwesomeIcon icon={faCheckCircle} size="4x" color="green" />
            <div className="heading">Uploaded Successfully!</div>
            <img src={`${imageLink}`} height="254" width="338" />
            <div className="urlbox">
                <span className="textbox">{imageLink}</span>
                <button className="copylink" onClick={handleClick}>Copy link</button>
            </div>

        </div>
    );

}

export default Uploaded;