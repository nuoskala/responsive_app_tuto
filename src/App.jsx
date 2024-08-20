import './App.css'

import picTest from '../img/revontulet.png'

function App() {
  
  const intro = "This is a mock website that I created to put into practise what I learned of responsiveness."


  return (
    <>


      <div className='header'>
        <h1>A mock website</h1>
        <h4>With responsive design</h4>
      </div>

      <div className='col-d-12 col-t-12 col-m-12 navbar'>
        <a href="#"className='navbar-elt'>Link 1</a>
        <a href="#"className='navbar-elt'>Link 2</a>
        <a href="#"className='navbar-elt'>Link 3</a>
        <a href="#"className='navbar-elt'>Link 4</a>
        <a href="#"className='navbar-elt'>Link 5</a>
        <a href="#"className='navbar-elt'>Link 6</a>
      </div>

      <div className='row'>
        <div className='col-d-4 col-t-10 col-m-10 content'>
          <p>{intro}</p>
        </div>
        <div className='col-d-4 col-t-10 col-m-10 illustration'>
          <img src={picTest} />
          <p className='img-license'> This work © 2024 by Clara Nuoskala is licensed under CC BY-NC-ND 4.0 </p>
        </div> 
      </div>


    </>
  )
}

export default App
