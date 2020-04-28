<?php

namespace Sirvelia\GfycatBlock;

add_filter( 'block_categories', __NAMESPACE__ . '\create_sirvelia_blocks_category', 10, 2);

/**
 * Create Sirvelia Blocks category
 */
function create_sirvelia_blocks_category( $categories ) {
	$category_slugs = wp_list_pluck( $categories, 'slug' );
  return in_array( 'sirvelia-blocks', $category_slugs, true ) ? $categories : array_merge(
    $categories,
    array(
        array(
            'slug'  => 'sirvelia-blocks',
            'title' => __( 'Sirvelia Blocks', 'sirvelia-blocks' ),
            'icon'  => null,
        ),
    )
	);
}
