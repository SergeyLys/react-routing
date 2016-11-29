import React from 'react';

const Footer = React.createClass ({
	scrollUp() {
		$('body').animate({
			scrollTop: 0
		})
	},

	render() {
		return (
			<footer>
				<p className="bottom-text" onClick={this.scrollUp}>Ты достиг дна</p>
			</footer>
		)
	}
});

export default Footer;