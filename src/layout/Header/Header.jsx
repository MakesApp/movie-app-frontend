import Navbar from "./components/Navbar/Navbar";
// import SearchBar from "./components/SearchBar/SearchBar";
import * as S from "./Header.styles";
const Header = () => {
	return (
		<S.Container>
			<Navbar />
			{/* <SearchBar /> */}
		</S.Container>
	);
};

export default Header;
