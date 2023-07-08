import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit.js';
import Save from './save.js';

registerBlockType('catia/card', {
	title: __('Card', 'catia-card'),
	description: __('Single Card for the Card List', 'catia-card'),
	icon: 'id',
	parent: ['catia/cards'],
	supports: {
		reusable: false,
		html: false,
	},
	edit: Edit,
	save: Save,
});
