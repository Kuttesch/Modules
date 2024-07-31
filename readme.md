# JavaScript Modules

This repository aims to provide a collection of small JavaScript modules that can be used in web development projects. Each module is designed to perform a specific task or provide a specific feature, making it easy to add functionality to a website without having to write a lot of code.

## Table of Contents

- [JavaScript Modules](#javascript-modules)
  - [Table of Contents](#table-of-contents)
  - [Current Modules](#current-modules)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Current Modules

Currently, the following modules are available in this repository:

- [Swinging Loader](./modules/SwingingLoader.js) - A simple loader animation that swings back and forth. It can be used to indicate that content is loading on a website.

## Usage

To use the modules in your own project, simply copy the desired module into your module folder and import it into your JavaScript file. For example, to use the Swinging Loader module, you would do the following:

```javascript
import {SwingingLoader} from './modules/SwingingLoader.js';
```
and then use it according to the documentation provided in the module file. For example:

```javascript
SwingingLoader(20,'loader-container','#000000',50,90,3);
```

## Contributing

Feel free to contribute to this repository. If you have a button design you would like to share, simply create a new folder in the repository and add your HTML file and any other necessary files.
Than create a pull request. I will review the request and merge it if it fits the repository.

## License

This project is licensed under the MIT License.