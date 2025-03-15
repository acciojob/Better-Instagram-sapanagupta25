//your code here
const images = document.querySelectorAll('.image');

let draggedItem = null;

images.forEach(image => {
  // Start dragging
  image.addEventListener('dragstart', (e) => {
    draggedItem = image;
    setTimeout(() => {
      image.style.display = 'none';
    }, 0);
  });

  // End dragging
  image.addEventListener('dragend', () => {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  // Drag over (allow drop)
  image.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Drag enter (highlight drop target)
  image.addEventListener('dragenter', (e) => {
    e.preventDefault();
    image.classList.add('selected');
  });

  // Drag leave (remove highlight)
  image.addEventListener('dragleave', () => {
    image.classList.remove('selected');
  });

  // Drop (swap elements)
  image.addEventListener('drop', () => {
    if (draggedItem !== image) {
      // Swap the innerHTML (including the <img> element)
      let temp = draggedItem.innerHTML;
      draggedItem.innerHTML = image.innerHTML;
      image.innerHTML = temp;
    }
    image.classList.remove('selected');
  });
});
