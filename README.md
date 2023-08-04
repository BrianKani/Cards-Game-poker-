# Blackjack Game
This is a simple implementation of a Blackjack game in JavaScript. The game allows a player to draw cards and calculates their sum. The player aims to get a sum as close to 21 as possible without exceeding it.

# Features

Start the game with two initial random cards.
Draw additional cards to increase the sum.
Determine if the player has a Blackjack (sum of 21) or if the player is out (sum exceeds 21).

# how to use
Open the index.html file in a web browser.
Click the "Start Game" button to begin.
View your current sum, message, and drawn cards on the screen.
If your sum is less than or equal to 20, you can choose to draw another card by clicking the "Draw Card" button.
If your sum is exactly 21, you win with a Blackjack.
If your sum exceeds 21, you are out.

#Code Overview
The code initializes the game state and provides functions for starting the game, drawing new cards, and rendering the game on the screen. Here's a brief overview of the key components:

sum: Holds the current sum of the player's cards.
hasBlackJack: Indicates whether the player has achieved a Blackjack.
isAlive: Tracks whether the player is still in the game.
message: Displays messages to the player based on their current status.
cards: Stores the drawn cards.
player: Contains the player's name and cash.
Various getElementById calls to fetch and update HTML elements for display.
startgame(): Initializes the game by drawing two cards and calculating their sum.
rendergame(): Updates the displayed information based on the game state.
newcard(): Allows the player to draw a new card if they are still in the game and haven't achieved a Blackjack.
Note
This implementation is intended as a basic example of a Blackjack game. It lacks advanced features such as betting, multiple players, and a more sophisticated UI. It can serve as a starting point for building a more comprehensive Blackjack game.

Feel free to expand upon this code and add your own features to enhance the gameplay and user experience.
