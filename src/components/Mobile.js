import { Link } from 'react-router-dom';
// import "../styles/Mobile.css";
import "../styles/animation.css";

function Mobile() {
    return (
      <div>
        <div className="menu_close" ></div>

        <div className="content2">
        {/* <div 
      className="phone"
      > */}
          <nav role="navigation">
            <div 
            id="menuToggle"
            >
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul 
            id="menu"
            >
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Info</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
           </div>
          </nav>
          {/* </div> */}
        </div>
        {/*  <div className="menu" style={{width: "290px"}}>
          <div
            className="menu_background"
            // style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}
          ></div>
         <div className='menu_navigation'>
            <ul className="nav_links">
              <li
                className="nav_item"
                // style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                className='nav_item_a'
                  href="/vehicles/falcon-9/"
                  aria-label="Learn about the Falcon 9 vehicle"
                >
                  Falcon 9
                </a>
              </li>
              <li
                className="nav_item"
                // style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}

              >
                <a
                                className='nav_item_a'

                  href="/vehicles/falcon-heavy/"
                  aria-label="Learn about the Falcon Heavy vehicle"
                >
                  Falcon Heavy
                </a>
              </li>
              <li
                className="nav_item"
                // style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                                className='nav_item_a'

                  href="/vehicles/dragon/"
                  aria-label="Learn about the Dragon vehicle"
                >
                  Dragon
                </a>
              </li>
              <li
                className="nav_item"
                // style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                                className='nav_item_a'

                  href="/vehicles/starship/"
                  aria-label="Learn about the Starship vehicle"
                >
                  Starship
                </a>
              </li>
              <li
                className="nav_item"
                // style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                                className='nav_item_a'

                  href="/human-spaceflight/"
                  aria-label="Learn about Human Spaceflight"
                >
                  Human Spaceflight
                </a>
              </li>

              {/* ***** 
              <li
                class="nav-item primary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                  href="/rideshare/"
                  aria-label="Learn about the Rideshare program"
                >
                  Rideshare
                </a>
              </li>
              <li
                class="nav-item primary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                  href="/starshield/"
                  aria-label="Learn about the Starshield program"
                >
                  Starshield
                </a>
              </li>
              <li
                class="nav-item primary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                  href="https://www.starlink.com"
                  aria-label="Learn about Starlink internet"
                  target="_"
                >
                  Starlink
                </a>
              </li>
              <li
                class="nav-item secondary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a href="/mission/" aria-label="Learn about SpaceX's mission">
                  Mission
                </a>
              </li>
              <li
                class="nav-item secondary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a href="/launches/" aria-label="Learn about SpaceX's launches">
                  Launches
                </a>
              </li>
              <li
                class="nav-item secondary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a href="/careers/" aria-label="Learn about SpaceX careers">
                  Careers
                </a>
              </li>
              <li
                class="nav-item secondary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a href="/updates/" aria-label="Learn about the latest updates">
                  Updates
                </a>
              </li> 

             ******* 
              <li
                class="nav-item secondary"
                style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}
              >
                <a
                  href="https://shop.spacex.com/"
                  rel="noopener"
                  aria-label="Go to the SpaceX shop"
                  target="_blank"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div> 
        </div>*/}
      </div>
    );
  }
  export default Mobile;