const id = $('.id')
const question = $('.question');
const next = $('.next');
const finish = $('.finish');
const show = $('.show');
const results = $('.results');
const warning = $('.warning');
const options = $("input[name='options']:checked");
const paginationLink = $('td>a');
let completed = false;
let i = 0;

function showQuestion(page) {
    checkCompletion();        
    $(':radio').parent().removeClass('active')
    $('input[type="radio"]').prop('checked', false);
    id.text(content[page].id);
    question.text(content[page].question);
    setRadio(page);
}

function setRadio(page){
    if(typeof(answers[page].value) != 'undefined'){
        $(':radio[value="' + answers[page].value + '"]').prop('checked', true)
        $(':radio[value="' + answers[page].value + '"]').parent().addClass('active')
    }
}

function setPageState(page){
    if(typeof(answers.filter(obj => obj.questionNumber === page)[0].value) == 'undefined'){
        $('a[id=' + (page) + ']').addClass('red')
        console.warn('not answered')
    } else{
        $('a[id=' + page + ']').removeClass('red')
        $('a[id=' + page + ']').addClass('green')
        console.log('answered')
    }
}

function refreshRadio(){
    $('input[type="radio"]').prop('checked', false);
    $('input[type="radio"]').parent().removeClass('active');
}

function pushAnswer(page) {
    if(typeof(answers[page]) != 'undefined'){
        answers[page].value = $("input[name='options']:checked").val()
    }
    else{
        answers.push({
            'questionNumber': content[page].id,
            'value': $("input[name='options']:checked").val()
        });
    }
    refreshRadio();
}

function checkCompletion(){
    for(s=0 ; s<answers.length; s++){
        answers[s].value=='' | typeof(answers[s].value) == 'undefined' ? completed = false : completed = true
    }
    completed == true && (next.addClass('hidden'), finish.removeClass('hidden'));
}

next.on('click', function () {
    pushAnswer(i);
    i++;        
    i < content.length ? (showQuestion(i), setPageState(i)) : (setPageState(i), i= 0, showQuestion(i));
})

paginationLink.on('click', function () {
    i = parseInt(this.text)-1;
    showQuestion(i);
    setRadio(i);    
})



function evaluateCommon(){
    common = parseInt(answers[1].value)+parseInt(answers[3].value)+parseInt(answers[10].value)+parseInt(answers[11].value)+parseInt(answers[12].value)+parseInt(answers[14].value)+parseInt(answers[15].value)+parseInt(answers[16].value)+parseInt(answers[18].value)+parseInt(answers[19].value)+parseInt(answers[21].value)+parseInt(answers[24].value)+parseInt(answers[26].value)+parseInt(answers[28].value)+parseInt(answers[30].value)+parseInt(answers[31].value)+parseInt(answers[33].value)+parseInt(answers[35].value)+parseInt(answers[36].value)+parseInt(answers[38].value)+parseInt(answers[41].value)+parseInt(answers[43].value) + (-1)*(parseInt(answers[0].value)+parseInt(answers[2].value)+parseInt(answers[4].value)+parseInt(answers[5].value)+parseInt(answers[6].value)+parseInt(answers[7].value)+parseInt(answers[8].value)+parseInt(answers[9].value)+parseInt(answers[13].value)+parseInt(answers[17].value)+parseInt(answers[20].value)+parseInt(answers[22].value)+parseInt(answers[23].value)+parseInt(answers[25].value)+parseInt(answers[27].value)+parseInt(answers[29].value)+parseInt(answers[32].value)+parseInt(answers[34].value)+parseInt(answers[37].value)+parseInt(answers[39].value)+parseInt(answers[40].value)+parseInt(answers[42].value));
    if(common >= -133 && common <= -14) { return 1}
    if(common >= -13 && common <= -3) { return 2}
    if(common >= -2 && common <= 0) { return 3}
    if(common >= 10 && common <= 21) { return 4}
    if(common >= 22 && common <= 32) { return 5}
    if(common >= 33 && common <= 44) { return 6}
    if(common >= 45 && common <= 56) { return 7}
    if(common >= 57 && common <= 68) { return 8}
    if(common >= 69 && common <= 79) { return 9}
    if(common >= 80 && common <= 132) { return 10}
}
function evaluateArchievements(){
    archievements = parseInt(answers[11].value)+parseInt(answers[14].value)+parseInt(answers[26].value)+parseInt(answers[31].value)+parseInt(answers[35].value)+parseInt(answers[36].value) + (-1)*(parseInt(answers[0].value)+parseInt(answers[4].value)+parseInt(answers[5].value)+parseInt(answers[13].value)+parseInt(answers[25].value)+parseInt(answers[42].value));
    if(archievements >= -36 && archievements <= -11) { return 1}
    if(archievements >= -10 && archievements <= -7) { return 2}
    if(archievements >= -6 && archievements <= -3) { return 3}
    if(archievements >= -2 && archievements <= 1) { return 4}
    if(archievements >=2 && archievements <= 5) { return 5}
    if(archievements >=6 && archievements <= 9) { return 6}
    if(archievements >=10 && archievements <= 14) { return 7}
    if(archievements >=15 && archievements <= 18) { return 8}
    if(archievements >=19 && archievements <= 22) { return 9}
    if(archievements >=23 && archievements <= 36) { return 10}
}
function evaluateFailures(){
    failures = parseInt(answers[1].value)+parseInt(answers[3].value)+parseInt(answers[19].value)+parseInt(answers[30].value)+parseInt(answers[41].value)+parseInt(answers[43].value) + (-1)*(parseInt(answers[6].value)+parseInt(answers[23].value)+parseInt(answers[32].value)+parseInt(answers[37].value)+parseInt(answers[39].value)+parseInt(answers[40].value));
    if(failures >= -36 && failures <= -8) { return 1}
    if(failures >= -7 && failures <= -4) { return 2}
    if(failures >= -3 && failures <= 0) { return 3}
    if(failures >= 1 && failures <= 4) { return 4}
    if(failures >= 5 && failures <= 7) { return 5}
    if(failures >= 8 && failures <= 11) { return 6}
    if(failures >= 12 && failures <= 15) { return 7}
    if(failures >= 16 && failures <= 19) { return 8}
    if(failures >= 20 && failures <= 23) { return 9}
    if(failures >= 24 && failures <= 36) { return 10}
}
function evaluateFamily(){
    family = parseInt(answers[1].value)+parseInt(answers[15].value)+parseInt(answers[19].value)+parseInt(answers[31].value)+parseInt(answers[36].value) + (-1)*(parseInt(answers[6].value)+parseInt(answers[13].value)+parseInt(answers[25].value)+parseInt(answers[27].value)+parseInt(answers[40].value));
    if(family >= -30 && family <= -12) { return 1}
    if(family >= -11 && family <= -8) { return 2}
    if(family >= -7 && family <= -5) { return 3}
    if(family >= -4 && family <= -1) { return 4}
    if(family >= 0 && family <= 3) { return 5}
    if(family >= 4 && family <= 6) { return 6}
    if(family >= 7 && family <= 10) { return 7}
    if(family >= 11 && family <= 13) { return 8}
    if(family >= 14 && family <= 17) { return 9}
    if(family >= 18 && family <= 30) { return 10}
}
function evaluateProduction(){
    production = parseInt(answers[18].value)+parseInt(answers[21].value)+parseInt(answers[24].value)+parseInt(answers[30].value)+parseInt(answers[41].value) + (-1)*(parseInt(answers[0].value)+parseInt(answers[8].value)+parseInt(answers[9].value)+parseInt(answers[23].value)+parseInt(answers[29].value));
    if(production >= -30 && production <= -5) { return 1}
    if(production >= -4 && production <= -1) { return 2}
    if(production >= 0 && production <= 3) { return 3}
    if(production >= 4 && production <= 7) { return 4}
    if(production >= 8 && production <= 11) { return 5}
    if(production >= 12 && production <= 15) { return 6}
    if(production >= 16 && production <= 19) { return 7}
    if(production >= 20 && production <= 23) { return 8}
    if(production >= 24 && production <= 27) { return 9}
    if(production >= 28 && production <= 30) { return 10}
}
function evaluateInterpersonal(){
    interpersonal = parseInt(answers[3].value)+parseInt(answers[26].value) + (-1)*(parseInt(answers[5].value)+parseInt(answers[37].value));
    if(interpersonal >= -12 && interpersonal <= -7) { return 1}
    if(interpersonal >= -6 && interpersonal <= -5) { return 2}
    if(interpersonal >= -4 && interpersonal <= -3) { return 3}
    if(interpersonal >= -2 && interpersonal <= -1) { return 4}
    if(interpersonal >= 0 && interpersonal <= 1) { return 5}
    if(interpersonal >= 2 && interpersonal <= 4) { return 6}
    if(interpersonal >= 5 && interpersonal <= 6) { return 7}
    if(interpersonal >= 7 && interpersonal <= 8) { return 8}
    if(interpersonal >= 9 && interpersonal <= 10) { return 9}
    if(interpersonal >= 11 && interpersonal <= 12) { return 10}
}
function evaluateHealth(){
    health = parseInt(answers[12].value)+parseInt(answers[33].value) + (-1)*(parseInt(answers[2].value)+parseInt(answers[22].value));
    if(health >= -12 && health <= -6) { return 1}
    if(health >= -5 && health <= -4) { return 2}
    if(health >= -3 && health <= -2) { return 3}
    if(health >= -1 && health <= 0) { return 4}
    if(health >= 1 && health <= 2) { return 5}
    if(health >= 3 && health <= 4) { return 6}
    if(health >= 5 && health <= 6) { return 7}
    if(health >= 7 && health <= 8) { return 8}
    if(health >= 9 && health <= 10) { return 9}
    if(health >= 11 && health <= 12) { return 10}
}
finish.on('click', function () {
    results.removeClass('hidden');

    $(function () { 
        var myChart = Highcharts.chart('results__chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Уровень субъективного контроля'
            },
            xAxis: {
                categories: ['Общая интернальности (Ио)', 'в области достижений (Ид)', ' в области неудач (Ин)', 'в семейных отношениях (Ис)', 'в области производственных отно­шении (Ип)', 'в области межличностных отноше­ний (Им)', ' в отношении здоровья и болезни (Из)']
            },
            series: [{
                name: 'User',
                data: [evaluateCommon(),evaluateArchievements(),evaluateFailures(),evaluateFamily(),evaluateProduction(),evaluateInterpersonal(),evaluateHealth()]
            }]
        });
    });
})