function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("swim")); // This Saturday, I want to swim!
console.log(saturdayFun());   


const mondayWork = function(activity) {
  if (activity === undefined) {
    activity = "go to the office";
  }
  return `This Monday, I will ${activity}.`;
}; 
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); // You are !!!amazing!!!
console.log(encouragingPromptFunction());           // You are *special*!

