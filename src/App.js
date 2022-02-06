import './App.css';
import Profile from './Profile/Profile';
import img1 from './images/me.jpg'


function App({}) {
const handleName =(profile)=>{
  alert(`Hello ${profile}`)
}

  return (
    <div className="App">
     <Profile fullName="Name:Yasmine mkaddem" bio="bio: Hello my name is yasmine and i like web development" profession="profession :Full-Stack js Developer" fonction={handleName}>
       <img src={img1} style={{padding:"10px", width: "320px", height: "208, 69px", border:""}} alt="ma photo" />

     </Profile>
    </div>
  );
}

export default App;
