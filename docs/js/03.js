function classify (n) {
    if(n>=0 && n%10 == 7){
        return 1;
    }
    else if (n>=0 && n%10!=7){
        return -1;
    }


    else if(n<0 && n%10==-7){
        return 3;
    }
    else if(n<0 && n%10!=-7){
        return -1;
    }
}
