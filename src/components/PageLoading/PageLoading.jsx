import styles from './PageLoading.module.css';

function PageLoading() {
	return (
		<div
			style={{ height: '100vh' }}
			className="d-flex justify-content-center align-items-center flex-column"
		>
			<b>Loading...</b>
			<div className={`${styles['dot-pulse']} mt-3`} />
		</div>
	);
}

export default PageLoading;
