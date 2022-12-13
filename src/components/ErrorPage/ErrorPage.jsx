function ErrorPage() {
	return (
		<div
			style={{ height: '100vh' }}
			className="w-100 d-flex justify-content-center align-items-center"
		>
			<div className="w-50 text-center">
				<h1 className="mb-5">Whoops!</h1>
				<p>An unexpected error has occurred.</p>
				<p>
					<i>Not found</i>
				</p>
				<p>
					<a href="/">Home</a>
				</p>
			</div>
		</div>
	);
}

export default ErrorPage;
