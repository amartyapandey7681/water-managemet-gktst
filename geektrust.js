const { convertFiletoArray } = require("./services/fileConversion");
const { allotWater } = require("./waterCommandsHandling/allotwater");
const { addGuests } = require("./waterCommandsHandling/addguest");
const { bill } = require("./waterCommandsHandling/waterbill");

class waterManagement {

    constructor(arg,array,finalWaterAccount){

        this.arguments = arg;
        this.array = array;
        this.finalWaterAccount = finalWaterAccount;
    }
    waterLogic(){

        let arr = this.array;

        for(let x=0;x<arr.length;x++){

            if(arr[x][0]==="ALLOT_WATER")
                this.allotWater(arr[x]);
            if(arr[x][0]==="ADD_GUESTS")
                this.addGuests(arr[x]);
            if(arr[x][0]==="BILL")
                this.bill(arr[x]);
        }
    }
}

waterManagement.prototype.convertFiletoArray = convertFiletoArray ;
waterManagement.prototype.allotWater = allotWater;
waterManagement.prototype.addGuests = addGuests;
waterManagement.prototype.bill = bill;

var arguments = process.argv.slice(2);

let waterBillFinal = new waterManagement(arguments,[],{});

waterBillFinal.convertFiletoArray();

waterBillFinal.waterLogic();

