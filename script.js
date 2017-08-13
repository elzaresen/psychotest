const id = $('.id')
const question = $('.question');
const next = $('.next');
const show = $('.show');
const options = $("input[name='options']:checked");
const paginationLink = $('td>a');

let i = 0;


function showQuestion(page) {
    $(':radio').parent().removeClass('active')
    $('input[type="radio"]').prop('checked', false);
    i = page;
    id.text(content[i].id);
    question.text(content[i].question);
}

function setRadio(i){
    if(typeof(answers[i].value) != 'undefined'){
        $(':radio[value="' + answers[i].value + '"]').prop('checked', true)
        $(':radio[value="' + answers[i].value + '"]').parent().addClass('active')
    }
}

function setPageState(i){
    if(typeof(answers.filter(obj => obj.questionNumber === i)[0].value) == 'undefined'){
        $('a[id=' + (i) + ']').addClass('red')
        console.warn('not answered')
    } else{
        $('a[id=' + i + ']').removeClass('red')
        $('a[id=' + i + ']').addClass('green')
        console.log('answered')
    }
}

function refreshRadio(){
    $('input[type="radio"]').prop('checked', false);
    $('input[type="radio"]').parent().removeClass('active');
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
    refreshRadio();
    i++;
}



next.on('click', function () {
    pushAnswer();
    showQuestion(i);
    setPageState(i);
})

paginationLink.on('click', function () {
    i = parseInt(this.text)-1;
    showQuestion(i);
    setRadio(i);    
})