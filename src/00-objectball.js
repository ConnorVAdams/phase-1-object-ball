// const gameObj = () => {
//     gameObject = {
//         'home': {
//             'teamName':,
//             'colors':,
//             'players': {
//                 'playerName': {}
//                     'number': ,
//                     'shoe':,
//                     'points':,
//                     'rebounds':,
//                     'assists':,
//                     'steals':,
//                     'blocks':,
//                     'slamDunks':,
//             }, 
//         },
//         'away': {

//         },
//     },
// };

// //Creates a team Object with key: 'homeOrAway' which has 2 values: 
// //{
// //  (1) 'teamName': 'teamNameStr', 
// //  (2) 'colors': [colorsArray],
// //  (3) 'players': {},
// const makeTeam = () => {}

// //takes stats as arguments and assigns them to each player Object
// const assignPlayerStats = (name, number, shoe, points, rebounds, assists, steals, blocks, slamDunks) => {}
// const PlayerObj = {}
// //Creates a player Object and pushes it and ITS stats (as k:v pairs) to a team's players Object.
// const makePlayer = name => {
// }

//Initialize the game by calling GameObj.

//Constructor function to intitialize a player
function StatsObj(number, shoe, points, rebounds, assists, steals, blocks, slamDunks) {
    this.number = number;
    this.shoe = shoe;
    this.points = points;
    this.rebounds = rebounds;
    this.assists = assists;
    this.steals = steals;
    this.blocks = blocks;
    this.slamDunks = slamDunks;
};

function PlayerObj(playerName, playerStatsObj) {
    this.playerName = playerStatsObj;
};

//Constructor function to initialize a roster.
function RosterObj(player1, player2, player3, player4, player5) {
    `${player1}` = alanAndersonStats,
    `${player2}` = reggieEvansStats,
    `${player3}` = brookLopezStats,
    `${player4}` = masonPlumleeStats,
    `${player5}` = jasonTerryStats,
};

//Constructor function to initialize a team.
function TeamObj(name, color1, color2, roster) {
    this.colors = [];
    this.teamName = name;
    this.colors.push(color1);
    this.colors.push(color2);
    this.players = roster;
};

function GameObj(homeTeam, awayTeam) {
    this.home = homeTeam;
    this.away = awayTeam;
};

//Variables defining stats for each player on the Nets.
const alanAndersonStats = new StatsObj(0, 16, 22, 12, 12, 3, 1, 1);
const reggieEvansStats = new StatsObj(30, 14, 12, 12, 12, 12, 12, 12);
const brookLopezStats = new StatsObj(11, 17, 17, 19, 10, 3, 1, 15);
const masonPlumleeStats = new StatsObj(1, 19, 26, 12, 6, 3, 8, 5);
const jasonTerryStats = new StatsObj(31, 15, 19, 2, 2, 4, 11, 1);

//An object that represents the five players on the Nets.
const brooklynNetsTeamObj = new TeamObj('Brooklyn Nets', 'Black', 'White', );

//Variables defining stats for each player on the Hornets.
const hornetsPlayer1 = new PlayerObj(4, 18, 10, 1, 1, 2, 7, 2);
const hornetsPlayer2 = new PlayerObj(0, 16, 12, 4, 7, 7, 15, 10);
const hornetsPlayer3 = new PlayerObj(2, 14, 24, 12, 12, 4, 5, 5);
const hornetsPlayer4 = new PlayerObj(8, 15, 33, 3, 2, 1, 1, 0);
const hornetsPlayer5 = new PlayerObj(33, 15, 6, 12, 12, 22, 5, 12);

const charlotteHornets = {
    teamName: 'Charlotte Hornets',
    colors: ['Turquoise', 'Purple'],
    players: {
        'Jeff Adrien': hornetsPlayer1,
        'Bismak Biyombo': hornetsPlayer2,
        'DeSagna Diop': hornetsPlayer3,
        'Ben Gordon': hornetsPlayer4,
        'Brendan Haywood': hornetsPlayer5,
    }
};

//Initialize gameObj for tonight's game.
const gameObj = new GameObj()

