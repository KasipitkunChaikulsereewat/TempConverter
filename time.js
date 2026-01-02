// time.js
function toSeconds(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'ms': return value / 1000;
        case 's': return value;
        case 'min': return value * 60;
        case 'hr': return value * 3600;
        case 'd': return value * 86400;
        case 'w': return value * 604800;
        case 'mth': return value * 2.592e+6;
        case 'yr': return value * 3.1536e+7;
        default: return "Please select a unit";
    }
}

function fromSeconds(seconds, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'ms': return seconds * 1000;
        case 's': return seconds;
        case 'min': return seconds / 60;
        case 'hr': return seconds / 3600;
        case 'd': return seconds / 86400;
        case 'w': return seconds / 604800;
        case 'mth': return seconds / 2.592e+6;
        case 'yr': return seconds / 3.1536e+7;
        default: return "Please select a unit";
    }
}

export {toSeconds, fromSeconds};
