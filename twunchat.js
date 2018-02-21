let css = "div.right-column > div:first-child { -webkit-filter: blur(5px); filter: blur(5px); -webkit-transition: filter 0.2s; transition: filter 0.2s;}div.right-column > div:first-child:hover { -webkit-filter: blur(0); filter: blur(0); }";

let style = document.createElement('style');

if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

let chatCol = document.querySelector('div.right-column > div:first-child');

if (chatCol.offsetWidth !== 0 || chatCol.offsetHeight !== 0) {
  document.querySelector('button.right-column__toggle-visibility').click();
}

