import './App.css'

function App() {
  
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis rutrum massa. Donec ut pharetra tellus. Morbi sed turpis nisl. Nullam lacinia suscipit tincidunt. Donec porta leo arcu. Nullam sit amet hendrerit eros. Vestibulum elementum iaculis neque, et mollis tortor pulvinar et. Nunc nec viverra massa. Donec pellentesque maximus justo, ut tempor erat aliquet eu. Sed faucibus cursus odio sodales porta. Proin neque risus, finibus vitae dolor in, dignissim finibus magna. Donec aliquet ipsum in libero dictum vestibulum. Nulla sit amet mollis nibh. In accumsan maximus blandit. Etiam varius ante libero, sed hendrerit nunc sollicitudin sit amet. Sed vulputate magna id sagittis venenatis. Phasellus mauris nisi, dapibus vel fringilla non, suscipit vel libero. Pellentesque sed maximus odio, vitae commodo nisl. Nunc sit amet aliquet augue, quis ultricies ante. "


  return (
    <>


      <div className='header'>
        <h1>An awesome website</h1>
        <h4>With responsive design</h4>
      </div>

      <div className='row'>
        <div className='col-d-12 col-t-12 col-m-12 navbar'>
          <a href="#"className='navbar-elt'>Link 1</a>
          <a href="#"className='navbar-elt'>Link 2</a>
          <a href="#"className='navbar-elt'>Link 3</a>
          <a href="#"className='navbar-elt'>Link 4</a>
          <a href="#"className='navbar-elt'>Link 5</a>
          <a href="#"className='navbar-elt'>Link 6</a>
        </div>

        <div className='col-d-6 col-t-9 content'>
          <p>{loremIpsum}</p>
        </div>

        <div className='col-d-3 col-t-12 side'>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>


      </div>



    </>
  )
}

export default App
