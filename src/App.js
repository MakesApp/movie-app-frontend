import * as S from "./App.styles.js";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import RouteConfig from "./routes/RouteConfig";
import LoginPage from "./pages/Loginpage/LoginPage";
import SignupPage from "./pages/SignupPage/SignUpPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<S.Container>
			<Header />
			<RouteConfig />
			<Routes>
				<Route path='/LoginPage' element={<LoginPage />} />
				<Route path='/SignupPage' element={<SignupPage />} />
			</Routes>
			<Footer />
		</S.Container>
	);
}

export default App;
