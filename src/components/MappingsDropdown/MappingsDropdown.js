import React from 'react';
import { object } from 'prop-types';
import { Popover } from 'antd';

import JsonView from '../JsonView';
import MappingsIcon from '../MappingsIcon';

const MappingsDropdown = ({ mapping }) => (
	<Popover
		content={
			<div
				style={{
					maxHeight: '400px',
					maxWidth: '300px',
					overflow: 'auto',
				}}
			>
				<JsonView json={mapping} />
			</div>
		}
		trigger="click"
	>
		<MappingsIcon mapping={mapping} />
	</Popover>
);

MappingsDropdown.propTypes = {
	mapping: object.isRequired,
};

export default MappingsDropdown;