const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const lines = document.querySelectorAll('.line');
  lines.forEach((line, i) => {
    const rect = line.getBoundingClientRect();
    const originX = rect.right - rect.width / 2;
    const originY = rect.bottom - rect.height / 2;
    const deg = angle(mouseX, mouseY, originX, originY);
    const color = getColor(deg);
    line.style.transform = `rotate(${-parseInt(deg)}deg)`;
    line.style.backgroundColor = `var(${color})`;
  });
});

spawnLines();
window.addEventListener('resize', spawnLines);

function spawnLines() {
  const initialW = window.innerWidth - 320 > 0 ? window.innerWidth - 320 : 0;
  let cols = initialW / 70 + 5;
  cols = cols > 20 ? 20 : cols;
  document.querySelectorAll('.row')?.forEach((row) => row.remove());
  addLines(30, cols);
}

function addLines(rows, cols) {
  let containerMarkup = ``;
  for (let row = 0; row < rows; row++) {
    containerMarkup += `<div class="row">`;
    for (let col = 0; col < cols; col++)
      containerMarkup += `<div class="line"></div>`;
    containerMarkup += `</div>`;
  }

  container.insertAdjacentHTML('beforeend', containerMarkup);
}

function angle(x, y, oX, oY) {
  const dy = oY - y;
  const dx = x - oX;
  const rad = Math.atan2(dy, dx);
  return (rad * 180) / Math.PI;
}

function getColor(deg) {
  if (deg >= 0) {
    if (deg <= 90) return '--blue';
    return '--yellow';
  } else {
    if (deg <= -90) return '--red';
    else return '--purple';
  }
}
