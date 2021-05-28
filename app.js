
document.getElementById('get-bmi').addEventListener('click', bmi)

document.querySelectorAll('#reset').forEach((item)=>{
  item.addEventListener('click', resetForm)
})


function bmi(e) {
  e.preventDefault()

  let w = document.getElementById('weight').value;

  let h = Math.pow(document.getElementById('height').value, 2) / 100;

  let result = document.querySelector('#result');

  if(!h || !w){
    return showErr('bad')
  }


  let bmi = parseFloat(((w / h) * 100).toFixed(2));

  if (bmi < 18.5){
    result.innerHTML = `A Body Mass Index of ${bmi} is considered Obese`;
  }else if (bmi > 30) {
      result.innerHTML = `A Body Mass Index of ${bmi} is considered overweight`
  } else if (bmi > 25) {
    result.innerHTML = `A Body Mass Index of ${bmi} is considered overweight`
  } else {
    result.innerHTML = `A Body Mass Index of ${bmi} is considered healthy`
  }

  result.style.display = 'block';
  // result.innerHTML = (((w / h) * 100).toFixed(2));
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
    document.querySelector('.err').style.visibility = 'visible';
  }

  setTimeout(() => {
    document.querySelector('.err').style.visibility = 'hidden';
  }, 3000);
 
}
