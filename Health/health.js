function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let resultText;
        if (bmi < 18.5) {
            resultText = `Your BMI is ${bmi}. You are underweight.`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText = `Your BMI is ${bmi}. You have a normal weight.`;
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText = `Your BMI is ${bmi}. You are overweight.`;
        } else {
            resultText = `Your BMI is ${bmi}. You are obese.`;
        }

        document.getElementById('result').textContent = resultText;
    } else {
        document.getElementById('result').textContent = 'Please enter both height and weight.';
    }
}

console.logresultText()
