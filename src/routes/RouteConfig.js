import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/Homepage/HomePage";
import { HOME } from "./constants";
import { Detail } from "./constants";
const RouteConfig = () => {
	return (
		<Routes>
			<Route path={HOME} element={<HomePage />} />
			<Route path={Detail} element={<DetailPage />} />
		</Routes>
	);
};

export default RouteConfig;
