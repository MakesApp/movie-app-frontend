import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/Homepage/HomePage";
import LoginPage from "../pages/Loginpage/LoginPage";
import SearchResults from "../pages/Searchresults/SearchResults";
import SignupPage from "../pages/SignupPage/SignUpPage";
import {
	HOME,
	SEARCH,
	LOGIN,
	SIGNUP,
	DETAIL,
	ADVANCEDSEARCH,
} from "./constants";
import AdvancedSearch from "../pages/AdvancedSearch/AdvancedSearch";
const RouteConfig = () => {
	return (
		<Routes>
			<Route path={LOGIN} element={<LoginPage />} />
			<Route path={SIGNUP} element={<SignupPage />} />
			<Route path={HOME} element={<HomePage />} />
			<Route path={SEARCH} element={<SearchResults />}></Route>
			<Route path={DETAIL} element={<DetailPage />} />
			<Route path={ADVANCEDSEARCH} element={<AdvancedSearch />} />
		</Routes>
	);
};

export default RouteConfig;
