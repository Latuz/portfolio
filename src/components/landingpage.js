import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://shaunolver.com/public/images/app/shaun-avatar.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1> Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>

              <div className="social-links">
                {/* LINKEDIN*/}
                <a
                  href="https://www.linkedin.com/in/felipe-stuardo-514aba202/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/fstuardom"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* GITHUB */}
                <a
                  href="https://github.com/Latuz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
