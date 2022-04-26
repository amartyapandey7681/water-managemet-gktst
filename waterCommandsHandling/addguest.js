function addGuests(arr){

    if(this.finalWaterAccount["guestCount"])
        this.finalWaterAccount["guestCount"] += parseInt(arr[1]);
    else
        this.finalWaterAccount["guestCount"] = parseInt(arr[1]);

}
module.exports = { addGuests };