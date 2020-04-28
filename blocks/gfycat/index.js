/**
 * Block dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Controls from "./controls";
import Edit from './edit';
import icons from "./icons";
import attributes from "./attributes";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register Private block
 */
export default registerBlockType(
  "sirvelia-blocks/gfycat", {
  title: __("Gfycat", "sirvelia-blocks"),
  description: __(
    "Search and show gfycat gifs.",
    "sirvelia-blocks"
  ),
  category: "sirvelia-blocks",
  icon: {
    background: "#272d44",
    src: icons.block
  },
  keywords: [
    __("Gfycat", "sirvelia-blocks"),
    __("Animated Gifs", "sirvelia-blocks"),
    __("Meme", "sirvelia-blocks")
  ],
  attributes,
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
});
