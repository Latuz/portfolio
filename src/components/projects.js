import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

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
								color      : '#000000',
								height     : '180px',
								background : 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'
							}}
						>
							{'Javascript Shopping App'}
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley
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
								height     : '180px',
								background : 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'
							}}
						>
							{'Javascript Shopping App'}
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley
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
								height     : '180px',
								background : 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'
							}}
						>
							{'Javascript Shopping App'}
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley
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
