var var1=0;
var var2=0;
var dot1=0;
var dot2=0;
var operator=null;
var screen = document.getElementById("calcscreen");
var buttons = document.getElementsByClassName("btn");
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var value = this.getAttribute('data-value');
        if(value >= '0' && value <= '9'){
            value=parseFloat(value);
            if(operator == null){
                if(var1 == 0){
                    var1=value;
                }
                else{
                    var1=var1*10;
                    var1 += value;
                    if(dot1 != 0){
                        var1 = var1/dot1;
                    }
                }
                screen.innerHTML=var1;
            }
            else{
                if(var2 == 0){
                    var2=value;
                }
                else{
                    var2=var2*10;
                    var2 += value;
                    if(dot2 != 0){
                        var2 = var2/dot2;
                    }
                }
                screen.innerHTML=var2;
            }
        }
        else if(value == "."){
            if(operator == null){
                dot1 = 10;
            }
            else{
                dot2 = 10;
            }
        }
        else if(value == "AC"){
            var1=0;
            var2=0;
            operator=null;
            screen.innerHTML="";
            dot1=0;
            dot2=0;
        }
        else if(value == "="){
            if(var1 > 0 && operator == "/" && var2 == 0){
                screen.innerHTML="Error";
            }
            else{
                screen.innerHTML = eval(var1+" "+operator+" "+var2);  
            }
        }
        else{
            operator=value;
        }
    })
}
