import Mobile from "./Mobile";
import { ImMenu } from "react-icons/im";
import { MdClose } from "react-icons/md";
import "../styles/Header.css";
import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Header() {
  const { showSide, toggleSide } = useContext(AuthContext);

  return (
    <div className="header_wrapper_1">
      <div className="header_wrapper">
        <div className="header_extra_1"></div>
        {/* <div className="header_extra_2">
            {!showSide ? (
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
                onClick={toggleSide}
              >
                <ImMenu color="color: #a49588" fontSize="2em" />
              </div>
            ) : (
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
                onClick={toggleSide}
              >
                <MdClose color="color: #a49588" fontSize="2em" />
              </div>
            )}
            <div></div>
          </div>
          {showSide && (
            <div className="burger" onClick={toggleSide}>
              <Mobile />
            </div>
          )} */}

        <div>
          <header role="banner" className="header_img">
            <div>
              <hgroup>
                <div className="h1_outer">
                  <div className="h1_bg"></div>
                  <h1 className="hd_1">
                    19th International Healthcare and Medical Conference
                  </h1>
                </div>
                <div className="header_spacer"></div>
                <div className="h2_outer">
                  <div className="h2_bg"></div>
                  <h2
                    style={{
                      fontSize: "1em",
                      color: "ffffff9c",
                    }}
                    className="hd_2"
                  >
                    November 5-9, 2023 | Calgary, Canada
                  </h2>
                </div>
              </hgroup>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
export default Header;
