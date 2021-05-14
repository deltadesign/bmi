
document.getElementById('get-bmi').addEventListener('click', bmi)


function bmi(e) {
  e.preventDefault()

  let w = document.getElementById('weight').value;

  let h = Math.pow(document.getElementById('height').value, 2) / 100;

  let result = document.querySelector('#result');
  let form = document.getElementById('form');

  // form.style.display = 'none';

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

function openMeasure(evt, unitType) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(unitType).style.display = "block";
  evt.currentTarget.className += " active";
}

