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
				<Route path="/ai-generated-movies" />
        <Route path="/advanced-search" />
        <Route path="/popular-actors" />
			</Routes>
			</Suspense>
</>
	);
}

export default Routes;



