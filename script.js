var i = 0;

var txt = "Hey! This is my daily life journal where I kind off document my work at the EOD This might look a lil formal and boring but still if you want to view it I have left some music inside. Hope you have a great time. :) //Loading.................................. ";

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName('js-typewrite')[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}

setTimeout(typeWriter, 1000);
