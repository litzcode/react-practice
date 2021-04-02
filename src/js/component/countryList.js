import React from "react";
import PropTypes from "prop-types";

const CountryList = ({ countryList = [] }) => {
	return (
		<>
			{countryList.map((data, index) => {
				if (data) {
					return (
						<div key={data.name}>
							<h1>{data.name}</h1>
						</div>
					);
				}

				return null;
			})}
		</>
	);
};

CountryList.propTypes = {
	countryList: PropTypes.array
};

export default CountryList;

// This component shows the list of the country. 
// In essence, this component is just a mapping of the countryList variable, 
// displaying simple div tag containing an h1 tag describing the name of the country. 
// The main role of this component is just to render all of the country list 
// that are passed into it via the countryList props.
