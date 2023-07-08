import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { checkWithNumbers, layout } = attributes;

	return (
		<section {...useBlockProps.save({ className: `layout-${layout}` })}>
			{
				checkWithNumbers ? (
					<ol className="card-list with-numbers">
						<InnerBlocks.Content />
					</ol>
				) : (
					<ul className="card-list">
						<InnerBlocks.Content />
					</ul>
				)
			}
		</section>
	);
}
