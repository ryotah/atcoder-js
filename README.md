# AtCoder with JavaScript (Node.js)

This repogitory is a JavaScript (Node.js) coding environment for https://atcoder.jp/. You can try your code here at first, and then submit your answer to AtCoder.

## Getting Started

### Prerequisites

- Node.js v5.12.0
  - We recommend installing Node.js with [nodenv](https://github.com/nodenv/nodenv). And we prepared `.node-version` for `nodenv`.

### Installing

```sh
$ npm install
```

## Usage example

```sh
$ node examples/index.js < examples/input.txt
5
2
3 
---
2
3
5
```

## Command Reference

### Create a new template

```sh
$ npm run new abc-`date '+%Y%m%d%H%M%S'`
> cp -R examples "abc-20191209180605"
```

### Run your code

```sh
$ TARGET=abc-20191209180605 npm run try
```

This is the same as `node abc-20191209180605/index.js < abc-201912
09180605/input.txt`.

## Contributing

Pull requests are welcome.

## License

This project is an MIT-licensed open source project. See [LICENSE](./LICENSE) for more information.