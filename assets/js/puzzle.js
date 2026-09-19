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

// Multiple-choice variant, for puzzles where players pick the correct
// option instead of typing a code.
//
// Usage in HTML:
//   <div class="choice-group" data-reveals="next-step">
//     <button type="button" class="choice-option" data-correct="true">...</button>
//     <button type="button" class="choice-option" data-correct="false">...</button>
//     ...
//   </div>
//   <p class="error-message"></p>
//   <div id="next-step" class="hidden"> ... link to the next page ... </div>

// Wrong-guess cooldown overlay, shared by every choice-group on the page.
// Stops players from just clicking through every option back to back.
const COOLDOWN_SECONDS = 20;

function runCooldown(options) {
  let overlay = document.getElementById('cooldown-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'cooldown-overlay';
    overlay.className = 'cooldown-overlay hidden';
    overlay.innerHTML = '<div class="cooldown-box">'
      + '<p>Not quite right - the system needs a moment to reset before you try again.</p>'
      + '<div class="cooldown-count"></div></div>';
    document.body.appendChild(overlay);
  }

  const countEl = overlay.querySelector('.cooldown-count');
  options.forEach((option) => { option.disabled = true; });
  overlay.classList.remove('hidden');

  let remaining = COOLDOWN_SECONDS;
  countEl.textContent = remaining;

  const tick = setInterval(() => {
    remaining -= 1;
    countEl.textContent = remaining;
    if (remaining <= 0) {
      clearInterval(tick);
      overlay.classList.add('hidden');
      options.forEach((option) => { option.disabled = false; });
    }
  }, 1000);
}

document.querySelectorAll('.choice-group').forEach((group) => {
  const errorMessage = group.parentElement.querySelector('.error-message');
  const revealTarget = document.getElementById(group.dataset.reveals);
  const options = group.querySelectorAll('.choice-option');

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const correct = option.dataset.correct === 'true';

      if (correct) {
        if (errorMessage) errorMessage.textContent = '';
        group.classList.add('hidden');
        if (revealTarget) revealTarget.classList.remove('hidden');
      } else {
        option.classList.add('input-incorrect');
        if (errorMessage) errorMessage.textContent = 'Not quite the right page - have another look and try again.';
        runCooldown(options);
      }
    });
  });
});

// Plain reveal-on-click, for pacing a page into stages with no correctness
// check (e.g. "click here when you're ready" before the real puzzle).
//
// Usage in HTML:
//   <button type="button" class="reveal-btn" data-reveals="dials-section">I'm ready</button>
//   <div id="dials-section" class="hidden"> ... </div>

document.querySelectorAll('.reveal-btn').forEach((button) => {
  const revealTarget = document.getElementById(button.dataset.reveals);

  button.addEventListener('click', () => {
    button.classList.add('hidden');
    if (revealTarget) revealTarget.classList.remove('hidden');
  });
});
