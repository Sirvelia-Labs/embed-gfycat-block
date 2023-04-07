/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Inspector from "./inspector";
import Controls from "./controls";
import icons from "./icons";
import attributes from "./attributes";

import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	attributes,
	icon: {
		src: icons.block
	},
	edit: props => {
		const {
			attributes: { blockAlignment },
			className, setAttributes
		} = props;

		return [
			<Inspector key="gfycat-inspector" {...{ setAttributes, ...props }} />,
			<Controls key="gfycat-controls" {...{ setAttributes, ...props }} />,
			<Edit key="gfycat-edit" {...{ setAttributes, ...props }} />
		];
	},

	save: props => {
		const { gifURL, gifName, gifWidth } = props.attributes;
		return (
		  <div>
			<img
			  src={ gifURL }
			  alt={ gifName }
			  width={ gifWidth }
			/>
			<p>{ gifName }</p>
		  </div>
		);
	}
} );
