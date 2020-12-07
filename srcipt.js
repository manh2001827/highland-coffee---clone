function btn(x){
    if(x == "^2"){
        
        
        document.view.textview.value = document.view.textview.value.replace(slice,slice * slice);
    }else{
    document.view.textview.value = document.view.textview.value+x;
    }
}

function equal(){
    var exp=document.view.textview.value;
    if(exp){
    document.view.textview.value=eval(exp)
    }
}
function clean(){
    document.view.textview.value="";
}

function back(){
    var exp = document.view.textview.value ;
    document.view.textview.value = exp.substring(0,exp.length-1)
}
