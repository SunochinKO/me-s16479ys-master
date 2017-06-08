function gcd(a,b){
    if (a==1&&b==1){
        return 1;
    }
    else if (a==1&&b!=1 ||a!=1&&b==1){
        return 1;
    }
    else if (a==b){
        return a;
    }
    else {
          r = a % b;
        
        while(r!=0){
            a = b;
            b = r;
            r = a % b;
        }
        return b;
    }
    
}

function isPrimeNumber(n){ 
    if (n==1){
        return false;
    }
    else if (n%2 == 0) {
        return n == 2; 
    }
    else if (n%3 == 0) {
        return n == 3;
    }
     var limit = Math.sqrt(n);
      for (var i=5, d=2; i <= limit; i+=d, d=6-d) { 
          if (n%i == 0) return false;
         }
return true;
}
