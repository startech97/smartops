
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
  var el = document.querySelectorAll('.tabs');
  var options = {swipeable:true}
var instance = M.Tabs.init(el,);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
if(document.querySelector('.inp')) {
    const input = document.querySelector('.inp');
    const btn = document.querySelector('.analitics-done')
    const label = document.querySelector(".label")
    input.addEventListener('change', () => {
    label.innerHTML = input.files['0'].name
    btn.classList.remove('hide')
    label.style.paddingLeft = '20px'
    })
}
const skills = [
    'Стрессоустойчивость',
    'Организованность',
    'Ориентация на результат ',
    'Эмоциональный интеллект',
    'Мотивация',
    'Скорость работы',
    'Работа в команде'
]

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: skills,
        datasets: [
            {
            label: 'корреляционный вес',
            type: 'line',
            backgroundColor: 'rgb(27, 94, 32)',
            borderColor: 'rgb(27, 94, 32)',
            data: [5.45,2.12,3.02,2.43,1.11,0.24],
            fill: false,
            yAxisID: 'left-y-axis'
        },
        {
            label: '% от максимально возможного',
            type: 'line',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [60,70,75,80,90,91],
            fill: false,
            yAxisID: 'right-y-axis'
        },
    ]
    },
    options: {
        scales: {
            yAxes: [{
                id: 'left-y-axis',
                type: 'linear',
                position: 'left'
            }, {
                id: 'right-y-axis',
                type: 'linear',
                position: 'right'
            }]
        }
    }
});
var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: skills,
        datasets: [{
            label: 'Сотрудник',
            data: [60,70,75,80,90,91],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        },{
            label: 'Норма',
            
            backgroundColor: 'rgba(27, 94, 32, .2)',
            borderColor: 'rgb(27, 94, 32)',
            data: [80,80,80,80,80,80],
            fill: true,
            yAxisID: 'left-y-axis'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4,{
    type: 'bar',
    data: {
        labels: ['Январь','Февраль','Март','Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь'],
        datasets: [
            {
            label: skills[0],
            type: 'bar',
            backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
            data: [45,12,02,43,11,24,71,32,88],
            fill: false,
            yAxisID: 'left-y-axis'
        },
        {
            label: skills[1],
            type: 'bar',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
            data: [60,70,75,80,90,91,80,80,80],
            fill: false,
            yAxisID: 'right-y-axis'
        },
        {
            label: `${skills[1]}(Лин.)`,
            type: 'line',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
            data: [60,70,75,80,90,91,80,80,80],
            fill: false,
            yAxisID: 'right-y-axis'
        },
        {
            label: skills[2],
            type: 'bar',
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)',
            data: [60,70,75,53,54,77,32,85,90],
            fill: false,
            yAxisID: 'right-y-axis'
        },
    ]
    },
    options: {
        scales: {
            yAxes: [{
                id: 'left-y-axis',
                type: 'linear',
                position: 'left'
            }, {
                id: 'right-y-axis',
                type: 'linear',
                position: 'right'
            }]
        }
    } 
});



