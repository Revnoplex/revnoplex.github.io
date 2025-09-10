var titleContent = '\
<h2 class="main-title">\
<img src="/media/images/default-black.png" alt="main logo" width="32" height="32" usemap="#workmap"> <a class="main-title-text" href="/">Revnoplex</a> \
<span class="title-links">\
';

var fallbackTitleContent ='\
<h2><img src="/media/images/default-black.png" alt="main logo" width="32" height="32" usemap="#workmap"> \
<a class="main-title-text" href="/">Revnoplex</a>     <a class="t-links" href="/site-menu">Website Menu</a></h2>\
';

var title = document.getElementById('title');

function writeTitle(links) {
  for (i = 0; i < links.internal.length; ++i) {
    titleContent += `<a class="t-links" href=${links.internal[i].path}>`;
    if ("icon" in links.internal[i]) {
      titleContent += `<img class="t-logos" src="/media/images/${links.internal[i].icon}.png" alt="${links.internal[i].name}-logo"> `;
    }
    titleContent += `${links.internal[i].title}</a>`
  }
  
  for (i = 0; i < links.external.length; ++i) {
    titleContent += `    <a class="t-links" target="_blank" rel="noreferrer noopener ${"rel" in links.external[i] ? links.external[i].rel : ""}" href="${links.external[i].url}" style="text-transform: capitalize">`;
    
    if (links.external[i].dynamic) {
      titleContent += `<img class="t-logos" src="/media/images/${"icon" in links.external[i] ? links.external[i].icon : links.external[i].name}-logo.svg" alt="${links.external[i].name}-logo"> `;
    } else if ("imgUrl" in links.external[i]){
      titleContent += `<img class="t-logos" src="${links.external[i].imgUrl}" alt="${"imgAlt" in links.external[i] ? links.external[i].imgUrl : ""}"> `;
    }

    titleContent += `${links.external[i].name}</a>`;
  }

  titleContent += '\
</span></h2>\
<map name="workmap">\
  <area shape="default" coords="0,0,0,0" alt="revnoplex" href="/">\
</map>\
'
  title.innerHTML = titleContent;
}

fetch('./links.json')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }
  return response.json();
})
.then((json) => writeTitle(json))
.catch(error => {
  console.error('Unable to display title:', error);
  title.innerHTML = fallbackTitleContent;
});
