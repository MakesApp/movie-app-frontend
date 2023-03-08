import { Navigate, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/Homepage/HomePage";
import LoginPage from "../pages/Loginpage/LoginPage";
import SearchResults from "../pages/Searchresults/SearchResults";
import SignupPage from "../pages/SignupPage/SignUpPage";
import { HOME, SEARCH, LOGIN, SIGNUP, DETAIL, WATCH } from "./constants";
import WatchLater from "../pages/WatchLater/WatchLater";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
const RouteConfig = () => {
	const user = useSelector((state) => state.userSlice);
	return (
		<Routes>
			<Route
				path={LOGIN}
				element={user ? <Navigate replace to={HOME} /> : <LoginPage />}
			/>
			<Route path={SIGNUP} element={<SignupPage />} />
			<Route path={HOME} element={<HomePage />} />
			<Route path={SEARCH} element={<SearchResults />}></Route>
			<Route path={DETAIL} element={<DetailPage />} />
			<Route
				path={WATCH}
				element={
					<ProtectedRoute>
						<WatchLater />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
};

export default RouteConfig;
