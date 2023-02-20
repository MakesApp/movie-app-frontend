import styled from "styled-components";

export const PageLink = styled(Link)`
	color: ${(props) => (props.isSelected ? "red" : "blue")};
`;
