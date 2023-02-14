const minSize = {
	mobileS: "320px",
	mobileL: "481px",
	tablet: "768px",
	laptop: "1025px",
	desktop: "1281px",
};

const maxSize = {
	mobileS: "480px",
	mobileL: "767px",
	tablet: "1024px",
	laptop: "1280px",
};

export const device = {
	mobileS: `(min-width: ${minSize.mobileS}) (max-width: ${maxSize.mobileS})`,
	mobileL: `(min-width: ${minSize.mobileL}) (max-width: ${maxSize.mobileL} `,
	tablet: `(min-width: ${minSize.tablet} (max-width: ${maxSize.tablet})`,
	laptop: `(min-width: ${minSize.laptop} (max-width: ${maxSize.laptop})`,
	desktop: `(min-width: ${minSize.desktop})`,
};
