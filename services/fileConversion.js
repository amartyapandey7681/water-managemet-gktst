var fs = require('fs');

function convertFiletoArray(){

    
    try {  
        var data = fs.readFileSync(this.arguments[0], 'utf8');
        data = data.toString()+'\n';

        this.array = pushFileDataToArray(data);
    } catch(e) {
        console.log('error>>>', e);
    }
    
}

function pushFileDataToArray(data){

        let temp =[];

        let inputArray =[];

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

        return inputArray;
}

module.exports = { convertFiletoArray };