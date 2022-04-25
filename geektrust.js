var fs = require('fs');
const { parse } = require('path');

class waterManagement {

    constructor(arg,array,finalWaterAccount){

        this.arguments = arg;
        this.array = array;
        this.finalWaterAccount = finalWaterAccount;
    }
    
    convertFiletoArray(){

        let temp =[];

        let inputArray =[];
        try {  
            var data = fs.readFileSync(this.arguments[0], 'utf8');
            data = data.toString()+'\n';
            let ini = 0;
            for(let x=0;x<data.length;x++){
                if(data[x]==' '){
                    temp.push(data.substring(ini,x))
                    ini=x+1
                }else if(data[x]=='\n'){
                    temp.push(data.substring(ini,x))
                    ini=x+1
                    inputArray.push(temp);
                    temp=[];
                }
            }
        } catch(e) {
            console.log('error>>>', e);
        }
        this.array = inputArray;
    }

    allotWater(arr){

        let people ;

        if(arr[1]=="3")
            people = 5;

        if(arr[1]=="2")
            people = 3;
        
        let waterConsumed = people * 30 * 10 ;

        let ratio = arr[2];

        let totalRatio = ratio.split(':');
        let corpWater = parseFloat(totalRatio[0]);
        let boreWater = parseFloat(totalRatio[1]);

        let amount = waterConsumed * ( corpWater + boreWater * 1.5 ) / (corpWater + boreWater) ;

        this.finalWaterAccount["totalWater"] = waterConsumed ;
        this.finalWaterAccount["totalAmount"] = amount ;

        
    }

    addGuests(arr){

        if(this.finalWaterAccount["guestCount"])
            this.finalWaterAccount["guestCount"] += parseInt(arr[1]);
        else
            this.finalWaterAccount["guestCount"] = parseInt(arr[1]);

    }

    bill(arr){

        let totalWater = this.finalWaterAccount["totalWater"];
        let amount     = this.finalWaterAccount["totalAmount"];
        let guestCount = this.finalWaterAccount["guestCount"];


        if(guestCount){

            let guestWater = guestCount * 30 * 10;
            let guestBill = 0;

            if(guestWater <=  500)
                guestBill += guestWater * 2 ;
            if(guestWater >= 501 && guestWater <= 1500)
                guestBill += (1000 + (guestWater - 500) * 3 );
            if(guestWater >= 1501 && guestWater <= 3000)
                guestBill += (1000 + 3000 + (guestWater - 1500) * 5 );
            if(guestWater >= 3001)
                guestBill += (1000 + 3000 + 7500 + (guestWater - 3000) * 8 );

            amount += guestBill ;
            totalWater += guestWater;

        }

        console.log(totalWater," ",Math.ceil(amount));
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

var arguments = process.argv.slice(2);

let waterBillFinal = new waterManagement(arguments,[],{});

waterBillFinal.convertFiletoArray();

waterBillFinal.waterLogic();

