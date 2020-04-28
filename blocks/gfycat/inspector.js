/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blockEditor;

const {
  PanelBody,
  PanelRow,
  TextControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        gifWidth
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>

        <PanelBody>
          <TextControl
            label={__("Width", "sirvelia-blocks")}
            help={__("Limit gif width", "sirvelia-blocks")}
            value={gifWidth}
            onChange={gifWidth => setAttributes({ gifWidth })}
          />
        </PanelBody>

      </InspectorControls>
    );
  }
}
