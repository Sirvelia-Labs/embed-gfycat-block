<?php
/**
 * Plugin Name:       Embed Gfycat Block
 * Plugin URI:        https://github.com/Sirvelia-Labs/embed-gfycat-block
 * Description:       Gfycat Block for Gutenberg
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Version:           1.1.0
 * Author:      Sirvelia
 * Author URI:  https://sirvelia.com/
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       sirvelia-blocks
 * Domain Path:       /languages
 *
 * @package     Sirvelia\GfycatBlock
 * @author      Sirvelia
 * @license     GPL-3
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function embed_gfycat_embed_gfycat_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'embed_gfycat_embed_gfycat_block_block_init' );

// Enqueue JS and CSS
//include __DIR__ . '/lib/enqueue-scripts.php';
