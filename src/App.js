import logo from "./image/THG_NoBG.png";
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import "./App.css";

const url =
  "https://terribleheartgames.us11.list-manage.com/subscribe/post?u=88a1cb60d79337f4859526d52&amp;id=860d732513&amp;f_id=0087a6e0f0";
function App() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App" style={{ height: viewportHeight }}>
      <div className="landingPage ">
        <img src={logo} className="App-logo img-responsive" alt="logo" />
        <p>Are you ready for some purr-fectly amazing fun?</p>
        <p>
          Terrible Heart Games is working on a boardgame that involves kittens
          mining - coming to Kickstarter soon!
        </p>
        <p>
          Subscribe now and stay connected on our social media for updates.
        </p>
        {/* mailchimp here yay */}
        <div className="mailChimp ">
          <form
            action={url}
            // action="https://terribleheartgames.us11.list-manage.com/subscribe/post?u=88a1cb60d79337f4859526d52&amp;id=860d732513&amp;f_id=0087a6e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
          >
            <div id="mc_embed_signup_scroll">
              <div className="indicates-required"></div>
              <div className="mc-field-group">
                <input
                  placeholder="Your email"
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              <div className="mc-test" aria-hidden="true">
                <input
                  type="text"
                  name="b_88a1cb60d79337f4859526d52_860d732513"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="subscribeButton"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="socials">
          <a href="https://www.facebook.com/terribleheartgames">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://www.instagram.com/terribleheartgames/">
            <FaInstagram></FaInstagram>
          </a>
          <a href="mailto:admin@terribleheartgames.com">
            <AiOutlineMail></AiOutlineMail>
          </a>
        </div>
        {/* </p> */}
      </div>
    </div>
  );
}
export default App;
