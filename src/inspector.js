/**
 * Internal block libraries
 */
import { __ } from '@wordpress/i18n';

import { InspectorControls } from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	PanelRow
} from '@wordpress/components';

/**
 * Create an Inspector Controls wrapper Component
 */
export default function Inspector( { attributes, setAttributes } ) {
  return(
    <InspectorControls>
      <PanelBody title="Gif Settings" initialOpen={ true }>
        <PanelRow>
          <TextControl
            label={ __("Width", "sirvelia-blocks") }
            help={ __("Limit gif width", "sirvelia-blocks") }
            value={ attributes.gifWidth }
            onChange={ ( gifWidth ) => setAttributes({ gifWidth })}
          />
        </PanelRow>
        <PanelRow>
          <TextControl
            placeholder={ __( 'Gif title', 'sirvelia-blocks' ) }
            value={ attributes.gifName }
            onChange={ ( gifName ) => setAttributes({ gifName })}
          />
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  )
}
