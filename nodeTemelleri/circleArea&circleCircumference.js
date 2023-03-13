//alan hesaplama
function circleArea(yaricap) {
  let area = 3.14 * yaricap * yaricap
  console.log(area)
}

//cevre hesaplama
function circleCircumference(yaricap) {
  let circumference = 2 * 3.14 * yaricap
  console.log(circumference)
}

//export islemi
module.exports = {
  circleArea,
  circleCircumference
}