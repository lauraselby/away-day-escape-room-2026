const form = document.getElementById('myForm');
const field1 = document.getElementById('field1')
const field2 = document.getElementById('field2')
const field3 = document.getElementById('field3')
const field4 = document.getElementById('field4')
const checkBtn1 = document.getElementById('checkBtn1');
const checkBtn2 = document.getElementById('checkBtn2');
const checkBtn3 = document.getElementById('checkBtn3');
const checkBtn4 = document.getElementById('checkBtn4');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');

let field1Valid = false;
let field2Valid = false;
let field3Valid = false;
let field4Valid = false;

// Event listeners for check buttons
checkBtn1.addEventListener('click', () => validateField(field1));
checkBtn2.addEventListener('click', () => validateField(field2));
checkBtn3.addEventListener('click', () => validateField(field3));
checkBtn4.addEventListener('click', () => validateField(field4));

// Function to validate individual fields
function validateField(field) {
  errorMessage.textContent = ''; // Clear any previous error message

  const expectedValue = {
    field1: "public",
    field2: "limitations",
    field3: "suitable",
    field4: "comparable"
  }[field.id]; // Access value using field ID as a property key

  // Convert both user input and expected value to lowercase and trim whitespace
  const lowerCaseInput = field.value.toLowerCase().trim();
  const lowerCaseExpectedValue = expectedValue.toLowerCase().trim();


  if (lowerCaseInput !== lowerCaseExpectedValue) {
    errorMessage.textContent = `Incorrect value for field ${field.id.slice(5)}.`;
    return; // Exit the function if validation fails
  }

  // Update validation status for the specific field
  if (field === field1) {
    field1Valid = true;
    document.getElementById('tick1').classList.remove('hidden'); // Show tick icon for field1
  } else if (field === field2) {
    field2Valid = true;
    document.getElementById('tick2').classList.remove('hidden'); // Show tick icon for field2
  } else if (field === field3) {
    field3Valid = true;
    document.getElementById('tick3').classList.remove('hidden'); // Show tick icon for field3
  } else if (field === field4) {
    field4Valid = true;
    document.getElementById('tick4').classList.remove('hidden'); // Show tick icon for field4
  }

  // Check if all fields are valid and enable div 
  const hiddenButtonDiv = document.getElementById('hiddenButtonDiv'); 
  hiddenButtonDiv.style.display = field1Valid && field2Valid && field3Valid && field4Valid ? 'block' : 'none';

}
