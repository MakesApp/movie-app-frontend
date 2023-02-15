import { useParams } from "react-router";
import Pagination from "./components/Pagination/Pagination";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import RouteConfig from "./routes/RouteConfig";

function App() {
	let { page } = useParams();
	return (
		<>
			<Header />
			<RouteConfig />
			<Footer />
		</>
	);
}

export default App;
