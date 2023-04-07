/**
 * Internal block libraries
 */
import {
    BlockControls,
    BlockAlignmentToolbar,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

/**
 * Create a Block Controls wrapper Component
 */
export default function Control( { attributes, setAttributes } ) {
  return(
    <BlockControls>
        <BlockAlignmentToolbar
            value={ attributes.blockAlignment }
            onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
        />
    </BlockControls>
  )
}