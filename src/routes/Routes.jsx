import React, { lazy,Suspense}  from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


const HomePage = lazy(() => import("./component/Home"))

function Routes() {
	return (
		<>	
			<Suspense fallback={<h1>Loading...</h1>}>
			<Outlet />	
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
			</Routes>
			</Suspense>
</>
	);
}

export default Routes;



