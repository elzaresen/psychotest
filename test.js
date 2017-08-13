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