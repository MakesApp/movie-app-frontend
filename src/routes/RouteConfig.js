import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import SearchResults from "../pages/Searchresults/SearchResults";
import { HOME, Search } from "./constants";

const RouteConfig = () => {
	return (
		<Routes>
			<Route path={HOME} element={<HomePage />} />
			<Route path={Search} element={<SearchResults/>}></Route>
		</Routes>
	);
};

export default RouteConfig;
