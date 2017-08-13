const commonHigh = "Высокий показатель по этой шкале соответствует высокому уровню субъективного контро­ля над любыми значимыми ситуациями: интернальный контроль, интернальная личность. Такие люди считают, что большинство важных событий в их жизни есть результат их собственных действий, что они могут ими управлять, и, таким образом, они чув­ствуют свою собственную ответственность за эти события и за то, как складывается их жизнь в целом. Обобщение различных экспериментальных данных позволяет говорить об интерналах как о бо­лее уверенных в себе, более спокойных и благожелательных, более популярных в сравнении с экстерналами. Их отличает более пози­тивная система отношений к миру и большая осознанность смысла и целей жизни."
const commonLow = "Низкий показатель по этой шкале соответствует низкому уров­ню субъективного контроля: экстернальный контроль, экстернальная личность. Такие люди не видят связи между своими действия­ми и значимыми для них событиями их жизни, не считают себя способными контролировать их развитие. Они полагают, что большинство событий их жизни является результатом случая или действия других людей. Обобщение различных экспериментальных данных позволяет говорить об экстерналах как о людях с повышенной тревожностью, обеспокоенностью. Их отличает конформность, меньшая терпимость к другим и повышенная агрессивность, меньшая популярность в сравнении с интерналами."
const archievementsHigh = "Высокие показатели по этой шкале соответствуют высокому уровню субъективного контроля над эмоционально положительными событиями и ситуациями. Такие люди считают, что они сами добились всего того хорошего, что было и есть в их жизни, и что они способны с успе­хом преследовать свои цели в будущем."
const archievementsLow = "Низкие показатели по шка­ле свидетельствуют о том, что человек приписывает свои успехи, достижения и радости внешним обстоятельствам – везению, счаст­ливой судьбе или помощи других людей."
const failuresHigh = "Высокие показатели по этой шкале говорят о развитом чувстве субъективного контроля по отношению к отрицательным событиям и ситуациям, что проявляется в склонности обвинять самого себя в разнообраз­ных неприятностях и страданиях."
const failuresLow = "Низкие показатели свидетель­ствуют о том, что человек склонен приписывать ответственность за подобные события другим людям или считать их результатом невезения."
const familyHigh = "Высо­кие показатели означают, что человек считает себя ответственным за события, происходящие в его семейной жизни."
const familyLow = "Низкие указыва­ют на то, что субъект считает не себя, а своих партнеров причиной значимых ситуаций, возникающих в его семье."
const productionHigh = "Высокие показатели свидетельствует и том, что че­ловек считает свои действия важным фактором организации соб­ственной производственной деятельности, складывающихся отно­шении в коллективе, своего продвижения и т.д."
const productionLow = "Низкие указывают на то, что человек склонен приписывать более важное значе­ние внешним обстоятельствам — руководству, товарищам по рабо­те, везению-невезению."
const interpersonalHigh = "Высокие показатели свидетельствуют о том, что человек считает именно себя ответственным за построение межличностных отношений с окружающими."
const interpersonalLow = "Низкие указывают на то, что человек склонен приписывать более важное значение в этом процессе обстоятельствам, случаю или окружающим его людям."
const healthHigh = "Высокие показатели свидетельствуют о том, что человек считает себя во многом ответственным за свое здоровье: если он болен, то обвиняет в этом себя и полагает, что выздоровление во многом за­висит от его действий."
const healthLow = "Человек с низкими показателями по этой шкале считает болезнь и здоровье результатом случая и надеется на то, что выздоровление придет в результате действий других лю­дей, прежде всего врачей."

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
    evaluateCommon() <= 5 ? $('#common').append(commonLow) :  $('#common').append(commonHigh)
    evaluateArchievements() <= 5 ? $('#archievements').append(archievementsLow) :  $('#archievements').append(archievementsHigh)
    evaluateFailures() <= 5 ? $('#failure').append(failuresLow) :  $('#failure').append(failuresHigh)
    evaluateFamily() <= 5 ? $('#family').append(familyLow) :  $('#family').append(familyHigh)
    evaluateProduction() <= 5 ? $('#production').append(productionLow) :  $('#production').append(productionHigh)
    evaluateInterpersonal() <= 5 ? $('#interpersonal').append(interpersonalLow) :  $('#interpersonal').append(interpersonalHigh)
    evaluateHealth() <= 5 ? $('#health').append(healthLow) :  $('#health').append(healthHigh)
}