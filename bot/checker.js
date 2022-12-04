var terms = document.getElementById('terms');
var addBotLink = document.getElementById('addBotLink');
terms.onchange = function() {
    if (this.checked) {
        addBotLink.href = "/redirects/revnobot"
    } else {
        addBotLink.href = ""
    }
};
