# Reboot Frederick - escape room 2026

Static HTML/CSS/JS site that accompanies a paper-based tabletop escape room, played on a phone as teams
solve physical puzzles. Deploys directly to GitHub Pages - no build step.

See [escape-room-context.txt](escape-room-context.txt) for the story outline.

## Structure

- `index.html` - Frederick's opening message and the year/coordinates gate
- `questions/` - one HTML page per story beat. Filenames are deliberately random
  (`stage-<hex>.html`) rather than `puzzle-1.html`, `puzzle-2.html`, etc., so a team can't just guess
  the next URL and skip ahead - each page only links to the next once you've actually solved the
  puzzle in front of you. See the mapping below to find a given story beat's file.
- `assets/js/puzzle.js` - single generic answer-checker shared by every puzzle page
- `assets/css/style.css` - shared styling
- `assets/img/` - Frederick artwork and page footers

### Page filename mapping

| Story beat | File |
|---|---|
| Meet Harvey (HoP) | `questions/stage-cbf43680.html` |
| Puzzle 1 (Dorian) | `questions/stage-8d055ebf.html` |
| Puzzle 2 (Eleanor) | `questions/stage-b0998e4b.html` |
| Puzzle 3 (Rebecca) | `questions/stage-78be7dfa.html` |
| Puzzle 4 (Jasper) | `questions/stage-560e839b.html` |
| Puzzle 5 (Elizabeth) | `questions/stage-e7b00146.html` |
| Puzzle 6 (Sam) | `questions/stage-1b5e75f0.html` |
| Puzzle 7 (Iris) | `questions/stage-f2d75018.html` |
| Final puzzle (triangles/code) | `questions/stage-25a0c4a3.html` |
| End game / certificate | `questions/stage-0bba665c.html` |

If you rename any of these again, update the `href` in the page immediately before it in the sequence
(and `index.html`'s link for the first one).

## Updating puzzle answers

Each puzzle page has a `<form class="puzzle-form">` with one or more `.puzzle-input` fields. The
correct answer for each field lives in its `data-answer="..."` attribute - update these once the real
paper puzzles are written. Matching is case-insensitive and ignores extra whitespace.

The "Reveal answer (testing only)" buttons and hints have been removed from every page ahead of the
real event. If you need to add one back temporarily for further testing, use a
`<button class="reveal-btn dev-hint-toggle" data-reveals="puzzle-hint">Reveal answer (testing
only)</button>` plus a hidden `<p id="puzzle-hint" class="dev-hint">` with the answer, and delete both
again before players see the site.
