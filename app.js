
document.getElementById('get-bmi').addEventListener('click', bmi)


function bmi(e){
  e.preventDefault()

  let w = document.getElementById('weight').value;

  let h = document.getElementById('height').value;

  let result = document.getElementById('result');
  result.innerHTML = ((w / (h*h)*100)*100).toFixed(2);
}

