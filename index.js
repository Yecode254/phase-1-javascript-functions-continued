// code your solution here
function saturdayFun(activity=roller-skate){
    return `This Saturday, I want to ${activity}`
}
const fn = function() {
    return "Yet more razzling.";
};

const mondayWork = function(st = "go to the office") {
    return `This Monday, I will ${st}.`;
};

function wrapAdjective(wrap = "*") {
    return function(adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`;
    }
}
