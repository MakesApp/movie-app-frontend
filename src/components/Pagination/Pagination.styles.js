import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageLink = styled(Link)`
	color: ${(props) => (props.isselected ==='true'? "red" : "blue")};
`;
