import pic from './images1/images.jpg';
import './App.css';
import Muthu from './components/uber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="top">
          <div className='header'>
            <h1>uber Eats </h1>
          </div>

          <div className='nav'>
            <a className='a1'><b>log in</b></a>
            <a className='a2'><b>sign up</b></a>
          </div>
        </div>
      </header>
      <div class="container2">
        <div className='images'>
          <img src={pic} width={"auto"} height={500} />
        </div>
        <div class="text-area" >
          <h2>PLACE YOUR OREDERS</h2>
          <p>
          <i>enter your adress:</i> <input type={"text"} id={"address"} name={"address"} placeholder="enter your address" value={""}></input></p>
          <br/>
          <p>
            <i>phone no:</i><input type="number" placeholder='enter your phone number'></input>
          </p>
          <p>
            <i>near by location:</i><input type={"text"} placeholder='enter a near by location'></input>
          </p>
          <p>
            
          </p>
        </div>
      </div>
      <div class="container3">
<Muthu></Muthu>
      </div>
    </div>
  )
}


export default App;
