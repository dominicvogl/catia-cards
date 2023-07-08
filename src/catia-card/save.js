import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';
const Save = () => {

	return (
		<li {...useBlockProps.save()}>
			<InnerBlocks.Content />
		</li>
	);
};

export default Save;
