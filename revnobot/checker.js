var clicked = '<p><a id="addBotLink" class="btn" href="/redirects/revnobot">Add Bot</a></p>'
var unclicked = '<p id="addBotLink" class="disabledBtn">Add Bot</p>'
var terms = document.getElementById('terms');
var addBotLink = document.getElementById('addBotLink');
var addBot = document.getElementById('addBot')
addBot.innerHTML=unclicked
console.log(addBot);
terms.onchange = function() {
    if (this.checked) {
        addBot.innerHTML=clicked
    } else {
        addBot.innerHTML=unclicked
    };
};