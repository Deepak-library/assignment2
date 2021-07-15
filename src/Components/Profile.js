
import './Profile.css';

function Profile(){

    let uname=sessionStorage.getItem('uname');
    if(uname===""){
       // alert("You have not Loged In !!! Please Log In");
        window.location.href='/';
    }
        else
    return(
        <div className="profile">
            <h2>Hi, {uname}</h2>
            <h1>Choose Your Instrument</h1>
            <div className="choice">
            <button className="guitar" onClick={()=>{window.location.href='/guitar';}}><b>Guitar</b></button>
            <button className="drum" onClick={()=>{window.location.href='/drum';}}><b>Drum</b></button>
            </div>
        </div>

    );
}

export default Profile;