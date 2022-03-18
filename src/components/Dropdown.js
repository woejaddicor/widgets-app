import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener('click', onBodyClick, {
				capture: true,
			});
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => onSelectedChange(option)}
			>
				{option.label}
			</div>
		);
	});
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i
						style={{ color: `${selected.value}` }}
						className="dropdown icon"
					></i>
					<div style={{ color: `${selected.value}` }} className="text">
						{selected.label}
					</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
			<div>
				{/* <h3 style={{ color: `${selected.value}` }}>Hello World!</h3> */}
			</div>
		</div>
	);
};

export default Dropdown;
