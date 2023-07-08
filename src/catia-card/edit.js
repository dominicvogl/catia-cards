import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Edit = () => {

	return (
		<li {...useBlockProps()}>
			<InnerBlocks template={[
				['core/heading', { placeholder: 'Auf Fachkräftemangel' }],
				['core/paragraph', { placeholder: 'Schwierigkeiten erfolgreich gutes Personal zu rekrutieren oder Auszubildende zu finden' }],
			]}/>
		</li>
	);
};
export default Edit;
