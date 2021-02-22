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
                  <p className="project-titles" style={{ fontSize: "25px" }}>
                    The MERN Stack
                  </p>
                </CardTitle>
                <CardText>
                  Ecommerce webpage with authentification and paypal payment
                  using MongoDB, ExpressJS, React and NodeJS
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
                    background:
                      "url(https://cdn.auth0.com/blog/react-js/react.png) center / cover",
                  }}
                >
                  {"Second React Project"}
                </CardTitle>
                <CardText>TEXT FOR THE NEXT REACT APP</CardText>
                <CardActions border>
                  <Button colored>Live Demo</Button>
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
                  {"Javascript Shopping App"}
                </CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </CardText>
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
