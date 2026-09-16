// Generic puzzle-answer checker, shared by every page in questions/.
//
// Usage in HTML:
//   <form class="puzzle-form" data-reveals="next-step">
//     <input class="puzzle-input" data-answer="expected text">
//     ...
//     <p class="error-message"></p>
//   </form>
//   <div id="next-step" class="hidden"> ... link to the next page ... </div>
//
// A form can have one input (a single code) or several (e.g. the year +
// coordinates gate on the home page) - every input must be correct before
// the form reveals the element named in data-reveals.
// Matching is case-insensitive and ignores leading/trailing whitespace.

document.querySelectorAll('form.puzzle-form').forEach((form) => {
  const errorMessage = form.querySelector('.error-message');
  const revealTarget = document.getElementById(form.dataset.reveals);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('.puzzle-input');
    let allCorrect = true;

    inputs.forEach((input) => {
      const expected = (input.dataset.answer || '').trim().toLowerCase();
      const actual = input.value.trim().toLowerCase();
      const correct = actual !== '' && expected === actual;
      input.classList.toggle('input-incorrect', !correct);
      if (!correct) allCorrect = false;
    });

    if (allCorrect) {
      if (errorMessage) errorMessage.textContent = '';
      form.classList.add('hidden');
      if (revealTarget) revealTarget.classList.remove('hidden');
    } else if (errorMessage) {
      errorMessage.textContent = 'Not quite right - have another look and try again.';
    }
  });
});
