function cm2m(value) {
if (value>=0){
  return value / 100;
    }
else {
    return 0;
}
}

function bmi(height, weight) {
    if (height<=0 || weight<=0){
        return 0;
    }
    else{
  height = cm2m(height);
  height = height * height;
  return weight / height;
    }
} 
