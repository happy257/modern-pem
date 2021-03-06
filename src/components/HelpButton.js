
import React from 'react';
import { Button } from '@material-ui/core';

import helpIcon from "../assets/icons/info.svg"

export default function HelpButton({ helpId, message, onPress }) {
	return (
		<Button data-help={helpId} style={{ padding: '3px 10px', textAlign: 'left' }} onClick={() => onPress(helpId)}>
			<img alt="help" src={helpIcon} style={{ color: "#efefef", width: '16px', marginRight: '5px' }} />{message}
		</Button>
	)
}