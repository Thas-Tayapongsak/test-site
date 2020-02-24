let myImage = document.querySelector('img');
let selector = document.querySelector('#selector');

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
