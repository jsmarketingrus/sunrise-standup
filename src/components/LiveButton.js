import React, { useState } from "react";
import "./LiveButton.css";

const LiveButton = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  function goLive() {
    setIsActive(true);
  }

  function exitLive() {
    setIsActive(false);
  }

  return (
    <span>
      <a
        className="button is-primary is-medium navbutton"
        href="#"
        onClick={goLive}
      >
        <span className="has-text-weight-bold">
          <i id="videoIcon" className="fa fa-user"></i> Go Live
        </span>
      </a>
      <div className={"modal " + (isActive ? "is-active" : "")}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div class="frame">
            <iframe
              allow="camera;microphone"
              class="frame"
              width="100%"
              height="100%"
              src="https://gentle-pond-06daa3a1e.azurestaticapps.net/?groupId=b4146fc0-77bb-11eb-a2f3-af18900971d5"
            ></iframe>
          </div>
        </div>
        <button
          className="modal-close is-large"
          onClick={exitLive}
          aria-label="close"
        ></button>
      </div>
    </span>
  );
};

export default LiveButton;