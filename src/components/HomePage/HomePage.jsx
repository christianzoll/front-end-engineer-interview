import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PageLoading from '../PageLoading';

function HomePage() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
	  const fetchData = async () => {
		  const res = await fetch('https://jsonplaceholder.typicode.com/users')
		  const newData = await res.json();
		  console.log(newData);
		  setData(newData)
		  setLoading(false)
		};	
		fetchData();
}, []);

	if (loading) {
		return <PageLoading />;
	}

	if (data == null) {
		return <>An error has occurred</>;
	} 

	
	// const retrieveData = () => {	
	// 	await fetch('https://jsonplaceholder.typicode.com/users')
	// }
	

	return (
		<>
			{data.map((user) => (
				<Card key={user.id} className="mb-2">
					<Card.Body>
						<Card.Title>{user.name}</Card.Title>
						<Card.Subtitle className="text-muted mb-2">
							{user.email}
						</Card.Subtitle>
						<Card.Text
							style={{ fontSize: '90%' }}
							className="mb-2"
							as="div"
						>
							<div>{user.address.street}</div>
							<div>{user.address.suite}</div>
							<div>
								{user.address.city} {user.address.zipcode}
							</div>
						</Card.Text>
						<Link to={`/user/${user.id}`}>View Posts</Link>
					</Card.Body>
				</Card>
			))}
		</>
	);
}

export default HomePage;
