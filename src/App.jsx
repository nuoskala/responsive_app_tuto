import './App.css'

function App() {
  
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis rutrum massa. Donec ut pharetra tellus. Morbi sed turpis nisl. Nullam lacinia suscipit tincidunt. Donec porta leo arcu. Nullam sit amet hendrerit eros. Vestibulum elementum iaculis neque, et mollis tortor pulvinar et. Nunc nec viverra massa. Donec pellentesque maximus justo, ut tempor erat aliquet eu. Sed faucibus cursus odio sodales porta. Proin neque risus, finibus vitae dolor in, dignissim finibus magna. Donec aliquet ipsum in libero dictum vestibulum. Nulla sit amet mollis nibh. In accumsan maximus blandit. Etiam varius ante libero, sed hendrerit nunc sollicitudin sit amet. Sed vulputate magna id sagittis venenatis. Phasellus mauris nisi, dapibus vel fringilla non, suscipit vel libero. Pellentesque sed maximus odio, vitae commodo nisl. Nunc sit amet aliquet augue, quis ultricies ante. "


  return (
    <>


      <div className='header'>
        <h1>Title of the page.</h1>
      </div>

      <div className='row'>
        <div className='col-3 side-menu'>
          <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            <li>Element 4</li>
            <li>Element 5</li>
          </ul>
        </div>

        <div className='col-9 content'>
          <p>{loremIpsum}</p>
        </div>


      </div>



    </>
  )
}

export default App
