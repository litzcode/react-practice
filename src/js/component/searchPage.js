import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar.js";
import CountryList from "./countryList.js";

const SearchPage = props => {
	const [input, setInput] = useState("");
	const [countryListDefault, setCountryListDefault] = useState();
	const [countryList, setCountryList] = useState();

	const fetchData = async () => {
		return await fetch("https://restcountries.eu/rest/v2/all")
			.then(response => response.json())
			.then(data => {
				setCountryList(data);
				setCountryListDefault(data);
			});
	};

	const updateInput = async input => {
		const filtered = countryListDefault.filter(country => {
			return country.name.toLowerCase().includes(input.toLowerCase());
		});
		setInput(input);
		setCountryList(filtered);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<h1>Country List</h1>

			<SearchBar input={input} onChange={updateInput} />

			<CountryList countryList={countryList} />
		</>
	);
};
export default SearchPage;


// This component is the parent component of SearchBar.js and the CountryList.js. 
// The functions of this component are to bind those two component 
// and orchestrating the rendered data as well as the searched keyword.

// First, the data is fetched through the API URL. 
// After that we keep the data within two variables: countryList and countryListDefault. 
// This function is operated by the fetchData constant, initiated within the react useEffect feature.

// Next, we create a function to handle the keyword change and filtering the country list. 
// The function is contained in the updateInput constant. 
// What we actually do in this function is capturing and adjusting 
// the keyword typed in the SearchBar so that the keyword can be displayed 
// accordingly in the SearchBar while almost simultaneously 
// update the list of the country data that is passed as props to the CountryList Component. 
// This process is done by receiving the input argument and 
// use it to filter the list of country data in the countryListDefault variable. 

// The filtering process makes use of the includes operator of javascript array method. 
// Next, we use this filtered data to update the content of Input variable. 
// This way the value showed by the SearchBar will always be updated whenever the input (keyword) is changed. 
// At the same time we also update the list of country data with 
// that filtered data so that the data passed to the CountryList component is 
// always updated according to the filtered country list. 
// This is done by invoking setCountryList function using filtered variable as argument. 
// This mechanism ensures that the CountryList component always shows the list of countries 
// that have been filtered by the keyword typed in the SearchBar Component.

// Finally, we pass the input & updateInput variables as props to the SearchBar component. 
// We also pass the countryList variable as props to the CountryList component.
