import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Navigation from './components/Navigation';

const App = React.createClass({
	render() {
		return (
			<div>
				<Navigation/>
				{this.props.children}
			</div>
		)
	}
});

const GalleryComp = React.createClass({
	render() {
		return (
			<Gallery data={imgArr}/>
		)
	}
});

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path='/About' component={About}/>
			<Route path='/Gallery' component={GalleryComp}/>
			<Route path='/Contacts' component={Contacts}/>
		</Route>
		<Footer/>
	</Router>, document.getElementById('showme')
);