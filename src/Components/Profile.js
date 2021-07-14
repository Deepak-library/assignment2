
import './Profile.css';

function Profile(){
    return(
        <div className="profile">
            <h1>Choose Your Instrument</h1>
            <div className="choice">
            <button className="guitar">Guitar</button>
            <button className="drum">Drum</button>
            </div>
        </div>

    );
}

export default Profile;