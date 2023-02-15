import * as S from "./App.styles.js";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import RouteConfig from "./routes/RouteConfig";

function App() {
	return (
		<S.Container>
			<Header />
			<RouteConfig />
			<Footer />
		</S.Container>
	);
}

export default App;
