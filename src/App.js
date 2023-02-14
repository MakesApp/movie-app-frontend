// import React from 'react';
import { useParams } from 'react-router';
import './App.css';
import Pagination from './components/Pagination/Pagination';
import Indexroutes from './routes/IndexRoutes';
function App() {
	let { page } = useParams();
	return (
		<div className='App'>
			<Indexroutes />
			<Pagination
				totalPage={20}
				pageNumber={(page = page ?? '1')}
				path={'/topmovies/page'}
			/>
		</div>
	);
}

export default App;
