import { Route, Routes } from "react-router-dom";
import AdvancedSearch from "../pages/AdvancedSearch/AdvancedSearch";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/Homepage/HomePage";
import SearchResults from "../pages/Searchresults/SearchResults";
import { HOME, Search } from "./constants";
import { Detail, Advanced } from "./constants";
const RouteConfig = () => {
	return (
		<Routes>
			<Route path={HOME} element={<HomePage />} />
			<Route path={Search} element={<SearchResults />}></Route>
			<Route path={Detail} element={<DetailPage />} />
			<Route path={Advanced} element={<AdvancedSearch />} />
		</Routes>
	);
};

export default RouteConfig;
