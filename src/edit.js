/**
 * Internal block libraries
 */
import icons from "./icons";
import './editor.scss';

import {
	useBlockProps,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import {
	TextControl,
	Button
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes, className, isSelected }) {

	const blockProps = useBlockProps();

	const searchGfycat = keywords => {
		setAttributes({ 'gifList': [] });

		let url = 'https://api.gfycat.com/v1/gfycats/search?count=24&search_text=' + encodeURIComponent(keywords);

		jQuery.getJSON(url, function (result) {
			setAttributes({
				'gifList': result.gfycats
			});
		});
	};

	const setGifImage = imageUrl => {
		setAttributes({
			'gifURL': imageUrl,
			'gifList': []
		});
	};

	const onRemoveGif = () => {
		setAttributes({
			'gifURL': null,
			'gifName': null,
			'gifList': null,
		});
	}

	let gallery = '';

	return (
		<div className={className} {...blockProps}>

			{!attributes.gifURL ? (

				<div>

					<TextControl
						label={__('Search gif...', 'sirvelia-blocks')}
						help={__('Browse Gyfcat gifs', 'sirvelia-blocks')}
						onChange={(keywords) => searchGfycat(keywords)}
					/>

					{attributes.gifList ? (
						<div>
							{gallery = attributes.gifList.map(
								(row, index) =>
									<Button className="select-image" onClick={() => setGifImage(row.gifUrl)}>
										<img src={row.gifUrl} title={row.gfyName} />
									</Button>
							)}
						</div>
					) : null}

				</div>

			) : (

				<div className="image-wrapper">
					<img
						src={attributes.gifURL}
						alt={attributes.gifName}
						width={attributes.gifWidth}
					/>

					{isSelected ? (
						<span>
							<Button
								className="remove-image"
								onClick={onRemoveGif}
							>
								{icons.remove}
							</Button>

							<TextControl
								placeholder={__('Gif title', 'sirvelia-blocks')}
								value={attributes.gifName}
								onChange={(gifName) => setAttributes({ gifName })}
							/>
						</span>

					) : <p>{attributes.gifName}</p>}



				</div>

			)}

		</div>
	)

}