
const expandButton1 = document.getElementById('expandButton1');
const expandableContent1 = document.querySelector('.expandable-content-data');

expandButton1.addEventListener('click', toggleExpansion1);

function toggleExpansion1() {
  if (expandableContent1.style.display === 'none') {
    expandableContent1.classList.add('show'); // Add 'show' class for animation
    expandableContent1.style.display = 'block'; // Show the content
    expandButton1.style.display = 'none'; // Hide the button
  } else {
    expandableContent1.classList.remove('show'); // Remove 'show' class to stop animation
    expandableContent1.style.display = 'none'; // Hide the content
    expandButton1.style.display = 'block'; // Show the button again 
  }
}

const expandButton2 = document.getElementById('expandButton2');
const expandableContent2 = document.querySelector('.expandable-content-process');

expandButton2.addEventListener('click', toggleExpansion2);

function toggleExpansion2() {
  if (expandableContent2.style.display === 'none') {
    expandableContent2.classList.add('show'); // Add 'show' class for animation
    expandableContent2.style.display = 'block'; // Show the content
    expandButton2.style.display = 'none'; // Hide the button
  } else {
    expandableContent2.classList.remove('show'); // Remove 'show' class to stop animation
    expandableContent2.style.display = 'none'; // Hide the content
    expandButton2.style.display = 'block'; // Show the button again 
  }
}

const expandButton3 = document.getElementById('expandButton3');
const expandableContent3 = document.querySelector('.expandable-content-story');

expandButton3.addEventListener('click', toggleExpansion3);

function toggleExpansion3() {
  if (expandableContent3.style.display === 'none') {
    expandableContent3.classList.add('show'); // Add 'show' class for animation
    expandableContent3.style.display = 'block'; // Show the content
    expandButton3.style.display = 'none'; // Hide the button
  } else {
    expandableContent3.classList.remove('show'); // Remove 'show' class to stop animation
    expandableContent3.style.display = 'none'; // Hide the content
    expandButton3.style.display = 'block'; // Show the button again 
  }
}

const field1 = document.getElementById('field1')
const field2 = document.getElementById('field2')
const field3 = document.getElementById('field3')
const checkBtn1 = document.getElementById('checkBtn1');
const checkBtn2 = document.getElementById('checkBtn2');
const checkBtn3 = document.getElementById('checkBtn3');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');

let field1Valid = false;
let field2Valid = false;
let field3Valid = false;

// Event listeners for check buttons
checkBtn1.addEventListener('click', () => validateField(field1));
checkBtn2.addEventListener('click', () => validateField(field2));
checkBtn3.addEventListener('click', () => validateField(field3));

// Function to validate individual fields
function validateField(field) {
  errorMessage.textContent = ''; // Clear any previous error message

  const expectedValue = {
    field1: "tiramisu",
    field2: "error in code",
    field3: "marathon meltdown"
  }[field.id]; // Access value using field ID as a property key

  // Convert both user input and expected value to lowercase and trim any whitespace
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
  } else {
    field3Valid = true;
    document.getElementById('tick3').classList.remove('hidden'); // Show tick icon for field3
  }

  // Check if all fields are valid and display/hide hidden div
  const hiddenPipelineDiv = document.getElementById('hiddenPipelineDiv'); 
  hiddenPipelineDiv.style.display = field1Valid && field2Valid && field3Valid ? 'block' : 'none';
}


