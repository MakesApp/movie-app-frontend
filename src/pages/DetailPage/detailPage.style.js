import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	max-width: 1200px;
	@media screen and (max-width: 1200px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding: 0;
	margin: 0 auto;
	background: #0a2647;
	border-radius: 0.65rem;

	.leftSide {
		padding: 1rem;
		flex: 1 0 58%;
		color: #fff;
	}

	.rightSide {
		flex: 1 0 39%;
		height: 100%;
	}

	@media (max-width: 768px) {
		flex-direction: column-reverse;
		.leftSide {
			padding: 1rem;
			flex: 1 0 58%;
			color: #fff;
		}

		.rightSide {
			flex: 1 0 39%;
			height: 100%;
		}
	}
`;
export const Poster = styled.img`
	display: block;
	margin: 1rem;
	width: calc(100% - 2rem);
	box-shadow: 0 0 8px 2px #4e5d6e;
	border-radius: 0.65rem;
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: 32px;
	margin: 5px 0 10px;
`;

export const InfoP = styled.p`
	font-size: 18px;
`;
