//Constructor function to intitialize a player
function PlayerObj(number, shoe, points, rebounds, assists, steals, blocks, slamDunks) {
    this.number = number;
    this.shoe = shoe;
    this.points = points;
    this.rebounds = rebounds;
    this.assists = assists;
    this.steals = steals;
    this.blocks = blocks;
    this.slamDunks = slamDunks;
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
const alanAndersonStats = new PlayerObj(0, 16, 22, 12, 12, 3, 1, 1);
const reggieEvansStats = new PlayerObj(30, 14, 12, 12, 12, 12, 12, 12);
const brookLopezStats = new PlayerObj(11, 17, 17, 19, 10, 3, 1, 15);
const masonPlumleeStats = new PlayerObj(1, 19, 26, 12, 6, 3, 8, 5);
const jasonTerryStats = new PlayerObj(31, 15, 19, 2, 2, 4, 11, 1);

const netsRoster = {
    'Alan Anderson': alanAndersonStats,
    'Reggie Evans': reggieEvansStats,
    'Brook Lopez': brookLopezStats,
    'Mason Plumlee': masonPlumleeStats,
    'Jason Terry': jasonTerryStats
};

//An object that represents the five players on the Nets.
const brooklynNetsTeamObj = new TeamObj('Brooklyn Nets', 'Black', 'White', netsRoster);

//Variables defining stats for each player on the Hornets.
const jeffAdrienStats = new PlayerObj(4, 18, 10, 1, 1, 2, 7, 2);
const bismakBiyomboStats = new PlayerObj(0, 16, 12, 4, 7, 7, 15, 10);
const desagnaDiopStats = new PlayerObj(2, 14, 24, 12, 12, 4, 5, 5);
const benGordonStats = new PlayerObj(8, 15, 33, 3, 2, 1, 1, 0);
const brendanHaywoodStats = new PlayerObj(33, 15, 6, 12, 12, 22, 5, 12);

const hornetsRoster = {
    'Jeff Adrien': jeffAdrienStats,
    'Bismak Biyombo': bismakBiyomboStats,
    'DeSagna Diop': desagnaDiopStats,
    'Ben Gordon': benGordonStats,
    'Brendan Haywood': brendanHaywoodStats
};

const charlotteHornetsTeamObj = new TeamObj('Charlotte Hornets', 'Blue', 'Turquoise', hornetsRoster)

//Initialize gameObj for tonight's game.
const gameObj = new GameObj(brooklynNetsTeamObj, charlotteHornetsTeamObj);

const numPointsScored = (playerName) => {
    for ([key, value] of Object.entries(gameObj.home.players)) {
            if (key.toLowerCase() === playerName.toLowerCase()) {
                return value['points']
        } else {
            for ([key, value] of Object.entries(gameObj.away.players)) {
                if (key.toLowerCase() === playerName.toLowerCase()) {
                    return value['points']
                }
            } 
        }
    }
    console.log('No such player.')
}

const shoeSize = (playerName) => {
    for ([key, value] of Object.entries(gameObj.home.players)) {
            if (key.toLowerCase() === playerName.toLowerCase()) {
                return value['shoe']
        } else {
            for ([key, value] of Object.entries(gameObj.away.players)) {
                if (key.toLowerCase() === playerName.toLowerCase()) {
                    return value['shoe']
                }
            } 
        }
    }
    console.log('No such player.')
}

const teamColors = (teamName) => {
    for (value of Object.values(gameObj)) {
        if (value['teamName'].toLowerCase() === teamName.toLowerCase()) {
            return value['colors']
        }
    }
}

const teamNames = () => {
    let teamNames = []
    for (value of Object.values(gameObj)) {
        teamNames.push(value['teamName'])
    }
    return teamNames
}

const playerNumbers = (teamName) => {
    teamNumbers = []
    for (team of Object.values(gameObj)) {
        if (team['teamName'].toLowerCase() === teamName.toLowerCase()) {
            for (player of Object.values(team['players']))
                teamNumbers.push(player['points'])
        }
        }
    return teamNumbers
}

const playerStats = (playerName) => {
    for (team of Object.values(gameObj)) {
        for ([player, stats] of Object.entries(team['players'])) {
            if (player.toLowerCase() === playerName.toLowerCase()) {
                return stats
            }
        }
    }
}

const bigShoeRebounds = () => {
    for (team of Object.values(gameObj)) {
        let largestShoe = 0
        let largestShoePlayer
        for ([player, stats] of Object.entries(team['players'])) {
            if (stats['shoe'] > largestShoe) {
                largestShoe = stats['shoe']
                largestShoePlayer = player
            }  
        }
        for ([player, stats] of Object.entries(team['players'])) {
            if (player === largestShoePlayer) {
                return stats['rebounds']
            }
        }
    }
}
