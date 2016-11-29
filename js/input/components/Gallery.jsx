import React from 'react';
import Masonry from 'react-masonry-component';

var masonryOptions = {
	itemSelector: '.grid__item',
	columnWidth: '.grid__item'
};

export default React.createClass ({
	getInitialState() {
		return {
			currentYearId: this.props.data[0]
		}
	},

	showYear(event) {
		this.setState({currentYearId: this.props.data[event.target.id]});
	},

	render() {

		const masonryElements = this.state.currentYearId.list.map(function(item, index) {
			return (
				<article className="grid__item col-md-2 col-sm-5 col-xs-10" key={index}>
					<img src={item.src} alt=""/>
				</article>
			)
		});

		return (
			<main className="row site-main">
				<div className="aside-list">
					<ul className='year-list'>
						{this.props.data.map(function(index,item) {
							return (
								<li key={item}>
									<span
										id={index.id}
										onClick={this.showYear}
										>
										{index.name}
									</span>
								</li>
								)
							}, this)
						}
					</ul>
				</div>

				<Masonry
						className={'grid'}
						options={masonryOptions}
				>
					{masonryElements}
				</Masonry>

			</main>
		)
	}
});

