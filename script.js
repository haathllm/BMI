
function calculateBMI() {

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert("Please enter valid height and weight values.");
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } 
    else {
        category = "Obese";
    }

    document.getElementById("bmiValue").innerText = "Your BMI: " + bmi.toFixed(2);
    document.getElementById("bmiCategory").innerText = "Category: " + category;

    document.getElementById("result").style.display = "block";
}
