let myImage = document.querySelector('img');
let selector = document.querySelector('#selector');
let myButton = document.querySelector('#change');
let myHeading = document.querySelector('h1');

selector.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpg') {
      myImage.setAttribute ('src','images/cat2.jpg');
      selector.textContent = 'click to change to my cat';
    } else {
      myImage.setAttribute ('src','images/cat.jpg');
      selector.textContent = 'click to change to my friend\'s cat';
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = myHeading.textContent + ', ' + myName;
}

myButton.onclick = function() {
    setUserName();
}

