var clicked = '<a id="addBotLink" class="btn" target="_blank" rel="noreferrer noopener" href="/redirects/revnobot">Add Bot</a>'
var unclicked = '<p id="addBotLink">Button Disabled</p>'
var terms = document.getElementById('terms');
var addBotLink = document.getElementById('addBotLink');
var addBot = document.getElementById('addBot')
console.log(addBot);
terms.onchange = function() {
    if (this.checked) {
        addBot.innerHTML=clicked
    } else {
        addBot.innerHTML=unclicked
    };
};
