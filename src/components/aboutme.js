import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
	render() {
		return (
			<div>
				<Grid className="about-grid">
					<Cell col={12}>
						<h1 style={{ paddingTop: '0.3em' }}>About Me</h1>
						<hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
						<p>
							Hello, I'm Felipe, and I'm passionate about all the things JavaScript. I work hard, I care
							about writting clean code and I genuinely love to learn. I'm currently looking for the right
							opportunity to work in an environment that will help me progress into a full-stack role. I
							have developed front end websites using Javascript, HTML, css, and currenty I'm finishing
							learning ReactJS to improve my skills. My mother tongue is spanish, but I am also fluent in
							english.
						</p>

						<h2 style={{ paddingTop: '1em' }}>Skills</h2>
						<div className="aboutme-icons">
							<img src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5" />
							<img src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" />
							<img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="bootstrap" />
							<img src="https://img.icons8.com/color/48/000000/javascript.png" alt="js-icon" />
							<img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" />
							<img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongo" />
							<img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="nodejs" />
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default About;
