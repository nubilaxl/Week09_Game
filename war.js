
//This class holds the attributes of a card rank, suit, and value
class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;

    }
}


// The deck class holds informaton and methods for creating and handling cards.
class Deck {
    constructor( ) {
        this._cards = [];
    }

    get_cards() {
        return this._cards;
    }

    buildDeck() {           // This function populates deck of cards  and shuffles the deck
        this._populate();
        this._shuffle();
        return this._cards;
    }

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

    _shuffle() {    // Use a random sort algorithm to shuffle the array of cards
        if (this._cards.length > 0) {
            const shuffleDeck = this._cards.sort( () => Math.random() - 0.5);
            this._cards = [...shuffleDeck];

        }

    }
}


// The  Player class, each player has name, a deck of 26 cards, and a score
class Player {
    constructor(name, score) {
        this.name = name;
        this.deck = [];
        this.score = score;
    }
}

//The dealer is the class that creates the game
class Dealer {
    constructor() {
        this._players = [2];
        this._deck = [];
    }

       
    
    _createGame() {     // Create the game play

        // Instantiate the players
        this._players[0] = new Player('Player 1', 0);   
        this._players[1] = new Player('Player 2', 0);
        // Build the deck of cards
        const cards = new Deck().buildDeck();

        // Deal 26 cards to each player
        this._players[0].deck = [...cards.slice(0,26)];
        this._players[1].deck = [...cards.slice(26,52)];

        // For each round, determine the winner, increase score, and display the hands
        for (let i = 0; i < 26; i++ )  {
            if(this._players[0].deck[i].value  > this._players[1].deck[i].value)
                {
                    this._players[0].score++;
                    console.log(`${this._players[0].name} scored! `);
                }
            else if(this._players[1].deck[i].value  > this._players[0].deck[i].value)
                {
                    this._players[1].score++;
                    console.log(`${this._players[1].name} scored! `);
                }

            //Display the hands that were played
            console.log(`${this._players[0].name} played ${this._players[0].deck[i].rank} of ${this._players[0].deck[i].suit}`);
            console.log(`${this._players[1].name} played ${this._players[1].deck[i].rank} of ${this._players[1].deck[i].suit}`);
        }

        // Display the winner of the game and the score
        if(this._players[0].score > this._players[1].score)
            console.log( `${this._players[0].name} wins! Final Score: ${this._players[0].score} to ${this._players[1].score}`);
        else if(this._players[1].score > this._players[0].score)
            console.log( `${this._players[1].name} wins! Final Score: ${this._players[0].score} to ${this._players[1].score}`);
        else
            console.log( `It's a tie! Final Score: ${this._players[0].score} to ${this._players[1].score}`)
    }

    start() {    // The user interface to start the game
        
        let input = -1;
        while(input != 0) {
            input = prompt ( `Do you want to play war?
            0) Quit
            1) Play`);
       
            switch(input) {
                case '1':
                    this._createGame();
                    break;
                case '0':
                    break;
            }
         }  
            
        }
}

// Instantiate the new game
let wargame = new Dealer();
wargame.start();

