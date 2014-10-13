var getSubtitle = function () {
    var texts = [
        "software developer and all round swell guy",
        "the man who shot liberty valance",
        "qrrbrbirlbel!!!!!!",
        "(⌐■_■)--︻╦╤─ - - -",
        "A miserable little pile of secrets!",
        "Come on and slam, and welcome to the jam",
        "tunnel snakes rule",
        "r.kachowski",
        "software developer and all round swell guy",
        "whoa, what - really??! wait, what?!",
        "I heard you're idea's and their definitely good",
        "don't you mean, 'snake, in the jewel closet'??",
        '[ $[ $RANDOM % 6 ] == 0 ] && rm -fr / || echo "click"',
        "The fact has not created in me. A sense of obligation.",
        "I'm the biggest cowboy in these parts, if there were bigger I killed 'em all",
        "Remember what I yelled, and remind me what I said",
        "YOU HAVE TO THINK LIKE A STAR!!",
        "I'm into the finer things, like, red wine and time machines",
        "I'm into the finer things, like, red wine and time machines",
        "How can I describe it to you? The sly eagle hides its claws.",
        "awesome! nice! pretty sweet!",
        "Here I go, deep type flow, Jacque Cousteau could never get this low",
        "a fledgling freelance professor, one who will die young and make no lasting impression."];

    return texts[Math.floor(Math.random()*texts.length)];
};

$(function(){
    var subtitle = getSubtitle();

    $("#subtitle").text(subtitle);
});
