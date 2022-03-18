import React from 'react';

const Link = ({ className, href, children }) => {
	const onClick = (e) => {
		if (e.metaKey || e.ctrlKey) {
			return;
		}

		e.preventDefault();
		window.history.pushState({}, '', href);
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<a
			style={{
				fontWeight: 'bold',
				margin: 10,
				top: '50%',
				left: '35%',
				fontSize: 18,
				color: 'black',
				border: '2px solid #F44B2A',
				borderRadius: 5,
				backgroundColor: '#F66C51',
			}}
			onClick={onClick}
			className={className}
			href={href}
		>
			{children}
		</a>
	);
};

export default Link;
