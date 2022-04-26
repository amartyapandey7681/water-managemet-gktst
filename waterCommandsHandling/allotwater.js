
const  valueOfConstants = require("../constants/essentialConsts");
function allotWater(arr){

    let people ;
    
    if(arr[1]== valueOfConstants.peopleInAparments["3bedroom"]["room"])
        people = valueOfConstants.peopleInAparments["3bedroom"]["people"];

    if(arr[1]== valueOfConstants.peopleInAparments["2bedroom"]["room"])
        people = valueOfConstants.peopleInAparments["2bedroom"]["people"];

    let waterConsumed = people * valueOfConstants.daysInMonth * valueOfConstants.waterConsumedPerPerson ;

    let ratio = arr[2];

    let totalRatio = ratio.split(':');
    let corpWater = parseFloat(totalRatio[0]);
    let boreWater = parseFloat(totalRatio[1]);

    let amount = waterConsumed * ( corpWater * valueOfConstants.priceOfBoreWater + boreWater * valueOfConstants.priceOfCorpWater ) / (corpWater + boreWater) ;

    this.finalWaterAccount["totalWater"] = waterConsumed ;
    this.finalWaterAccount["totalAmount"] = amount ;

    
}

module.exports = { allotWater };