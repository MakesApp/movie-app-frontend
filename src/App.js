import { useEffect } from "react";
import * as S from "./App.styles.js";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import RouteConfig from "./routes/RouteConfig";
import { useDispatch } from "react-redux";
import { fetchUser } from "./services/redux/userSlice.js";
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);
	return (
		<S.Container>
			<Header />
			<RouteConfig />
			<Footer />
		</S.Container>
	);
}

export default App;
