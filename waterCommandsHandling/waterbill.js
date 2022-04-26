const  waterLevel = require("../constants/tankWaterConst").waterLevels;
const  valueOfConstants = require("../constants/essentialConsts");
function bill(){

        let totalWater = this.finalWaterAccount["totalWater"];
        let amount     = this.finalWaterAccount["totalAmount"];
        let guestCount = this.finalWaterAccount["guestCount"];

        if(guestCount){

            let guestWater = guestCount * valueOfConstants.daysInMonth * valueOfConstants.waterConsumedPerPerson;
            let guestBill = 0;

            const aboveTier1DefaultPrice = (waterLevel.tier1.max - waterLevel.tier1.min + 1) * waterLevel.tier1.price ;
            const aboveTier2DefaultPrice = (waterLevel.tier2.max - waterLevel.tier2.min + 1) * waterLevel.tier2.price ;
            const aboveTier3DefaultPrice = (waterLevel.tier3.max - waterLevel.tier3.min + 1) * waterLevel.tier3.price ;


            if(guestWater <=  waterLevel.tier1.max)
                guestBill += guestWater * waterLevel.tier1.price ;
            if(guestWater >= waterLevel.tier2.min && guestWater <= waterLevel.tier2.max)
                guestBill += (aboveTier1DefaultPrice + (guestWater - waterLevel.tier1.max) * waterLevel.tier2.price );
            if(guestWater >= waterLevel.tier3.min && guestWater <= waterLevel.tier3.max)
                guestBill += (aboveTier1DefaultPrice + aboveTier2DefaultPrice + (guestWater - waterLevel.tier2.max) * waterLevel.tier3.price );
            if(guestWater >= waterLevel.tier4.min)
                guestBill += (aboveTier1DefaultPrice + aboveTier2DefaultPrice + aboveTier3DefaultPrice + (guestWater - waterLevel.tier3.max) * waterLevel.tier4.price );

            amount += guestBill ;
            totalWater += guestWater;

        }

        console.log(totalWater," ",Math.ceil(amount));
    }
    module.exports = { bill };