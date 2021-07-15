import './Home.css';

function Home(){
  sessionStorage.setItem('uname', "");

  let uname="",passw="";
  function register(){
    uname=uname.trim();
    passw=passw.trim();
    if(uname.length<=6 || passw.length<=6){
        alert("Fields length should be greter than 6!!!")
    }
    else{
      sessionStorage.setItem('uname', uname);
      window.location.href='/profile'
    }
  }

    return(
        <div className="home">
                <h4>Welcome to practice pal! Let's face it, sometimes life gets in the way of practicing your instrument. It's easy to lose track of where you're at! Practice Pal gives you a simple and efficient place to track your progress. Sign up is quick - all you need is a username & password! Let's get practicing...</h4>
      
      <div className="input">
      <input className="username" type="text" name="name" placeholder="UserName" onChange={(e)=>{uname=e.target.value;}} />
        <div></div>
      <br></br>

      <input className="password" type="password" name="name" placeholder="Password" onChange={(e)=>{passw=e.target.value;}}/>
      <div></div>
      <br></br>
      <input className="register" type="button" value="Register" onClick={()=>register()} />
      </div>
        </div>
    );
}

export default Home;