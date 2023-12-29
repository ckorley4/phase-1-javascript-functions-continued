// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (work = 'go to the office') {
  return `This Monday, I will ${work}.`
}

function outer(greetings, msg = "it's a fine day") {
  return function (name, lang = 'Java') {
    console.log(`${greetings}, ${name}! ${msg} ${lang}`)
    return `${greetings}, ${name}! ${msg} ${lang}`
  }
}

function wrapAdjective(flair = '*') {
  return function inner(param = 'special') {
    return `You are ${flair}${param}${flair}!`
  }
}
