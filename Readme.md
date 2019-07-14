![NpmLicense](https://img.shields.io/npm/l/binary-markup.svg) ![npm](https://img.shields.io/npm/v/binary-markup.svg) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<p align="center">
  <h3 align="center">Heroes of Might and Magic III parsers</h3>

  <p align="center">
    Collection of parsers that are are able to read different binary files associated with Heroes of Might and Magic III
    <br />
    <a href="https://github.com/srg-kostyrko/homm3-parser"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/srg-kostyrko/homm3-parser/issues">Report Bug</a>
    ·
    <a href="https://github.com/srg-kostyrko/homm3-parser/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

The project was born as I was working on online map viewer for Heroes of Might and Magic III.
The main idea was to make it easy t parse different binary respources needed for that in node and browser.

Current focus is on `h3m` files, with rudimentary support for `lod`, `def` and `pcx`.

### Built With

- [BML](https://www.npmjs.com/package/binary-markup)

<!-- GETTING STARTED -->

## Getting Started

### Installation

User `npm`

```sh
npm install --save homm3-parsers
```

or `yarn`

```sh
yarn add homm3-parsers
```

<!-- USAGE EXAMPLES -->

## Usage

Parsing h3m files

```javascript
const fs = require('fs');
const { parseH3MFile } = require('homm3-parsers')

async function parse(path) => {
  const file = await fs.promises.readFile(path)
  return = parseH3MFile(file)
}
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Sergii Kostyrko - srg.kostyrko@gmail.com

Project Link: [https://github.com/srg-kostyrko/homm3-parser](https://github.com/srg-kostyrko/homm3-parser)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [homm3tools](https://github.com/potmdehex/homm3tools)
- [https://github.com/josch/lodextract](https://github.com/josch/lodextract)
