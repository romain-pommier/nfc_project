import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import cn from 'classnames';

import './styles.css';

function Button(props: any) {
	const buttonProps = Object.assign({}, props);
	const propsToDelete = ['primary', 'social'];

	propsToDelete.map((value) => delete buttonProps[value]);

	const label =
		!isEmpty(props.label) && !props.children ? (
			<span>{props.label}</span>
		) : (
			props.children
		);

	return (
		<button
			className={cn(
				'',
				'btn',
				props.primary && 'primary',
				props.provider === 'facebook' && 'primary',
				props.provider === 'github' && 'github',
				props.provider === 'google' && 'google',
				props.provider === 'twitter' && 'twitter'
			)}
			type={props.type || 'button'}
			{...buttonProps}
		>
			{label}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.any,
	label: PropTypes.string,
	primary: PropTypes.bool,
	type: PropTypes.string,
};

export default Button;
