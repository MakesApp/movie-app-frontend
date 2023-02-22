import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import { HeaderDiv } from "./styles.header";
const Header = () => {
	return (
		<HeaderDiv>
			<Navbar />
			<SearchBar />
		</HeaderDiv>
	);
};

export default Header;
