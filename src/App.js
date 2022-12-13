import Container from 'react-bootstrap/Container';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark mb-2">
				<Container>
					<NavLink to="/" className="navbar-brand">
						Post Listing
					</NavLink>
				</Container>
			</nav>
			<Container>
				<Outlet />
			</Container>
		</>
	);
}

export default App;
