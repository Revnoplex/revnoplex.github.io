var clicked = '<p><a id="addBotLink" class="btn" href="/redirects/revnobot">Add Bot To A Server</a></p>'
var unclicked = '<p id="addBotLink" class="disabledBtn">Add Bot To A Server</p>'
var clickedUser = '<p><a id="addBotLink" class="btn" href="/redirects/revnobot-user" target="_blank" rel="noreferrer noopener">Add Bot To Your Discord Account</a></p>'
var unclickedUser = '<p id="addBotLink" class="disabledBtn">Add Bot To Your Discord Account</p>'
var terms = document.getElementById('terms');
var addBotLink = document.getElementById('addBotLink');
var addBot = document.getElementById('addBot')
var addBotUserLink = document.getElementById('addBotUserLink');
var addBotUser = document.getElementById('addBotUser')
addBot.innerHTML=unclicked
addBotUser.innerHTML=unclickedUser
console.log(addBot);
terms.onchange = function() {
    if (this.checked) {
        addBot.innerHTML=clicked
        addBotUser.innerHTML=clickedUser
    } else {
        addBot.innerHTML=unclicked
        addBotUser.innerHTML=unclickedUser
    };
};
