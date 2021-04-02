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

// SearchBar component 
// props passed to the component: keyword and setKeyword. 
// keyword variable is assigned to the value of the input 
// setKeyword variable is assigned as a function to handle the change event of the input. 
// These variables are initiated in the parent component (SearchPage.js) 
// which makes the SearcBar.Js just act as a “tool” 
// to read and change the keyword value in the SearchPage.js
