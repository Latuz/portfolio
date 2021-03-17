import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";
import projectone from "../images/fullimg.png";
import projecttwo from "../images/Omnifood.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
        </Tabs>
        <div className="projects-grid">
          <Grid className="grid-project">
            <Cell col={4}>
              <Card
                className="card-projects"
                shadow={0}
                style={{ width: "320px", height: "320px", margin: "auto" }}
              >
                <CardTitle
                  style={{
                    color: "black",
                    height: "250px",
                    background: `url(${projectone}) center / cover`,
                  }}
                >
                  <p
                    className="project-titles"
                    style={{ fontSize: "25px" }}
                  ></p>
                </CardTitle>
                <CardText>
                  Ecommerce webpage with authentification and paypal payment
                  using MongoDB, ExpressJS, React and NodeJS. Hosted on Heroku
                </CardText>
                <CardActions border>
                  <a
                    href="http://bestshopmern.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button colored>Live Version</Button>
                  </a>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{ color: "#00000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                className="card-projects"
                shadow={0}
                style={{ width: "320px", height: "320px", margin: "auto" }}
              >
                <CardTitle
                  style={{
                    color: "#000000",
                    height: "280px",
                    background: `url(${projecttwo}) center / cover`,
                  }}
                >
                  {""}
                </CardTitle>
                <CardText>
                  Beatiful restaurant webpage using only HTML & CSS
                </CardText>
                <CardActions border>
                  <a
                    href="https://html-css-first-site.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button colored>Live Version</Button>
                  </a>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: "#00000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                className="card-projects"
                shadow={0}
                style={{ width: "320px", height: "320px", margin: "auto" }}
              >
                <CardTitle
                  style={{
                    color: "#000000",
                    height: "280px",
                    background:
                      "url(https://cdn.auth0.com/blog/react-js/react.png) center / cover",
                  }}
                >
                  {"Making last adjustments"}
                </CardTitle>
                <CardText>Almost done!</CardText>
                <CardActions border>
                  <Button colored>Live Demo</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: "#00000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
