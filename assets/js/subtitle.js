var getSubtitle = function () {
    var texts = [
        "software developer and all round swell guy",
        "the man who shot liberty valance",
        "qrrbrbirlbel!!!!!!",
        "(⌐■_■)--︻╦╤─ - - -",
        "A miserable little pile of secrets!", // castlevania sotn
        "Come on and slam, and welcome to the jam",//space jam
        "tunnel snakes rule",//fallout
        "r.kachowski",
        "software developer and all round swell guy",
        "I heard you're idea's and their definitely good",//xkcd
        "don't you mean, 'snake, in the jewel closet'??",//the least surprised
        '[ $[ $RANDOM % 6 ] == 0 ] && rm -fr / || echo "click"',
        "The fact has not created in me. A sense of obligation.",//a man said to the universe
        "I'm the biggest cowboy in these parts, if there were bigger I killed 'em all",//cowboyana
        "Remember what I yelled, and remind me what I said",//cowboyana
        "YOU HAVE TO THINK LIKE A STAR!!",//mondo medicals
        "I'm into the finer things, like, red wine and time machines",//a_rival
        "I'm into the finer things, like, red wine and time machines",//a_rival
        "How can I describe it to you? The sly eagle hides its claws.",//ff9
        "awesome! nice! pretty sweet!",
        "We can forgive a man for making a useful thing as long as he does not admire it.",// https://www.gutenberg.org/files/174/174-h/174-h.htm
        "All art is quite useless.",// https://www.gutenberg.org/files/174/174-h/174-h.htm
        "Here I go, deep type flow, Jacque Cousteau could never get this low",//wu tang
        "a fledgling freelance professor, one who will die young and make no lasting impression."];//_why

    return texts[Math.floor(Math.random()*texts.length)];
};

$(function(){
    var subtitle = getSubtitle();

    $("#subtitle").text(subtitle);
});
