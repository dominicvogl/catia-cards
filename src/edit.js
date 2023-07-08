import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit(  { attributes, setAttributes } ) {
	const { checkWithNumbers, layout } = attributes;

	const onChangeCheckWithNumbers = (newCheckWithNumbers) => {
		setAttributes({ checkWithNumbers: newCheckWithNumbers });
	};

	const onChangeLayout = (newLayout) => {
		setAttributes({ layout: newLayout });
	}

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Card Settings', 'text-box' ) }
					icon="screenoptions"
					initialOpen
				>
					<ToggleControl
						label="Nummerierung anzeigen"
						checked={ checkWithNumbers }
						onChange={ onChangeCheckWithNumbers }
					/>
					<SelectControl
						label="Layout auswählen"
						value={ layout } // The value should be the current selected layout
						options={ [
							{ label: 'Grid', value: 'grid' },
							{ label: 'Vertical', value: 'vertical' },
							{ label: 'Horizontal', value: 'horizontal' },
						] }
						onChange={ onChangeLayout }
					/>
				</PanelBody>
			</InspectorControls>

			<section {...useBlockProps({ className: `layout-${layout}` })}>
				{
					checkWithNumbers ? (
						<ol className="card-list with-numbers">
							<InnerBlocks
								allowedBlocks={['catia/card']}
								template={[
									[
										'catia/card'
									],
									[
										'catia/card'
									]
								]}
							/>
						</ol>
					) : (
						<ul className="card-list">
							<InnerBlocks
								allowedBlocks={['catia/card']}
								template={[
									[
										'catia/card'
									],
									[
										'catia/card'
									]
								]}
							/>
						</ul>
					)
				}

			</section>
		</>

	);
}
