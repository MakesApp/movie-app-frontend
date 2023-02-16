import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	@media screen and (max-width: 1200px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  
`;
export const Poster = styled.img`
	margin: 10px;
	max-width: 180px;
	height: auto;
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 10px;
`;
export const Year = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 15px;
`;

export const Genre = styled.h1`
	font-size: 40px;
	font-weight: bold;
`;
export const Director = styled.p`
	font-size: 1.5rem;
	padding: 2rem;
`;
export const Writers = styled.p`
	font-size: 1.5rem;
	padding: 2rem;
`;
export const RunTime = styled.div`
	margin-bottom: 2rem;
	font-size: 3rem;
`;

export const Plot = styled.div`
	width: 80%;
	padding: 2rem;
	align-self: flex-start;
`;
export const TagLine = styled.div`
	margin-bottom: 2rem;
	font-size: 3rem;
`;
export const Language = styled.h1`
	font-size: 24px;
	font-weight: bold;
`;
