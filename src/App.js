import logo from './image/THG_NoBG.png';
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>Make sure to follow us on our socials to keep up to date, or join our mailing list below!</p>
        {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
        <p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeGhgolUg5iAJwQQTfGs0MHFQAhd_zn8AYddR_YOwvmq7QTUQ/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </p>
      </header>
    </div>
  );
}

export default App;
