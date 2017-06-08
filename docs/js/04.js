function xor (a,b){
    if(a==true && b==true){
        return false;
    }
    else if (a==true && b==false || a==false && b==true){
        return true;
    }
}
