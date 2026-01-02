// length.js
const toMeter = (value, unit) => {
    switch(unit){
        case '': throw new Error ("Please select a unit");
        case "nm": return value/1e+9;
        case 'um': return value / 1e+6;
        case 'mm': return value / 1000;
        case 'cm': return value / 100;
        case 'in': return value * 0.0254;
        case 'ft': return value * 0.3048;
        case 'yd': return value * 0.9144;
        case 'm': return value;
        case 'km': return value * 1000;
        case 'mi': return value * 1609.34;
        case 'nmi': return value * 1852;
        case "ly": return value * 9.461e+15;
        case "pc": return value * 3.086e+16;
        case "au": return value * 1.496e+11;
        default: throw new Error ("Please select a unit");
    }
}

const fromMeter = (meters, unit) => {
    switch(unit){
        case '': throw new Error ("Please select a unit");
        case "nm": return meters * 1e+9;
        case 'um': return meters * 1e+6;
        case 'mm': return meters * 1000;
        case 'cm': return meters * 100;
        case 'in': return meters / 0.0254;
        case 'ft': return meters / 0.3048;
        case 'yd': return meters / 0.9144;
        case 'm': return meters;
        case 'km': return meters / 1000;
        case 'mi': return meters / 1609.34;
        case 'nmi': return meters / 1852;
        case "ly": return meters / 9.461e+15;
        case "pc": return meters / 3.086e+16;
        case "au": return meters / 1.496e+11;
        default: throw new Error ("Please select a unit");
    }
}

export {toMeter, fromMeter};
