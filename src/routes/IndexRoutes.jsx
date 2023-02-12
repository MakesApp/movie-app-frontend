import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DetailPage from '../pages/DetailPage/DetailPage';
import HomePage from '../pages/Homepage';

function Indexroutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/homepage' element={<HomePage />} />
				<Route path='/detailPage/:id' element={<DetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Indexroutes;
