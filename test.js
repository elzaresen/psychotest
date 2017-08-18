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

function setRadio(page) {
    if (typeof (answers[page].value) != 'undefined') {
        $(':radio[value="' + answers[page].value + '"]').prop('checked', true)
        $(':radio[value="' + answers[page].value + '"]').parent().addClass('active')
    }
    else {
        refreshRadio();
    }
}

function setPageState(page) {
    if (answers.filter(obj => obj.questionNumber === page)[0].value == '') {
        $('a[id=' + (page) + ']').removeClass('skipped')
        console.log(page + ' skipped')
    } else {
        $('a[id=' + (page) + ']').addClass('skipped')
        console.log(page + ' answered')
    }
}

function refreshRadio() {
    $('input[type="radio"]').prop('checked', false);
    $('input[type="radio"]').parent().removeClass('active');
}

function pushAnswer(page) {
    if (typeof (answers[page]) != 'undefined') {
        answers[page].value = $("input[name='options']:checked").val()
    }
    else {
        answers.push({
            'questionNumber': content[page].id,
            'value': $("input[name='options']:checked").val()
        });
    }
}

function checkCompletion() {
    for (var f = 0; f < answers.length; f++) {
        if (answers[f].value == '') {
            completed =  false;
            break;
        }
        else completed = true;
    }
    completed == true && (next.addClass('hidden'), pagination.addClass('hidden'), answersWrapper.addClass('hidden'), questionsWrapper.addClass('hidden'), finish.removeClass('hidden'), console.log('done'));
}

function revealAnswered(){
    for (var f = 1; f <= answers.length; f++) {
        setPageState(f);
    }
}

function nextEmpty() {
    if(answers[i].value == ''){
        i++;
    }
    while (answers[i].value != ''){
        if(i==content.length-1){
            i=0;
        }
        else{
            i++;
            setPageState(i);
            console.log(i)
        }
        
    }
    showQuestion(i);
    return i;
}