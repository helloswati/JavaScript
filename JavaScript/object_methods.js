<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};
person.name = function() {
  return this.firstName + " " + this.lastName;
};

document.getElementById("demo").innerHTML =
"My father is " + person.name(); 
</script>

</body>
</html>