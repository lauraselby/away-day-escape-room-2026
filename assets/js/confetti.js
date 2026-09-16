// Small dependency-free confetti burst, no third-party service required.
(function () {
    const colours = ['#4CAF50', '#e41405', '#ffca28', '#29b6f6', '#ab47bc'];
    const pieceCount = 80;

    for (let i = 0; i < pieceCount; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
        piece.style.animationDuration = `${2.5 + Math.random() * 2}s`;
        piece.style.animationDelay = `${Math.random() * 1.5}s`;
        document.body.appendChild(piece);

        piece.addEventListener('animationend', () => piece.remove());
    }
})();
