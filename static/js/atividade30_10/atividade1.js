const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const image = document.getElementById('myImage');

let axis_x = 1000;
let axis_y = 50;

const img_width = 350;
const img_height = 250;

function draw_picture() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, axis_x, axis_y, img_width, img_height);
}

window.onload = () => {
  draw_picture();
};

function move_image(event) {
  const keyboard = event.key;

  switch (keyboard) {
    case 'ArrowUp':
      if (axis_y + 70 >= 0)
        axis_y -= 10;
      break;
    case 'ArrowDown':
      if (axis_y + img_height - 20 <= canvas.height)
        axis_y += 10;
      break;
    case 'ArrowLeft':
      if (axis_x - 10 >= 0)
        axis_x -= 10;
      break;
    case 'ArrowRight':
      if (axis_x + img_width + 10 <= canvas.width)
        axis_x += 10;
      break;
  }

  draw_picture();
}

window.addEventListener('keydown', move_image);
