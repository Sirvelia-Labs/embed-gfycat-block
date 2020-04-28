/**
 * Internal block libraries
 */
import icons from "./icons";
import './editor.scss';

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    TextControl,
    Button
} = wp.components;


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const {
            attributes: { gifName, gifURL, gifList, gifWidth },
            className, setAttributes, isSelected
        } = this.props;

        const searchGfycat = keywords => {
          setAttributes( {'gifList': []} );
          let url = 'https://api.gfycat.com/v1/gfycats/search?count=24&search_text=' + encodeURIComponent(keywords);
          jQuery.getJSON(url, function(result) {
            setAttributes( {'gifList': result.gfycats} );
          });
      	};

        const setGifImage = imageUrl => {
          setAttributes( {
            'gifURL': imageUrl,
            'gifList': []
          } );
      	};

        const onRemoveGif = () => {
            setAttributes({
                gifURL: null,
                gifName: null,
                gifList: null,
            });
        }

        let gallery = '';

        return (
          <div className={ className }>

            { ! gifURL ? (

              <div>

                <TextControl
                    label={ __( 'Search gif...', 'sirvelia-blocks' ) }
                    help={ __( 'Browse Gyfcat gifs', 'sirvelia-blocks' ) }
                    onChange={keywords => searchGfycat(keywords)}
                />

                { gifList ? (
                    <div>
                      { gallery = gifList.map(
                        (row, index) =>
                        <Button className="select-image" onClick={ () => setGifImage(row.gifUrl) }>
                            <img src={row.gifUrl} title={row.gfyName} />
                        </Button>
                      )}
                    </div>
                ): null }

              </div>

            ) : (

                <div className="image-wrapper">
                    <img
                        src={ gifURL }
                        alt={ gifName }
                        width={ gifWidth }
                    />

                    { isSelected ? (
                      <span>
                        <Button
                            className="remove-image"
                            onClick={ onRemoveGif }
                        >
                            { icons.remove }
                        </Button>

                        <TextControl
                            placeholder={ __( 'Gif title', 'sirvelia-blocks' ) }
                            value={gifName}
                            onChange={gifName => setAttributes({ gifName })}
                        />
                      </span>

                    ) : <p>{gifName}</p> }



                </div>

            )}

          </div>

        );
    }
}
