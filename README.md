<h1 align="center">

Pinterest Board Scrapper

</h1> 


![downloads](https://badgen.net/npm/dt/pintrest-scrapper-express)


[![NPM](https://nodei.co/npm/pintrest-scrapper-express.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pintrest-scrapper-express/)

## Usage

### Quick Start

- Download or Clone this repo

- `cd` in to the folder

- Run `npm install` or `yarn install` command to install dependencies

- Run `npm start` to start the server

- Open `localhost:3000` in browser

### Params

Url takes **two** parameters

- **username** : Pinterest username

- **boardName** : Pinterest board name

### Example

- **URLs**
	- **home :**  http://localhost:3000/
	- **Info :**  http://localhost:3000/api/:username/:boardName/info
	- **Pins :**  http://localhost:3000/api/:username/:boardName/pins

- **To get Info** :

  - Go to `http://localhost:3000/api/sai123456789000000/weird-words/info` in your browser

- Result

  ```json
  {
    "title": "Weird Words",
    "totalPins": 341
  }
  ```

- To get pins
  - Go to `http://localhost:3000/api/sai123456789000000/weird-words/pins` in your browser

- **Result**

  ```json
  {
    "images": [
          {
              "src": "https://i.pinimg.com/280x280_RS/2e/2d/50/2e2d505f82e118adf0ac6e742e503d82.jpg",
              "alt": "Words"
          },
          {
              "src": "https://i.pinimg.com/564x/2f/8e/1e/2f8e1e44ebac2f3536c991524bfa114f.jpg",
              "alt": "  The Words, Cool Words, Favorite Quotes, Best Quotes, Love Quotes, Inspirational Quotes, Daily Quotes, Motivational, Pretty Words"
          },
          {

        ...
    ]
  }

  ```

## To Develop

- Run `npm run tsc` to compile `.TS` to `.JS`
- Run `npm run jsc` to run `index.js`
