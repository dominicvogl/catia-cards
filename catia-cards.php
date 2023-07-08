<?php
/**
 * Plugin Name:       Cards Listing and single Cards
 * Description:       Create a list of cards with special design functions
 * Requires at least: 5.7
 * Requires PHP:      7.4
 * Version:           1.0.0 (alpha)
 * Author:            Dominic Vogl
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boilerplate
 *
 * @package           catia-cards
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

class Catia_Cards_List {

	private $blockName;

	public function __construct() {

		$this->blockName = 'catia/cards';

		add_action( 'init', array($this, 'block_init') );
		// add_action( 'enqueue_block_assets', array($this, 'post_enqueue') );
	}

	/**
	 * @return void
	 * @deprecated
	 */
	public function post_enqueue() {
		if ( has_block( $this->blockName ) ) {
			wp_enqueue_script( 'swiper', plugins_url( 'lib/swiper.js', __FILE__ ), '', '', true );
			wp_enqueue_script( $this->blockName . 'initswiper', plugins_url( 'lib/init.js', __FILE__ ), '', '', true );
		}
	}

	public function block_init() {
		register_block_type_from_metadata( __DIR__, [
			'render_callback' => array($this, 'block_render_callback'),
		]);
	}

}

new Catia_Cards_List();
