// Step 1. Building the objects For Home and Away team.
function gameObject(){
    return{
        home:{
            teamName:"brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points: 22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDucks:1
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points: 12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDucks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points: 17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDucks:15
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points: 26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDucks:5
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points: 19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slam_Ducks:1
                },
                
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquioise","Purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slam_Dunks:2

                },
                "Bismak Biyombo":{
                    number:2,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slam_Dunks:10

                },
                "JDeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slam_Dunks:5

                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slam_Dunks:0

                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slam_Dunks:12

                }
            }
        }
    }
}
// checking my work on the console by calling a gameObject function
console.log(gameObject());

// Step 2. Building functions

// defining function numPointsScored
function numPointsScored(playerName) {
    let game = gameObject();  // Get the game data
    if (game.home.players[playerName]) {  // Check if the player is on the home team
      return game.home.players[playerName].points;  // Return points for home team player
    } else if (game.away.players[playerName]) {  // Check if the player is on the away team
      return game.away.players[playerName].points;  // Return points for away team player
    }
  }
// defining function shoeSize
function shoeSize(playerName) {
    let game = gameObject();  // Get the game data
    if (game.home.players[playerName]) {  // Check if player is in the home team
      return game.home.players[playerName].shoe;  // Return shoe size for home team player
    } else if (game.away.players[playerName]) {  // Check if player is in the away team
      return game.away.players[playerName].shoe;  // Return shoe size for away team player
    }
  }
//   defining function teamColors
function teamColors(teamName) {
    let game = gameObject();  // Get the game data
    if (game.home.teamName === teamName) {  // Check if the team is the home team
      return game.home.colors;  // Return the colors of the home team
    } else if (game.away.teamName === teamName) {  // Check if the team is the away team
      return game.away.colors;  // Return the colors of the away team
    }
  }
//   defining  function teamNames
function teamNames() {
    let game = gameObject();  // Get the game data
    return [game.home.teamName, game.away.teamName];  // Return both team names as an array
  }
//   defining function playerNumbers
function playerNumbers(teamName) {
    let game = gameObject();  // Get the game data
    let numbers = [];  // Create an empty array to store the numbers
    
    if (game.home.teamName === teamName) {  // If the team is home team
      for (let player in game.home.players) {  // Loop through all players on the home team
        numbers.push(game.home.players[player].number);  // Add each player's number to the array
      }
    } else if (game.away.teamName === teamName) {  // If the team is away team
      for (let player in game.away.players) {  // Loop through all players on the away team
        numbers.push(game.away.players[player].number);  // Add each player's number to the array
      }
    }
    
    return numbers;  // Return the array of numbers
  }
//   defining function playerStats
function playerStats(playerName) {
    let game = gameObject();  // Get the game data
    if (game.home.players[playerName]) {  // Check if player is in the home team
      return game.home.players[playerName];  // Return the player's stats from home team
    } else if (game.away.players[playerName]) {  // Check if player is in the away team
      return game.away.players[playerName];  // Return the player's stats from away team
    }
  }
  
//   defining function bigShoeRebound
function bigShoeRebounds() {
    let game = gameObject();  // Get the game data
    let largestShoe = 0;  // Variable to store the largest shoe size
    let playerWithBiggestShoe = "";  // Variable to store the player's name with the largest shoe
    
    // Check players in the home team
    for (let player in game.home.players) {
      if (game.home.players[player].shoe > largestShoe) {
        largestShoe = game.home.players[player].shoe;  // Update largest shoe size
        playerWithBiggestShoe = player;  // Update player with largest shoe size
      }
    }
    
    // Check players in the away team
    for (let player in game.away.players) {
      if (game.away.players[player].shoe > largestShoe) {
        largestShoe = game.away.players[player].shoe;  // Update largest shoe size
        playerWithBiggestShoe = player;  // Update player with largest shoe size
      }
    }
    
    // Return rebounds of the player with the biggest shoe
    return game.home.players[playerWithBiggestShoe] //Accessing the players object of the home team
      ? game.home.players[playerWithBiggestShoe].rebounds //Instead of using else if i used the ternary operator to give condions so if the condition is true then it returns rebounds of the player from the home team.
      : game.away.players[playerWithBiggestShoe].rebounds;//(Accessing rebounds stats for the player on the away team)If the condition is false then it return rebounds of the player from Away team.
  }

  //BONUS QUESTIONS
//   Which player has the most point mostPointsScored.
function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let topScorer = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          topScorer = player;
        }
      }
    }
    return topScorer;
  }
  console.log("The player with the most points scored is: "+mostPointsScored());//calling the function(mostPointScored)


//   Which team has the most points
function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  console.log("The team with the highest points: " + winningTeam());//calling the function (winningTeam)
// Which player has the longest name 

  function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  console.log("Player with Longest name is: "+playerWithLongestName());//calling the function(playerWithTheLongestName)

//SUPPER BONUS QUESTION

//   Does the player with the longest name have the most steals.

  function doesLongNameStealATon() {
    let longestPlayer = playerWithLongestName();
    let game = gameObject();
    let maxSteals = 0;
    let playerWithMaxSteals = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > maxSteals) {
          maxSteals = game[team].players[player].steals;
          playerWithMaxSteals = player;
        }
      }
    }
  
    return longestPlayer === playerWithMaxSteals;
  }

  console.log("Does the player with the longest name have the most steals: " +doesLongNameStealATon());
