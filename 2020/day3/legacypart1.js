// Commit date: December 16, 2020

// This code is not completed yet. Do not use it.

const fs = require("fs")
/** The world map, containing all the trees and air. */
const worldMap = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(String);
/** A tree on the world map. */
const treeSpace = "#"
/** The amount of trees we crashed into. */
let trees = 0
/** The "player" on the world map. */
let player = {
    /** The player's x position. */
    x: 0,
    /** The player's y position. */
    y: 0,
    /** The space the player's standing on. */
    space: "",
    /** The row the player's standing on. */
    row: "",
}

for (let i = 0; i < worldMap.length; i++) {
    player.row = worldMap[player.y].split("").map(String);
    player.x += 3
    if(player.x >= player.row.length) {
        player.x -= player.row.length
    }
    player.y += 1
    if(player.y < worldMap.length) {
        player.space = player.row[player.x];
        player.row = worldMap[player.y].split("").map(String);
        if(player.space == treeSpace) trees += 1;
    } else {
        console.log("Destination reached!")
        break;
    }
}

console.log(`We crashed into ${trees} trees!`)
