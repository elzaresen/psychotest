const commonDescription = [
    {'result': 0, 'descritption': 'common is: 0'},
    {'result': 1, 'descritption': 'common is: 1'},
    {'result': 2, 'descritption': 'common is: 2'},
    {'result': 3, 'descritption': 'common is: 3'},
    {'result': 4, 'descritption': 'common is: 4'},
    {'result': 5, 'descritption': 'common is: 5'},
    {'result': 6, 'descritption': 'common is: 6'},
    {'result': 7, 'descritption': 'common is: 7'},
    {'result': 8, 'descritption': 'common is: 8'},
    {'result': 9, 'descritption': 'common is: 9'},
    {'result': 10, 'descritption': 'common is: 10'},
]

const archievementsDescription = [
    {'result': 0, 'descritption': 'achievements is: 0'},
    {'result': 1, 'descritption': 'achievements is: 1'},
    {'result': 2, 'descritption': 'achievements is: 2'},
    {'result': 3, 'descritption': 'achievements is: 3'},
    {'result': 4, 'descritption': 'achievements is: 4'},
    {'result': 5, 'descritption': 'achievements is: 5'},
    {'result': 6, 'descritption': 'achievements is: 6'},
    {'result': 7, 'descritption': 'achievements is: 7'},
    {'result': 8, 'descritption': 'achievements is: 8'},
    {'result': 9, 'descritption': 'achievements is: 9'},
    {'result': 10, 'descritption': 'achievements is: 10'},
]

const failureDescription = [
    {'result': 0, 'descritption': 'failures is: 0'},
    {'result': 1, 'descritption': 'failures is: 1'},
    {'result': 2, 'descritption': 'failures is: 2'},
    {'result': 3, 'descritption': 'failures is: 3'},
    {'result': 4, 'descritption': 'failures is: 4'},
    {'result': 5, 'descritption': 'failures is: 5'},
    {'result': 6, 'descritption': 'failures is: 6'},
    {'result': 7, 'descritption': 'failures is: 7'},
    {'result': 8, 'descritption': 'failures is: 8'},
    {'result': 9, 'descritption': 'failures is: 9'},
    {'result': 10, 'descritption': 'failures is: 10'},
]

const familyDescription = [
    {'result': 0, 'descritption': 'family is: 0'},
    {'result': 1, 'descritption': 'family is: 1'},
    {'result': 2, 'descritption': 'family is: 2'},
    {'result': 3, 'descritption': 'family is: 3'},
    {'result': 4, 'descritption': 'family is: 4'},
    {'result': 5, 'descritption': 'family is: 5'},
    {'result': 6, 'descritption': 'family is: 6'},
    {'result': 7, 'descritption': 'family is: 7'},
    {'result': 8, 'descritption': 'family is: 8'},
    {'result': 9, 'descritption': 'family is: 9'},
    {'result': 10, 'descritption': 'family is: 10'},
]

const productionDescription = [
    {'result': 0, 'descritption': 'production is: 0'},
    {'result': 1, 'descritption': 'production is: 1'},
    {'result': 2, 'descritption': 'production is: 2'},
    {'result': 3, 'descritption': 'production is: 3'},
    {'result': 4, 'descritption': 'production is: 4'},
    {'result': 5, 'descritption': 'production is: 5'},
    {'result': 6, 'descritption': 'production is: 6'},
    {'result': 7, 'descritption': 'production is: 7'},
    {'result': 8, 'descritption': 'production is: 8'},
    {'result': 9, 'descritption': 'production is: 9'},
    {'result': 10, 'descritption': 'production is: 10'},
]
const interpersonalDescription = [
    {'result': 0, 'descritption': 'interpersonal is: 0'},
    {'result': 1, 'descritption': 'interpersonal is: 1'},
    {'result': 2, 'descritption': 'interpersonal is: 2'},
    {'result': 3, 'descritption': 'interpersonal is: 3'},
    {'result': 4, 'descritption': 'interpersonal is: 4'},
    {'result': 5, 'descritption': 'interpersonal is: 5'},
    {'result': 6, 'descritption': 'interpersonal is: 6'},
    {'result': 7, 'descritption': 'interpersonal is: 7'},
    {'result': 8, 'descritption': 'interpersonal is: 8'},
    {'result': 9, 'descritption': 'interpersonal is: 9'},
    {'result': 10, 'descritption': 'interpersonal is: 10'},
]
const healthDescription = [
    {'result': 0, 'descritption': 'health is: 0'},
    {'result': 1, 'descritption': 'health is: 1'},
    {'result': 2, 'descritption': 'health is: 2'},
    {'result': 3, 'descritption': 'health is: 3'},
    {'result': 4, 'descritption': 'health is: 4'},
    {'result': 5, 'descritption': 'health is: 5'},
    {'result': 6, 'descritption': 'health is: 6'},
    {'result': 7, 'descritption': 'health is: 7'},
    {'result': 8, 'descritption': 'health is: 8'},
    {'result': 9, 'descritption': 'health is: 9'},
    {'result': 10, 'descritption': 'health is: 10'},
]








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

function evaluationDescription(){
    $('#common').append(commonDescription[evaluateCommon()].descritption)
    $('#archievements').append(archievementsDescription[evaluateArchievements()].descritption)
    $('#failure').append(failureDescription[evaluateFailures()].descritption)
    $('#family').append(familyDescription[evaluateFamily()].descritption)
    $('#production').append(productionDescription[evaluateProduction()].descritption)
    $('#interpersonal').append(interpersonalDescription[evaluateInterpersonal()].descritption)
    $('#health').append(healthDescription[evaluateHealth()].descritption)




    // evaluateCommon() <= 5 ? $('#common').append(commonLow) :  $('#common').append(commonHigh)
    // evaluateArchievements() <= 5 ? $('#archievements').append(archievementsLow) :  $('#archievements').append(archievementsHigh)
    // evaluateFailures() <= 5 ? $('#failure').append(failuresLow) :  $('#failure').append(failuresHigh)
    // evaluateFamily() <= 5 ? $('#family').append(familyLow) :  $('#family').append(familyHigh)
    // evaluateProduction() <= 5 ? $('#production').append(productionLow) :  $('#production').append(productionHigh)
    // evaluateInterpersonal() <= 5 ? $('#interpersonal').append(interpersonalLow) :  $('#interpersonal').append(interpersonalHigh)
    // evaluateHealth() <= 5 ? $('#health').append(healthLow) :  $('#health').append(healthHigh)
}