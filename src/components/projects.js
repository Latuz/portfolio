import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import projectone from '../images/fullimg.png';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Projects</Tab>
				</Tabs>
				<div className="projects-grid">
					<Card className="card-projects">
						<CardTitle
							style={{
								color      : 'grey',
								height     : '280px',
								background : `url(${projectone}) center / cover`
							}}
						>
							{'The MERN Stack'}
						</CardTitle>
						<CardText>
							Ecommerce webpage with authentification and paypal payment using MongoDB, ExpressJS, React
							and NodeJS
						</CardText>
						<CardActions border>
							<a href="http://bestshopmern.herokuapp.com/" target="_blank" rel="noreferrer">
								<Button colored>Live Version</Button>
							</a>
							<Button colored>GitHub</Button>
						</CardActions>
						<CardMenu style={{ color: '#00000' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					<Card className="card-projects">
						<CardTitle
							style={{
								color      : '#000000',
								height     : '280px',
								background : 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'
							}}
						>
							{'Javascript Shopping App'}
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
						</CardText>
						<CardActions border>
							<Button colored>Live Demo</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#00000' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					<Card className="card-projects">
						<CardTitle
							style={{
								color      : '#000000',
								height     : '280px',
								background : 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'
							}}
						>
							{'Javascript Shopping App'}
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button colored>Live Demo</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#00000' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>

				<section>
					<Grid>
						<Cell col={12}>
							<div className="content" />
						</Cell>
					</Grid>
				</section>
			</div>
		);
	}
}

export default Projects;

/* <Card className="card-projects">
						<CardTitle
							style={{
								color      : 'grey',
								height     : '200px',
								background : `url(${projectone}) center / cover`
							}}
						>
							{'The MERN Stack'}
						</CardTitle>
						<CardText>
							Ecommerce webpage with authentification and paypal payment using MongoDB, ExpressJS, React
							and NodeJS
						</CardText>
						<CardActions border>
							<a href="http://bestshopmern.herokuapp.com/" target="_blank">
								<Button colored>Live Demo</Button>
							</a>
							<Button colored>GitHub</Button>
						</CardActions>
						<CardMenu style={{ color: '#00000' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					*/
