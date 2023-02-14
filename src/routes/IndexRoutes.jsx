// import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import HomePage from '../pages/Homepage';
function Indexroutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/homepage' element={<HomePage />} />
				<Route path='/latestmovies/page/:page' element={<Pagination />} />
				<Route path='/topmovies/page/:page' element={<Pagination />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Indexroutes;
