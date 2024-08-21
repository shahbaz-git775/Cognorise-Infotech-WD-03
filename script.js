document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const result = document.getElementById('result');

    bmiValue.textContent = bmi;

    if (bmi < 18.5) {
        bmiCategory.textContent = 'You are underweight.';
    } else if (bmi < 24.9) {
        bmiCategory.textContent = 'You have a normal weight.';
    } else if (bmi < 29.9) {
        bmiCategory.textContent = 'You are overweight.';
    } else {
        bmiCategory.textContent = 'You are obese.';
    }

    result.classList.remove('hidden');
});
