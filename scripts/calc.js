calculator=function(){
    this.value=0;
}

calculator.prototype.add=function(number){
    if(typeof(number)=="number"){
        this.value+=number;
    } else{
        alert("Error!");
    }
}