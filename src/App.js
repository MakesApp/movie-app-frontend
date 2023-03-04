import { useEffect } from "react";
import * as S from "./App.styles.js";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import RouteConfig from "./routes/RouteConfig";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./services/redux/userSlice.js";
function App() {
	const dispatch = useDispatch();
	const fetchAuthUser = () => {
		axios
			.get(process.env.REACT_APP_BASE_URL + "api/auth/user", {
				withCredentials: true,
			})
			.then((data) => dispatch(setUser(data.data)))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchAuthUser();
	}, []);
	return (
		<S.Container>
			<Header />
			<RouteConfig />
			<Footer />
		</S.Container>
	);
}

export default App;
