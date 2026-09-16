# Reboot Frederick - escape room 2026

Static HTML/CSS/JS site that accompanies a paper-based tabletop escape room, played on a phone as teams
solve physical puzzles. Deploys directly to GitHub Pages - no build step.

See [escape-room-context.txt](escape-room-context.txt) for the story outline.

## Structure

- `index.html` - Frederick's opening message and the year/coordinates gate
- `questions/` - one HTML page per story beat (`meet-hop.html`, `puzzle-1.html` … `puzzle-5.html`,
  `final-puzzle.html`, `end-game.html`)
- `assets/js/puzzle.js` - single generic answer-checker shared by every puzzle page
- `assets/css/style.css` - shared styling
- `assets/img/` - Frederick artwork and page footers

## Updating puzzle answers

Each puzzle page has a `<form class="puzzle-form">` with one or more `.puzzle-input` fields. The
correct answer for each field lives in its `data-answer="..."` attribute - update these once the real
paper puzzles are written. Matching is case-insensitive and ignores extra whitespace.

Every form is currently followed by a `<p class="dev-hint">` showing the expected answer, for testing
without the physical puzzles in hand. Delete those `.dev-hint` paragraphs (marked with a `TESTING AID`
comment) before the site goes live for players.
