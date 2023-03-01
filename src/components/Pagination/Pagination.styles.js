import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 1% auto;
`;
export const Icon = styled.i`
	color: whitesmoke;
	font-size: 1.3rem;
`;

export const PageLink = styled(Link)`
color: ${(props) => (props.isselected ==='true'? "red" : "blue")};

	padding: 0 10%;
	text-decoration: none;
	font-size: 1.3rem;
`;
