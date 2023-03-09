import * as S from "./ComedianCard.styles";

const ComedianCard = ({ comedian }) => {
	return (
		<S.Container>
			<S.Image src={comedian.image} alt={comedian.name} />
			<S.Details>
				<S.Title>
					<S.Rank>{comedian.rank}</S.Rank>
					<S.Name>{comedian.name}</S.Name>
				</S.Title>
				<S.Role>{comedian.role}</S.Role>
				<S.Description>{comedian.description}</S.Description>
			</S.Details>
		</S.Container>
	);
};

export default ComedianCard;
