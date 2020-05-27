var gameData = {
    followers: 0,
    retattles: 0,
    hearts: 0,
    promoDollars: 0,
    buyFollowerCost: 10
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