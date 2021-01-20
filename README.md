# SLAPJACK

A Front-End Project by [Jessica Justice](https://github.com/m1073496)
* Project Manager: [Scott Ertmer](https://github.com/sertmer)


1. [Overview](#overview)
2. [Learning Goals](#learning-goals)
3. [Technologies](#technologies)
4. [Features](#features)
7. [Future Additions](#future-additions)


## Overview

This is a Turing School of Software and Design Module 1 solo project. The task was to create the game called SlapJack from scratch, including an HTML, CSS and multiple Javascript files. The game requires stringent logic in order to perform as expected.

**Gameplay:**

 - Players alternate turns playing cards face-up into the central pile (ex a player can’t deal twice in a row)
 - Any player can slap at any time, with several outcomes!
 - If a player slaps when a Jack is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
 - If a player slaps when a Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
 - If a player slaps when a Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
 - If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.
 - If one player loses all their cards, they have one chance to not lose and continue the game:
 - The player with cards left continues to deal from their hand into the central pile (they are now allowed to deal multiple times in a row!)
 - If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
 - When a Jack is revealed, the player who is out of cards can slap it. The central pile is then their new hand, the game continues as normal.
 - If however, the player who is out of cards slaps something that is not a Jack, or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
 - Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!
 - The only way the player who still has cards can win is by slapping the Jack before the player without cards left does


## Learning Goals

**Solidify and demonstrate an understanding of:**
  - DRY JavaScript
  - Event delegation to handle similar event listeners
  - Understand the difference between the data model and how the data is displayed on the DOM
  - Use a problem solving process to break down large problems, solve things step-by-step, and not rely on an outside "answer" to a logical challenge


## Technologies

* HTML
* CSS
* Javascript
* Git
* GitHub

---
## Features

+ [Desktop Layout](#desktop-layout)
+ [Create Random Cover](#create-random-cover)
+ [Make Your Own Cover](#create-your-own-cover)
+ [Save Cover](#save-cover)
+ [Delete Cover](#delete-cover)


## DeskTop Layout

Upon page load, users will see the `SLAPJACK` heading and two player decks with cards already shuffled. Below these decks are the player win counts, defaulting to 0.

<img width="1437" alt="Screen Shot 2021-01-19 at 8 45 23 PM" src="https://user-images.githubusercontent.com/73088654/105124432-61110900-5a97-11eb-95ad-82a4ecee4b04.png">


## Discarding

To discard, player one can press the `q` key, while player two can press the `p` key. Their respective cards will be displayed in a center pile, and the title will disappear.

<img width="1439" alt="Screen Shot 2021-01-19 at 8 49 38 PM" src="https://user-images.githubusercontent.com/73088654/105124680-e3013200-5a97-11eb-814e-ac3c09c8b624.png">


## Slapping a card

When a user sees a Jack on top of the discard pile, or two cards of the same number/King/Queen/Ace played in a row (Doubles), or two cards of the same number/King/Queen/Ace played with one random card between them, users can slap to take the entire discard pile into their own hand. Player one will press the `f` key, while player two will press the `j` key to do so. Valid slaps result in taking the pile (it will disappear on screen) and a corresponding message depending on the type of slap made, while invalid slaps result in forfeiting a card.

<img width="1436" alt="Screen Shot 2021-01-19 at 8 53 31 PM" src="https://user-images.githubusercontent.com/73088654/105124932-6c186900-5a98-11eb-95d5-553f017c2b41.png">


## Winning the game

When one player runs out of cards, the other player has a chance to win the game if they either slap a Jack or if the player without cards makes an invalid slap. When one player is out of cards, the only valid slap remaining is a Jack. If the player with cards discards all their remaining cards wihthout turning up a jack, the discard pile will be shuffled and added to their hand. When a player wins, a message is displayed, their win count increases by 1, and they have the option to start a new game by pressing a button.

<img width="1430" alt="Screen Shot 2021-01-19 at 9 00 29 PM" src="https://user-images.githubusercontent.com/73088654/105125357-6bcc9d80-5a99-11eb-9bf0-7c2a38c6b9d0.png">


---
## Future Additions

* I did not get to the iteration involving local storage, so that is a future addition that can be made.
* I would also like to create a form to store player names and display them on the screen.
* A visible turn tracker would be helpful for users.
