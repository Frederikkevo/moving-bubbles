const all = document.querySelectorAll(".container div");

setInterval(() => {
  all.forEach((bubble) => {
    bubble.style.transform = `translate(${Math.random() * 100}vw, ${
      Math.random() * 100
    }vh)`;
    bubble.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
    bubble.style.width = `${Math.random()* 100}px
    bubble.style.height = `${Math.random() * 200}px;
  });
}, 2000);
