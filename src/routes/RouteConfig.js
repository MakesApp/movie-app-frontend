import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";

const RouteConfig = () => {
	return (
		<Routes>
			<Route path='/movie/details/:id' element={<DetailPage />} />
		</Routes>
	);
};

export default RouteConfig;
