import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/Homepage/HomePage";
import SearchResults from "../pages/Searchresults/SearchResults";
import WatchLater from "../pages/WatchLater/WatchLater";
import { HOME, Search, Watch, Detail } from "./constants";
const RouteConfig = () => {
	return (
		<Routes>
			<Route path={HOME} element={<HomePage />} />
			<Route path={Search} element={<SearchResults/>}></Route>
			<Route path={Detail} element={<DetailPage />} />
			<Route path={Watch} element={<WatchLater />} />
		</Routes>
	);
};

export default RouteConfig;
