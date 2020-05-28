var gameData = {
    followers: 0,
    retattles: 0,
    hearts: 0,
    promoDollars: 0,
    buyFollowerCost: 10,
    newsScore: 0.0,
    sportsScore: 0.0,
    musicScore: 0.0,
    politicsScore: 0.0,
    comedyScore: 0.0
}

function tattle() {
    gameData.hearts += calcHearts()
    gameData.retattles += calcRetattles()
    gameData.followers += calcFollowers()
    gameData.promoDollars += calcDollars()
    updateLabels()
}

function updateLabels() {
    document.getElementById("followers").innerHTML = gameData.followers + " followers"
    document.getElementById("retattles").innerHTML = gameData.retattles + " retattles"
    document.getElementById("hearts").innerHTML = gameData.hearts + " hearts"
    document.getElementById("dollars").innerHTML = "$" + gameData.promoDollars + " Promo Dollars"
    document.getElementById("news").innerHTML = "News: " + gameData.newsScore
    document.getElementById("sports").innerHTML = "Sports: " + gameData.sportsScore
    document.getElementById("music").innerHTML = "Music: " + gameData.musicScore
    document.getElementById("politics").innerHTML = "Politics: " + gameData.politicsScore
    document.getElementById("comedy").innerHTML = "Comedy: " + gameData.comedyScore
    document.getElementById("buyOneFollowerButton").innerHTML = "Buy 1 Follower ($" + gameData.buyFollowerCost + ")"
    document.getElementById("buyTenFollowersButton").innerHTML = "Buy 10 Followers ($" + (10 * gameData.buyFollowerCost + 10) + ")"
}

function calcHearts() {
    var min = 1
    var max = Math.ceil(gameData.followers)
    var ret = Math.floor(Math.random() *(max - min + 1)) + min
    console.log("Added " + ret + " hearts")
    return ret;
}

function calcRetattles() {
    var max = Math.ceil(gameData.followers * 0.20 + gameData.hearts * 0.01)
    var ret = Math.floor(Math.random() *(max + 1))
    console.log("Added " + ret + " retattles")
    return ret
}

function calcFollowers() {
    var max = Math.ceil(gameData.hearts * 0.01 + gameData.retattles * 0.02)
    var ret = Math.floor(Math.random() *(max + 1))
    console.log("Added " + ret + " followers")
    return ret
}

function calcDollars() {
    var ret = Math.floor(gameData.followers * 0.01)
    return ret
}

function buyOneFollower() {
    if( gameData.promoDollars > gameData.buyFollowerCost ) {
        gameData.promoDollars -= gameData.buyFollowerCost
        gameData.buyFollowerCost += 1
        gameData.followers += 1
    }
    updateLabels()
}

function buyTenFollowers() {
    if( gameData.promoDollars > (10 * gameData.buyFollowerCost) + 10 ) {
        /*progressive cost of buying 10 followers? i.e. 1, 2, 3, 4...*/
        gameData.promoDollars -= (10 * gameData.buyFollowerCost + 10)
        gameData.buyFollowerCost += 10
        gameData.followers += 10
    }
    updateLabels()
}

function getBuyMaxFollowers() {

}

function buyMaxFollowers() {

}

function generatePosts() {
    /* TO DO */
}