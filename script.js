$(document).ready(
    function () {
        showQuestion(i);
    }
)


const id = $('.id')
const question = $('.question');
const next = $('.next');
const show = $('.show');
const options = $("input[name='options']:checked");
const paginationLink = $('td>a');
let answers = [ 
    {'questionNumber': 1, 'value': ''},
    {'questionNumber': 2, 'value': ''},
    {'questionNumber': 3, 'value': ''},
    {'questionNumber': 4, 'value': ''},
    {'questionNumber': 5, 'value': ''},
    {'questionNumber': 6, 'value': ''},
    {'questionNumber': 7, 'value': ''},
    {'questionNumber': 8, 'value': ''},
    {'questionNumber': 9, 'value': ''},
    {'questionNumber': 10, 'value': ''},
    {'questionNumber': 11, 'value': ''},
    {'questionNumber': 12, 'value': ''},
    {'questionNumber': 13, 'value': ''},
    {'questionNumber': 14, 'value': ''},
    {'questionNumber': 15, 'value': ''},
    {'questionNumber': 16, 'value': ''},
    {'questionNumber': 17, 'value': ''},
    {'questionNumber': 18, 'value': ''},
    {'questionNumber': 19, 'value': ''},
    {'questionNumber': 20, 'value': ''},
    {'questionNumber': 21, 'value': ''},
    {'questionNumber': 22, 'value': ''},
    {'questionNumber': 23, 'value': ''},
    {'questionNumber': 24, 'value': ''},
    {'questionNumber': 25, 'value': ''},
    {'questionNumber': 26, 'value': ''},
    {'questionNumber': 27, 'value': ''},
    {'questionNumber': 28, 'value': ''},
    {'questionNumber': 29, 'value': ''},
    {'questionNumber': 30, 'value': ''},
    {'questionNumber': 31, 'value': ''},
    {'questionNumber': 32, 'value': ''},
    {'questionNumber': 33, 'value': ''},
    {'questionNumber': 34, 'value': ''},
    {'questionNumber': 35, 'value': ''},
    {'questionNumber': 36, 'value': ''},
    {'questionNumber': 37, 'value': ''},
    {'questionNumber': 38, 'value': ''},
    {'questionNumber': 39, 'value': ''},
    {'questionNumber': 40, 'value': ''},
    {'questionNumber': 41, 'value': ''},
    {'questionNumber': 42, 'value': ''},
    {'questionNumber': 43, 'value': ''},
    {'questionNumber': 44, 'value': ''},
];
let i = 0;


function showQuestion(page) {
    $(':radio').parent().removeClass('active')
    $('input[type="radio"]').prop('checked', false);
    i = page;
    id.text(content[i].id);
    question.text(content[i].question);
    if(answers.filter(obj => obj.questionNumber === i)[0].value != ''){
        // $('input[type="radio"]:checked').val()
        console.log('i = ' + i + ' ' + 'input value is: ' + answers[i].value)
        $(':radio[value=' + answers[i].value + ']').prop('checked', true)
        $(':radio[value=' + answers[i].value + ']').parent().addClass('active')
    }
}


function setPageState(i){
    if(typeof(answers[i]) != 'undefined'){
        $('a[id=' + i + ']').addClass('red')
    }
}

function pushAnswer() {
    if(typeof(answers[i]) != 'undefined'){
        answers[i].value = $("input[name='options']:checked").val()
    }
    else{
        answers.push({
            'questionNumber': content[i].id,
            'value': $("input[name='options']:checked").val()
        });
    }

    $('input[type="radio"]').prop('checked', false);
    $('input[type="radio"]').parent().removeClass('active');
    i++;
    
}



next.on('click', function () {
    pushAnswer();
    i < 44 ? showQuestion(i) : (i = 44, console.log('asd'));
})



paginationLink.on('click', function () {
    i = parseInt(this.text)-1;
    showQuestion(i);
})