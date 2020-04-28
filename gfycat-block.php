<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Sirvelia\GfycatBlock
 * @author      Sirvelia
 * @license     GPL-3
 *
 * @wordpress-plugin
 * Plugin Name: Gfycat Block
 * Plugin URI:  https://github.com/Sirvelia/gfycat-block
 * Description: Gfycat Block for Gutenberg
 * Version:     1.0.0
 * Author:      Sirvelia
 * Author URI:  https://sirvelia.com/
 * Text Domain: sirvelia-blocks
 * Domain Path: /languages
 * License:     GPL-3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace Sirvelia\GfycatBlock;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register category
//include __DIR__ . '/lib/create-category.php';

// Register meta boxes
//include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
//include __DIR__ . '/lib/block-templates.php';



/*************
BLOCK SPECIFIC PHP
*************/


// Dynamic Blocks
//include __DIR__ . '/blocks/12-dynamic/index.php';
