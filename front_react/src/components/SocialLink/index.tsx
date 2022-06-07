import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
// import Icons from '@material-ui/icons';

export interface SocialProps {
	social: any;
}

function SocialLink({ provider }: any) {
	const buttonProps = {
		provider: provider,
	};

	return (
		<>
			<a
				href={`http://localhost:1337/api/connect/${provider}`}
				className="link-connect"
			>
				<Button type="button" {...buttonProps}>
					{provider}
					<Icon
						sx={{ marginLeft: '10px' }}
						baseClassName="fas"
						className={`fab fa-${provider}`}
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
