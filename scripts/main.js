let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kutluhankutbaylogo1.png') {
      myImage.setAttribute('src','images/odtu-devrim.jpg');
    } else {
      myImage.setAttribute('src','images/kutluhankutbaylogo1.png');
    }
}