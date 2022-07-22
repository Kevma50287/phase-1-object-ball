//gameObject is a function that returns an object with nested elements

const gameObject = () => {
    const obj = {
        home: {
            teamName:'Brooklyn Nets',
            colors:'Black, White',
            players: {
                'Alan Anderson':{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans':{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez':{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason PLumlee':{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry':{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName:'Charlotte Hornets',
            colors:'Turquoise, Purple',
            players: {
                'Jeff Adrien':{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo':{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop':{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon':{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood':{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
    return obj
}

//Build a function, numPointsScored that takes in an argument of a player's name and returns the 
//number of points scored for that player.
//Think about where in the object you will find a player's points.
//How can you iterate down into that level? Think about the return value of your function

const numPointsScored = (playername) => {
    const obj = gameObject();
    let res = 0;
    const iterator = (obj) => {
        for (const gamekey in obj) {
            if (gamekey === playername) {
                res = obj[gamekey]['points']
            } else if (typeof obj[gamekey] === "object") {
                iterator(obj[gamekey]);
            }
        }
    }
    iterator(obj)
    return res
}

const PlayerShoeSize = (playername) => {
    const obj = gameObject();
    let res = 0;
    const iterator = (obj) => {
        for (const gamekey in obj) {
            if (gamekey === playername) {
                res = obj[gamekey]['shoe']
            } else if (typeof obj[gamekey] === "object") {
                iterator(obj[gamekey]);
            }
        }
    }
    iterator(obj)
    return res
}

const PlayerStatSingle = (playername, stat) => {
    const obj = gameObject();
    let res = 0;
    const iterator = (obj) => {
        for (const gamekey in obj) {
            if (gamekey === playername) {
                res = obj[gamekey][stat]
            } else if (typeof obj[gamekey] === "object") {
                iterator(obj[gamekey]);
            }
        }
    }
    iterator(obj)
    return res
}

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.

const teamColor = (nameinput) => {
    const obj = gameObject()
    const hometeam = obj.home;
    const awayteam = obj.away;
    if (hometeam.teamName === nameinput){
        return hometeam.colors
    } else if (awayteam.teamName === nameinput){
        return awayteam.colors
    } else {
        alert(`${nameinput} not found in game`)
    }
}

console.log(teamColor('Charlotte Hornets'))

// Build a function, teamNames, that operates on the game object to return an array of the team names.

const teamNames = () => {
    const obj = gameObject();
    const namearray = [Object.values(obj.home)[0], Object.values(obj.away)[0]]
    return namearray
}

teamNames()
// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.

const playerNumbers = (nameinput) => {
    const obj = gameObject();
    let arr = [];
    if (obj.home.teamName === nameinput) {
        for (const playername in obj.home.players){
            arr.push(obj.home.players[playername]['number'])
        }
    } else if (obj.away.teamName === nameinput) {
        for (const playername in obj.away.players){
            arr.push(obj.away.players[playername]['number'])
        }
    } else {
        alert(`${nameinput} not found`)
    }
    return arr
}

console.log(playerNumbers('Charlotte Hornets'), typeof playerNumbers('Charlotte Hornets'))

// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:

const PlayerStat = (playername) => {
    const obj = gameObject();
    let res = {};
    const iterator = (obj) => {
        for (const gamekey in obj) {
            if (gamekey === playername) {
                res = obj[gamekey]
            } else if (typeof obj[gamekey] === "object") {
                iterator(obj[gamekey]);
            }
        }
    }
    iterator(obj)
    return res
}

console.log(PlayerStat('Ben Gordon'))