# RAV - Random Array Value

This package can be used to randomly select values from an array.

## Installation

Use the package manager [npm](https://www.npmjs.org/) to install RAV

`npm i rav --save`

## Usage

```javascript
const rav = require('rav');

// returns 123, 456 or 789
rav.simple( [ '123', '456', '789' ] );

// Example array
const exampleArray = [ '123', '456', '789' ];

// returns 123, 456 or 789
rav.simple( exampleArray )
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)