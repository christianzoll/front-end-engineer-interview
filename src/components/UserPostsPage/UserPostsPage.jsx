import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import PageLoading from '../PageLoading';

function UserPostsPage() {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState();
	const [user, setUser] = useState();
	const { userId } = useParams();

	/**
	 * Load post data.
	 * Data URL: https://jsonplaceholder.typicode.com/posts?userId=[userId]
	 * User URL: https://jsonplaceholder.typicode.com/users/[userId]
	 */
	useEffect(() => {
		if (userId === undefined) return;

		setLoading(true);

		// load post
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
			.then((response) => {
				if (!response.ok) throw new Error('Malformed response');

				return response.json();
			})
			.then((data) => {
				setPosts(data);
			})
			.catch((error) => {
				console.error(error.message ?? 'An error has occurred.');
			});

		// load user
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => {
				if (!response.ok) throw new Error('Malformed response');

				return response.json();
			})
			.then((data) => {
				setUser(data);
			})
			.catch((error) => {
				console.error(error.message ?? 'An error has occurred.');
			});
	}, [userId]);

	useEffect(() => {
		if (user == null || posts == null) return;

		setLoading(false);
	}, [user, posts]);

	if (loading) {
		return <PageLoading />;
	}

	if (user == null || posts == null) {
		return <>An error has occurred</>;
	}

	return (
		<>
			<div className="d-flex justify-content-between mb-4">
				<Link to="/">&lt; Home</Link>
				<Link to={`/user/${userId >= 10 ? '1' : +userId + 1}`}>
					Next User &gt;
				</Link>
			</div>
			<h2>{user.name} - Posts</h2>
			{posts.map((post) => (
				<Card key={post.id} className="mb-2">
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text style={{ whiteSpace: 'pre-wrap' }}>
							{post.body}
						</Card.Text>
					</Card.Body>
				</Card>
			))}
		</>
	);
}

export default UserPostsPage;
