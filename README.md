# Week09_Game


 This javascript web project is a simulation of the war card game written to the browser console. It shows the game play hand by hand and shows which player won. The game tallies the score of all 26 hands and determines the winning player.

## Live Demo URL

Check out the web page [War Card Game] (https://nubilaxl.github.io/Week09_Game/) 
At the prompt select 1 to play a game, then 0 to quit. After quitting, right click on the bare browser screen and select inspect, and then click on the console tab.

## Technologies used


* Javascript
* Object Oriented Programming

## Favorite Features

### Usage of encapsulation
* The code uses classes with private members. Those private members data is hidden from the implementation of the class. The code features the use of the spread operator to use a copy of variables and objects to preserve data integrity. 

### Modularized Design
* The design of the object oriented code features not only private data members, but private methods. These methods focus on the basic functions of the game, so code repetition is a minimal. It features reuse of code by using public methods that keep the actual implementation hidden. The amount of code needed to implement the program is kept at a minimum.

## Code Snippets

### Populating the deck of cards
```javascript

    _populate() {
        const suits = [ '♠︎', '♣︎', '♥︎', '♦︎'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        //Populate the cards array for all suits and ranks
        for(let i = 0; i < suits.length; i++) {
            for( let j = 0; j < ranks.length; j++)
                this._cards.push(new Card(ranks[j], suits[i], values[j]));
        }
    }

```

### Shuffling the cards
```javascript

     _shuffle() {    // Use a random sort algorithm to shuffle the array of cards
        if (this._cards.length > 0) {
            const shuffleDeck = this._cards.sort( () => Math.random() - 0.5);
            this._cards = [...shuffleDeck];

        }

    }

```
## Installation

The local environment require node packet manager, and http server
Check your system using command: npm -v 
If no version install from nodejs.org
Then install http server using command: npm install -g http-server

To make a local copy of of the code, clone the repository
```
git clone https://github.com/nubilaxl/Week09_Game
cd Week09-Game
```

Then within the project directory start http-server
```
http-server
```

The server will show the localhost url to plug into your browser

## Contributions
Pull requests, feature requests, and bug reports are welcome. Please open an issue first so that we may discuss.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact Info
Email: nubila.levon@outlook.com 
LinkedIn:  https://www.linkedin.com/in/nubila-levon/ 