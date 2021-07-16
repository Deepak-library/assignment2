
import './Profile.css';
import React, { useState, useEffect } from 'react';
import Goal from './Goal';
function Profile(){
    var [excer,setlist] = useState([]);
    var uname=sessionStorage.getItem('uname');
    var l=[];

    async function addexercise(){
        console.log(l);
        try{
         l=await fetch("http://localhost:5000/todos/list",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({"uname":uname}) });
         l=await l.json();
          
       }catch(e){
         alert(e)
        }
      }
      
      function del(id){
        const newList = excer.filter((iteam) => {
            return iteam.id !== id;
          });
      
          setlist(newList);
      }
    //   function cards(){
    //       alllist.forEach((listitem)=>{
    //           return(
    //               <div>
    //                   {listitem.uname}{listitem.instrument}
    //               </div>
    //           );
    //       });
    //   }
      let u=1;
      var x=[];
     // console.log(Object.prototype.toString.call(x) == '[object Array]');
    //   useEffect(() => {
    //     x.forEach(e=>{console.log(e);
    //     });
    //   },[alllist]);

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
            {/* {cards()} */}
            {/* <di>{(()=>{excer.forEach(listitem=>{
              return(
                  <div>
                      {listitem.uname}{listitem.instrument}
                  </div>
              );
          })})()}</di> */}
          
            <button onClick={()=>addexercise()}>load...</button>
            <button onClick={()=>{
                for(var ih of l){x.push({'key':ih.id,...ih});};
               x.forEach(e=>{console.log(e);})
               setlist([...x]);
               console.log(excer);
                }}>see exercise</button>

          <Goal list={excer} del={del}></Goal>
        </div>

    );
}

export default Profile;