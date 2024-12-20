function calculateArea() {
  var a = document.getElementById("topBase").value;
  var b = document.getElementById("bottomBase").value;
  var h = document.getElementById("height").value;

  var area = ((Number(a) + Number(b)) / 2) * Number(h);

  document.getElementById("areaResult").textContent = area.toFixed(2);
}
