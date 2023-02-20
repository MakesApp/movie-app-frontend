import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import { HOME } from "./constants";

const RouteConfig = () => {
	return (
		<Routes>
			<Route path={HOME} element={<HomePage />} />
		</Routes>
	);
};

export default RouteConfig;
