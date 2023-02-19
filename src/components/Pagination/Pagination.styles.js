import styled from "styled-components";

const PageLink = styled(Link)`
	color: ${(props) => (props.isSelected ? "red" : "blue")}
`;
export default PageLink
