//Making a global variable used for calculating the next week
var i = 1;

//variable to get a random number between 1 and 100
var randomSpeed = Math.floor(Math.random() * 1000);

//All needed array's for the charts
var food = [100000];
var water = [100000];
var distance = [0];
var speed = [randomSpeed, 1000, 0];
var weeks = ['Week 1'];

//Giving all charts a variable
var foodChart = document.getElementById('foodChart').getContext('2d');
var waterChart = document.getElementById('waterChart').getContext('2d');
var distanceTravelledChart = document.getElementById('distanceTravelledChart').getContext('2d');
var speedChart = document.getElementById('speedChart').getContext('2d');

//Making the first instance of all the charts
//These are initiated here so the page doesn't start out empty
//Food Chart
var foodChartData = new Chart(foodChart, {
type:'line', 
data:{
    labels: weeks,
        datasets:[{
            label:'Food',
            data: food,
            borderColor: '#B1B1B1'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Food',
            fontSize:24,
            fontColor: '#E1676B'
        },
        legend:{
            display:false,
        }
    }
});

//Water Chart
var waterChartData = new Chart(waterChart, {
    type:'line', 
    data:{
        labels: weeks,
        datasets:[{
            label:'Water',
            data: water,
            borderColor: '#B1B1B1'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Water',
            fontSize:24,
            fontColor: '#E1676B'
        },
        legend:{
            display:false,
            }
    }
});

//Distance Travelled Chart
var distanceChartData = new Chart(distanceTravelledChart, {
    type:'line', 
    data:{
        labels: weeks,
        datasets:[{
            label:'Distance',
            data: distance,
            borderColor: '#B1B1B1'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Distance Travelled',
            fontSize:24,
            fontColor: '#E1676B'
        },
        legend:{
            display:false,
        }
    }
});
    
//Speed Chart
var speedData = new Chart(speedChart, {
    type:'horizontalBar', 
    data:{
        labels: ['speed'],
        datasets:[{
            label:'Speed',
            data: speed,
            borderColor: '#B1B1B1'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Current Speed in km/h',
            fontSize:24,
            fontColor: '#E1676B'
        },
        legend:{
            display:false,
        },
        scales:{
            xAxes: [{
                stacked:true
            }],
            yAxes: [{
                stacked:true
            }]
        }
    }
});   


//Function when the user clicks on the next week button
function nextWeek() { 
    //Getting the last value in the array
    var lastWeekFood = food[food.length - 1];
    var lastWeekWater = water[water.length - 1];
    var lastWeekDistance = distance[distance.length - 1];
    
    //Pushing a new value into the targetted array
    food.push(lastWeekFood - Math.floor(Math.random() * 5000));
    water.push(lastWeekWater - Math.floor(Math.random() * 5000));
    distance.push(lastWeekDistance + Math.floor(Math.random() * 100));
    
    //Pushing the new week into the weeks array
    i = i + 1;
    weeks.push('week ' + i);
    
    //variable to get a random number between 1 and 100
    var randomSpeed = Math.floor(Math.random() * 1000);
    speed[0] = randomSpeed;
                
                
    //These charts have been initiated already, but they need to be updated
    //So the second instance of these charts are here, they get updated every time the user clicks "Next week"
    //Food Chart
    var foodChartData = new Chart(foodChart, {
        type:'line', 
        data:{
            labels: weeks,
            datasets:[{
                label:'Food',
                data: food,
                borderColor: '#B1B1B1'
            }]
        },
        options:{
            title:{
                display:true,
                text:'Food',
                fontSize:24,
                fontColor: '#E1676B'
            },
                legend:{
                    display:false,
                }
        }
    });

    //Water Chart
    var waterChartData = new Chart(waterChart, {
        type:'line', 
        data:{
            labels: weeks,
            datasets:[{
                label:'Water',
                data: water,
                borderColor: '#B1B1B1'
            }]
        },
        options:{
            title:{
                display:true,
                text:'Water',
                fontSize:24,
                fontColor: '#E1676B'
            },
            legend:{
                display:false,
                }
        }
    });

    //Distance Travelled Chart
    var distanceChartData = new Chart(distanceTravelledChart, {
        type:'line', 
        data:{
            labels: weeks,
            datasets:[{
                label:'Distance',
                data: distance,
                borderColor: '#B1B1B1'
            }]
        },
        options:{
            title:{
                display:true,
                text:'Distance Travelled',
                fontSize:24,
                fontColor: '#E1676B'
            },
            legend:{
                display:false,
            }
        }
    });

    //Speed Chart
    var speedData = new Chart(speedChart, {
        type:'horizontalBar', 
        data:{
            labels: ['speed'],
            datasets:[{
                label:'Speed',
                data: speed,
                borderColor: '#B1B1B1'
            }]
        },
        options:{
            title:{
                display:true,
                text:'Current Speed in km/h',
                fontSize:24,
                fontColor: '#E1676B'
            },
            legend:{
                display:false,
            },
            scales:{
                xAxes: [{
                stacked:true
                }],
                yAxes: [{
                    stacked:true
                }]
            }
        }
    });
}