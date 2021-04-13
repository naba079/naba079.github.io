// Your Age in Days -_-/-_-

function ageInDays() {

    var birthyear = prompt('What year you born..Good friend?');
    var dayNumber = (2021- birthyear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + dayNumber + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {

    document.getElementById('ageInDays').remove();
}