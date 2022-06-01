import React from 'react';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaucet } from '@fortawesome/free-solid-svg-icons';

export interface SocialProps {
	social: any;
}

function SocialLink({ provider }: any) {
	// console.log(provider);
	const buttonProps = {
		provider: provider,
	};
	return (
		<>
			<a
				href={`http://localhost:1337/connect/${provider}`}
				className="link-connect"
			>
				<Button type="button" {...buttonProps}>
					{provider}
					{/* <FontAwesomeIcon icon={faFaucet} /> */}
					<i
						className={`fab fa-${provider} `}
						style={{ marginLeft: '5px' }}
					/>
				</Button>
			</a>
		</>
	);
}

SocialLink.propTypes = {
	provider: PropTypes.string.isRequired,
};

export default SocialLink;
