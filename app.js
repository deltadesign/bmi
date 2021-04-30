
document.getElementById('get-bmi').addEventListener('click', bmi)


function bmi(e){
  e.preventDefault()

  let w = document.getElementById('weight').value;

  let h = Math.pow(document.getElementById('height').value, 2) / 100;

  let result = document.getElementById('result');
  result.innerHTML = (((w / h)*100).toFixed(2));
}

