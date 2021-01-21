# SLAPJACK

A Front-End Project by [Jessica Justice](https://github.com/m1073496)
* Project Manager: [Scott Ertmer](https://github.com/sertmer)


1. [Overview](#overview)
2. [Learning Goals](#learning-goals)
3. [Technologies](#technologies)
4. [Features](#features)
7. [Future Additions](#future-additions)


## Overview

This is a Turing School of Software and Design Module 1 solo project. My task was to create the game 'SlapJack' from scratch, which involved building out HTML, CSS and multiple Javascript files. Stringent logic was required to handle all game rules and varying scenarios, capture all possible player interaction (within the scope of the game), and to display all relevant DOM elements at the appropriate times in order to promote seamless gameplay.

**Gameplay:**

 - Players will alternate turns by default, playing cards face-up into the central discard pile
 
 - Any player can slap at any time, with several outcomes.
 
 - If a player slaps when a Jack is on top of the discard pile, the entire discard pile is added to that player’s hand, and then their hand is shuffled automatically.
 
 - If a player slaps when a Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is on top of the discard pile, the entire discard pile is added to the player’s hand, and their hand is shuffled automatically.
 
 - If a player slaps when a Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the discard pile, the entire discard pile is added to the player’s hand, and their hand is shuffled automatically.
 
 - If a player slaps when neither a Jack, Double, or Sandwich is on top of the discard pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.
 
 - If one player loses all their cards, they have one chance to not lose and continue the game:
 
   * Doubles and Sandwiches are no longer valid when one player is completely out of cards - in this case, only a Jack is a valid slap for both players!
 
   * The player with cards left continues to discard from their hand into the discard pile (they are now allowed to deal multiple times in a row)
  
   * If the player with cards left deals all their cards without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
  
   * When a Jack is revealed, the player who is out of cards can slap it. The discard pile is then their new hand, and the game continues as normal.
 
   * If, however, the player who is out of cards slaps something that is not a Jack, they lose!
 
   * If the player who still has cards slaps the Jack first, they win!
 


## Learning Goals

**Solidify and demonstrate an understanding of:**

  - DRY JavaScript
  - Implementing functional code/seamless user experience
  - Event delegation to handle similar event listeners
  - Implementing local storage to save data upon page reload
  - The difference between the data model and how the data is displayed on the DOM
  - Ability to use a problem solving process to break down large problems, solve things step-by-step, and not rely on an outside "answer" to a logical challenge


## Technologies

* HTML
* CSS
* Javascript
* Git
* GitHub
* GitHub Pages: [](https://m1073496.github.io/SLAPJACK/)

---
## Features

+ [Desktop Layout](#desktop-layout)
+ [Discarding](#Discarding)
+ [SLapping a Card](#slapping-a-card)
+ [Winning the Game](#winning-the-game)


## DeskTop Layout

Upon page load, users will see the `SLAPJACK` heading and two player decks with cards already shuffled. Below these decks are the player win counts, defaulting to 0.

<img width="1437" alt="Screen Shot 2021-01-19 at 8 45 23 PM" src="https://user-images.githubusercontent.com/73088654/105124432-61110900-5a97-11eb-95ad-82a4ecee4b04.png">


## Discarding

To discard, player one can press the `q` key, while player two can press the `p` key. Their respective cards will be displayed in a central pile, and the title will disappear.

<img width="1439" alt="Screen Shot 2021-01-19 at 8 49 38 PM" src="https://user-images.githubusercontent.com/73088654/105124680-e3013200-5a97-11eb-814e-ac3c09c8b624.png">


## Slapping a Card

When a user sees a Jack on top of the discard pile, or two cards of the same number/King/Queen/Ace played in a row (Doubles), or two cards of the same number/King/Queen/Ace played with one random card between them (Sandwich), users can slap to take the entire discard pile into their own hand. Player one will press the `f` key, while player two will press the `j` key to do so. Valid slaps result in taking the pile (it will disappear on screen) and a corresponding message will appear declaring the type of slap made and the player who takes the pile. Invalid slaps result in forfeiting a card to the opponent, and a message will appear to declare which player is forfeiting a card.

<img width="1436" alt="Screen Shot 2021-01-19 at 8 53 31 PM" src="https://user-images.githubusercontent.com/73088654/105124932-6c186900-5a98-11eb-95d5-553f017c2b41.png">


## Winning the game

When one player is out of cards, the only valid slap remaining for both players is a Jack. In this situation, the player who still has cards has a chance to win the game if they can either slap a Jack or if their opponent makes an invalid slap. If the player without cards gets to a Jack first, they take the discard pile and are back in the game. If the player with cards runs out of cards without turning up a Jack, the discard pile will be shuffled and added back to their hand, and they can continue to discard. When a player wins, their win count increases by 1, a message is displayed, and they have the option to start a new game by pressing a button.

<img width="1430" alt="Screen Shot 2021-01-19 at 9 00 29 PM" src="https://user-images.githubusercontent.com/73088654/105125357-6bcc9d80-5a99-11eb-9bf0-7c2a38c6b9d0.png">


---
## Future Additions

* Instructions appear upon page load that explain the game rules and player controls
* Input forms to capture player names and display them by their corresponding card stacks
* A visual way to track the current player's turn
* A visual way to track how many cards each player has and how many cards are in the discard pile
