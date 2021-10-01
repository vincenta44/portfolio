import React from "react";

export const diceImages: string[] = [
    "./assets/dice1.gif",
    "./assets/dice2.gif",
    "./assets/dice3.gif",
    "./assets/dice4.gif",
    "./assets/dice5.png",
    "./assets/dice6.png"
]

// https://stackoverflow.com/a/2450976/1718155

export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  export function roll() {
    var shuffledImgs = [""];
    shuffledImgs = shuffle(diceImages);
    return shuffledImgs[1];
  }