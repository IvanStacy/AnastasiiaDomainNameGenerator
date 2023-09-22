/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      // console.log(`${pronoun[p]}${adj[a]}${noun[n]}.com`);
      // let div = document.createElement("div");
      // div.innerText = `${pronoun[p]}${adj[a]}${noun[n]}.com`;
      // document.body.appendChild(div);
    }
  }
}
let pronounIdx = [Math.floor(Math.random() * pronoun.length)];
let adjIdx = [Math.floor(Math.random() * adj.length)];
let nounIdx = [Math.floor(Math.random() * noun.length)];
const resultMessage = `${pronoun[pronounIdx]}${adj[adjIdx]}${noun[nounIdx]}.com`;
//runSentence
document.getElementById("DomGenerator").innerHTML = resultMessage;
