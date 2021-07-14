import './Home.css';

function Home(){
    return(
        <div className="home">
                <h4>Welcome to practice pal! Let's face it, sometimes life gets in the way of practicing your instrument. It's easy to lose track of where you're at! Practice Pal gives you a simple and efficient place to track your progress. Sign up is quick - all you need is a username & password! Let's get practicing...</h4>
      
      <div className="input">
      <input className="username" type="text" name="name" placeholder="UserName" />
        <div></div>
      <br></br>

      <input className="password" type="password" name="name" placeholder="Password" />
      <div></div>
      <br></br>
      <input className="register" type="button" value="Register" />
      </div>
        </div>
    );
}

export default Home;