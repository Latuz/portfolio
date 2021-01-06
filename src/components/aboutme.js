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
							Hi, my name's Tom and I'm a web developer who's passionate about all things JavaScript. I
							currently work for IIA in sunny Suffolk where you can find me creating a variety of green
							field projects and maintaining our web applications.
							<p>
								I'm a developer, because I'm inspired by the idea of being a better me today than I was
								yesterday. Put simply, I love to learn and this project is a great example of that! I
								picked up a bit of Gatsby and GraphQl so I could implement a Contentful CMS and I also
								worked in some snazzy GSAP animations!
							</p>
							<p>
								I'm currently looking for an opportunity to work with a JavaScript framework and I'd
								ultimately like to end up working on mobile applications using computer vision and or
								NLP.
							</p>
							When I'm not busy building apps, you can find me walking the best dog in the world, eating
							pizza and trying to perfect my rendition of Classical Gas. If you'd like to learn more about
							what makes me tick feel free to visit my contact section.
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
