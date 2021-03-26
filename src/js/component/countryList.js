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
