import React from 'react';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';
import Button from '../Button';
export interface SocialProps {
	social: any;
}

function SocialLink({ provider }: any) {
	// console.log(provider);
	const buttonProps = {
		provider: provider,
	};
	return (
		<a href={`http://localhost:1337/connect/${provider}`} className="link">
			<Button type="button" {...buttonProps}>
				{provider}
				<i
					className={`fab fa-${provider} `}
					style={{ marginLeft: '5px' }}
				/>
			</Button>
		</a>
	);
}

SocialLink.propTypes = {
	provider: PropTypes.string.isRequired,
};

export default SocialLink;
