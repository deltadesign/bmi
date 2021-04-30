let weight;

let height;


document.getElementById('get-bmi').addEventListener('click', bmi(weight, height))


function bmi(w,h){
  let result = document.getElementById('result');
  result.innerHTML = (w / Math.pow(h, 2) *100).toFixed(2);
}

