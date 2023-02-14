import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Homepage';
function Indexroutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/homepage' element={<HomePage />} />
				<Route path='/latestmovies/page/:page'/>
				<Route path='/topmovies/page/:page'></Route>


			</Routes>
		</BrowserRouter>
	);
}

export default Indexroutes;
