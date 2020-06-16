var i = 0;
var txt = "Hey! Thanks for visiting my blog This is sort of my daily life journal which I write at the end of the end which is usually 4 AM for me Sorry i haven't updated it from quite a long time cause i have been a little busy lately. Have a nice day :) //Loading.................................. ";

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName('js-typewrite')[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 65);
  }
}

setTimeout(typeWriter, 1000);