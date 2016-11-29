import React from 'react';

const Header = React.createClass ({
	render() {
		return (
			<header className="row">
				<div className="col-xs-12">
					<div className="b-logo">
						<a href="index.html">Portfolio on React</a>
					</div>
				</div>
			</header>
		)
	}
});

export default Header;