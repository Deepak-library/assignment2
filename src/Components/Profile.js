
import './Profile.css';
import React, { useState } from 'react';

function Profile(){
    let [alllist,setlist] = useState({});
    let uname=sessionStorage.getItem('uname');
    let l;
    (async function addexercise(){
        try{
         l=await fetch("http://localhost:5000/todos",{method:"GET",headers:{"content-type":"application/json"},body:JSON.stringify({"uname":uname}) }).then(a=>a.json()).then(console.log);
        console.log(l);
        }catch(e){
         alert("unable to connect server!")
        }
      })()

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