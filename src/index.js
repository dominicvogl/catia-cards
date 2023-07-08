import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import './catia-card';

registerBlockType('catia/cards', {
	edit: Edit,
	save,
});
