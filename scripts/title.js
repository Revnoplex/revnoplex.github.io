function writeTitle(links) {
  for (i = 0; i < links.internal.length; ++i) {
    
  }
}

fetch('./links.json')
.then((response) => response.json())
.then((json) => writeTitle(json));

document.write('\
\
<h2 class="main-title">\
<img src="/media/images/default-black.png" alt="main logo" width="32" height="32" usemap="#workmap"> <a class="main-title-text" href="/">Revnoplex</a> \
<span class="title-links">\
<a class="t-links" href="/downloads">Downloads</a>\
<a class="t-links" href="/fun">Funny</a>\
<a class="t-links" href="/projects">Projects</a>\
<a class="t-links" href="/revnobot"><img class="t-logos" src="/media/images/revnobot.png" alt="revnobot-logo"> Discord Bot</a>    \
<a class="t-links" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UC1VSDiiRQZRTbxNvWhIrJfw"><img class="t-logos" src="/media/images/yt-logo.svg" alt="youtube-logo">Youtube</a>    \
<a class="t-links" target="_blank" rel="noreferrer noopener" href="https://www.twitter.com/revnoplex"><img class="t-logos" src="/media/images/twitter-logo.svg" alt="twitter-logo">Twitter</a>    \
<a class="t-links" target="_blank" rel="noreferrer noopener" href="https://www.reddit.com/user/C468"><img class="t-logos" src="/media/images/reddit-logo.svg" alt="reddit-logo">Reddit</a>    \
<a class="t-links" target="_blank" rel="noreferrer noopener" href="https://twitch.tv/Revnoplex"><img class="t-logos" src="/media/images/twitch-logo.svg" alt="twitch-logo"> Twitch</a>    \
<a class="t-links" target="_blank" rel="noreferrer noopener" href="https://github.com/revnoplex"><img class="t-logos" src="/media/images/github-logo.svg" alt="github-logo"> Github</a>   \
<a class="t-links" target="_blank" rel="noreferrer noopener" href="https://bsky.app/profile/revnoplex.bsky.social"><img class="t-logos" src="/media/images/bluesky-logo.svg" alt="bluesky-logo">Bluesky</a>    \
 </span></h2>\
<map name="workmap">\
  <area shape="default" coords="0,0,0,0" alt="revnoplex" href="/">\
</map>');
