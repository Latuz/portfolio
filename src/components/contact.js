import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Felipe Stuardo</h2>
            <img
              src="https://cdn3.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              {"Let's Build something."}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Get in touch with me</h2>
            <hr />
            <div className="contact-list">
              <List className="list">
                <ListItem>
                  <ListItemContent className="list-content">
                    <i
                      style={{ paddingLeft: "2em" }}
                      className="fa fa-phone-square"
                      aria-hidden="true"
                    />
                    +56961687465
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-content">
                    <i
                      style={{ paddingLeft: "2em" }}
                      className="fa fa-envelope-square"
                      aria-hidden="true"
                    />
                    fstuardom@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-content">
                    <i
                      style={{ paddingLeft: "2em" }}
                      className="fa fa-linkedin-square"
                      aria-hidden="true"
                    />
                    LinkedinLink
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
