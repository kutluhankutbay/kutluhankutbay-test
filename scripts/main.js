let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kutluhankutbaylogo1.png') {
      myImage.setAttribute('src','images/odtu-devrim.jpg');
    } else {
      myImage.setAttribute('src','images/kutluhankutbaylogo1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Teşekkürler!, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Teşekkürler!, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }