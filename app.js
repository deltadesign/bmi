
document.getElementById('get-bmi').addEventListener('click', bmi)


function bmi(e) {
  e.preventDefault()

  let w = document.getElementById('weight').value;

  let h = Math.pow(document.getElementById('height').value, 2) / 100;

  let result = document.getElementById('result');
  let form = document.getElementById('form');

  form.style.display = 'none';

  let bmi = parseFloat(((w / h) * 100).toFixed(2));

  if (bmi < 18.5){
    result.innerHTML = `A BMI of ${bmi} is considered underweight`;
  } else if (bmi > 25) {
    result.innerHTML = `A BMI of ${bmi} is considered overweight`
  } else {
    result.innerHTML = `A BMI of ${bmi} is considered healthy`
  }


  result.style.display = 'block';
  // result.innerHTML = (((w / h) * 100).toFixed(2));
}

