const attributes = {
  gifURL: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: 'img',
  },
  gifName: {
      type: 'string',
      source: 'text',
      selector: 'p',
  },
  blockAlignment: {
    type: 'string'
  },
  gifList: {
    type: 'array'
  },
  gifWidth: {
    type: 'string',
    default: 'auto'
  },
};

export default attributes;
