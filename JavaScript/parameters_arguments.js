<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>Finding the largest number.</p>
<p id="demo"></p>

<script>
function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
document.getElementById("demo").innerHTML = findMax(4, 5, 6);
</script>

</body>
</html>
