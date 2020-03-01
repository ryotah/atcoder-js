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

### Optional

If you are using Visual Studio Code, copy `.vscode/settings.json.example` and rename to `.vscode/settings.json` to enable [`eslint.autoFixOnSave`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Usage example

```sh
$ node examples/sort/index.js < examples/sort/input.txt
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
$ mkdir abc-123
$ npm run new abc-123/A
> cp -R examples/sort "abc-123/A"
```

### Run your code

```sh
$ DIR=abc-123/A npm run exec
```

This is the same as `node abc-123/A/index.js < abc-123/A/input.txt`.

## Contributing

Pull requests are welcome.

## License

This project is an MIT-licensed open source project. See [LICENSE](./LICENSE) for more information.

## Acknowledgments

- https://book.mynavi.jp/support/pc/5295/
- [AIZU ONLINE JUDGE: Programming Challenge](http://judge.u-aizu.ac.jp/onlinejudge/)
- [A template to make good README.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
