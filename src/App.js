import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="demo-big-content">
			<Layout>
				<Header
					className="header-color"
					title={
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
							Felipe Stuardo
						</Link>
					}
					scroll
				>
					<Navigation className="nav-bar">
						<Link to="/aboutme">About Me</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Header>

				<Drawer
					title={
						<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
							Home
						</Link>
					}
				>
					<Navigation>
						<Link to="/aboutme">About Me</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Drawer>

				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
