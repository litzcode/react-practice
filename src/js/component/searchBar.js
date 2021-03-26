import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
	const BarStyling = {
		width: "20rem",
		background: "#F2F1F9",
		border: "none",
		padding: "0.5rem"
	};

	return (
		<input
			style={BarStyling}
			key="random1"
			value={keyword}
			placeholde={"search country"}
			onChange={e => setKeyword(e.target.value)}
		/>
	);
};

SearchBar.propTypes = {
	input: PropTypes.string,
	onChange: PropTypes.func
};

export default SearchBar;
