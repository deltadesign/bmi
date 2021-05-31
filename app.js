
document.getElementById('get-bmi').addEventListener('click', bmi)

document.querySelectorAll('#reset').forEach((item)=>{
  item.addEventListener('click', resetForm)
})


function bmi(e) {
  e.preventDefault()

  let w = parseFloat(document.getElementById('weight').value);

  let h = Math.pow(document.getElementById('height').value, 2) / 100;

  let result = document.querySelector('#result');

  if(!h || !w){
    return showErr('bad');
  }
  
  let bmi = parseFloat(((w / h) * 100).toFixed(2));

  if (bmi < 18.5){
    result.innerHTML = `A Body Mass Index of ${bmi} is considered underweight`;
  }else if (bmi > 30) {
      result.innerHTML = `A Body Mass Index of ${bmi} is considered obese`
  } else if (bmi > 25) {
    result.innerHTML = `A Body Mass Index of ${bmi} is considered overweight`
  } else {
    result.innerHTML = `A Body Mass Index of ${bmi} is considered healthy`
  }

  result.style.display = 'block';
 
}


function resetForm(){
  document.querySelector('#result').style.display = 'none';
  console.log('reset')
}

function openMeasure(evt, unitType) {
  var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(unitType).style.display = "block";
  evt.currentTarget.className += " active";
}


function showErr(type){
  if (type === "bad"){
    document.querySelector('.err').classList.add('bad')
  }

   setTimeout(() => {
    document.querySelector('.err').classList.remove('bad');
  }, 3000);
 
}
