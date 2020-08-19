import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';

class App extends React.Component {
	onSearchSubmit(term) {
		console.log(term);
		axios
			.get('https://api.unsplash.com/search/photos', {
				params: {query: term},
				headers: {
					Authorization:
						'Client-ID sEFBEifh1jraAb6ZF6yKLPiJmhHUUdQxVxaz0FMD0Ug',
				},
			})
			.then((response) => {
				console.log(response.data.result);
			});
	}
	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}
export default App;
