var updateClock = setInterval(clock, 1000);
var checkBackground = setInterval(updateBackground, 1000);
var today = new Date()
i = 1;

function clock(){
    if(document.getElementById('switch').innerHTML == "Switch to 12h notation"){
        var today = new Date();
    
        document.getElementById('clock').innerHTML = today.getHours() + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds());

        function addZero(number){
            if(number < 10){
                number = "0" + number;
            }
            return number;
        }
        
    } else {
        var today = new Date();
    
        document.getElementById('clock').innerHTML = amOrPm(today.getHours()) + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds()) + " " + getTimeOfDay(today.getHours());

        function addZero(number){
            if(number < 10){
                number = "0" + number;
            }
            return number;
        }
    
        function amOrPm(number){
            if(number > 12){
                number = number - 12;
            }
            return number;
        }
    
        function getTimeOfDay(number){
            if(number > 12){
                return "PM";
            } else {
                return "AM";
            }   
        }
        
    }
    
    var maanden = new Array('Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');
    document.getElementById('date').innerHTML = today.getDate() + " " + maanden[today.getMonth()]  + " " + today.getFullYear();
}

function switchNotation(){
    if(i == 1){
        document.getElementById('switch').innerHTML = "Switch to 24h notation";
        i = i - 1;
    } else {
        document.getElementById('switch').innerHTML = "Switch to 12h notation"
        i = i + 1;
    }
}

function updateBackground() {
    if(today.getHours() < 6) {
        document.body.style.backgroundColor = '#002447';
        document.getElementById('clock').style.color = "#c0c0c0";
        document.getElementById('date').style.color = "#c0c0c0";
        document.getElementById('image').src='../images/moon.png'
        document.getElementById('image').style.marginLeft = '50%';
    } else if(today.getHours() < 12) {
        document.body.style.backgroundColor = '#f3d173';
        document.getElementById('image').src='../images/morningSun.png'
        document.getElementById('image').style.marginLeft = '-50px';
        document.getElementById('image').style.marginTop = '400px';
    } else if(today.getHours() < 18) {
        document.body.style.backgroundColor = '#87ceeb';
        document.getElementById('image').src='../images/daySun.png'
        document.getElementById('image').style.marginLeft = '35px';
    } else if(today.getHours() < 24) {
        document.body.style.backgroundColor = '#fd6051';
        document.getElementById('clock').style.color = "#c0c0c0";
        document.getElementById('date').style.color = "#c0c0c0";
        document.getElementById('image').src='../images/eveningSun.png'
        document.getElementById('image').style.marginLeft = '-200px';
    }
}

var clock = document.getElementById('clock');
var date = document.getElementById('date');
var button = document.getElementById('switch');
var image = document.getElementById('image');

clock.classList.add('fadeIn');
date.classList.add('fadeIn');
button.classList.add('fadeIn');
image.classList.add('fadeIn');