const id = $('.id')
const question = $('.question');
const next = $('.next');
const finish = $('.finish');
const show = $('.show');
const quiz = $('.quiz');
const results = $('.results');
const warning = $('.warning');
const options = $("input[name='options']:checked");
const paginationLink = $('td>a');

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

finish.on('click', function () {
    results.removeClass('hidden');
    quiz.addClass('hidden');
    $(function () { 
        var myChart = Highcharts.chart('results__chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Уровень субъективного контроля'
            },
            xAxis: {
                categories: ['Общая интернальность (Ио)', 'в области достижений (Ид)', ' в области неудач (Ин)', 'в семейных отношениях (Ис)', 'в области производственных отно­шении (Ип)', 'в области межличностных отноше­ний (Им)', ' в отношении здоровья и болезни (Из)']
            },
            series: [{
                name: 'User',
                data: [evaluateCommon(),evaluateArchievements(),evaluateFailures(),evaluateFamily(),evaluateProduction(),evaluateInterpersonal(),evaluateHealth()]
            }]
        });
    });
    evaluationDescription();
})