import './App.css'

import picRevontulet from '../img/revontulet.png'

function App() {
  
  const intro = "This is a mock website that I created to put into practise what I learned of responsiveness. All the pictures showed here are by Clara Nuoskala and licensed under CC BY-NC-ND 4.0."

  const Picture = ({picLink, picTitle, picDesc}) => {
    return (
      <div className='picture'>
      <div className='picture-description'>{picDesc}</div>
      <img src={picLink} />
      <p>{picTitle}</p>
      <p className='img-license'> This work by Clara Nuoskala is licensed under CC BY-NC-ND 4.0 </p>
      </div>

    )
  }
  
  const picturesList = [
    {
      link: './img/2023-12-06/IMG_0214.png',
      title: "Suolijärvi",
      description: "Lake Suolijärvi (Tampere, Finland) - 06.12.2023"
    },
    {
      link: '../img/2023-12-06/IMG_0115.png',
      title: "Squirel",
      description: "Lake Suolijärvi (Tampere, Finland) - 06.12.2023"
    },
    {
      link: '../img/2024-05-11/IMG_0097.png',
      title: "Northern lights",
      description: "Lake Suolijärvi (Tampere, Finland) - 11.05.2024"
    },
    {
      link: '../img/2024-06-22/IMG_0046.png',
      title: "Rauhaniemi sunset",
      description: "Rauhaniemi (Tampere, Finland) - 22.06.2024"
    },
    {
      link: '../img/2024-06-22/IMG_0150.png',
      title: "Gull - Rauhaniemi sunrise",
      description: "Rauhaniemi (Tampere, Finland) - 22.06.2024"
    },

    {
      link: '../img/2024-06-22/IMG_0255.png',
      title: "Rauhaniemi sunrise",
      description: "Rauhaniemi (Tampere, Finland) - 22.06.2024"
    },
  ]
  

  const Pictures = () => (
      picturesList.map((p, key) => <Picture key={key} picLink={p.link} picTitle={p.title} picDesc={p.description}/>)
  )
  

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
          <img src={picRevontulet} />
          <p className='img-license'> This work by Clara Nuoskala is licensed under CC BY-NC-ND 4.0 </p>
        </div> 
      </div>

      <div className='col-d-10 col-t-10 col-m-10 picture-container'>
        <Pictures/>

      </div>



    </>
  )
}

export default App
