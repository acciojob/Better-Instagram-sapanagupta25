//your code here
const images = document.querySelectorAll('.image');
let draggedItem = null;

// Drag start event
images.forEach(image => {
  image.addEventListener('dragstart', function () {
    draggedItem = this;
    setTimeout(() => {
      this.style.opacity = '0.5';
    }, 0);
  });

  // Drag end event
  image.addEventListener('dragend', function () {
    setTimeout(() => {
      draggedItem.style.opacity = '1';
      draggedItem = null;
    }, 0);
  });

  // Drag over event
  image.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  // Drag enter event
  image.addEventListener('dragenter', function (e) {
    e.preventDefault();
    this.classList.add('selected');
  });

  // Drag leave event
  image.addEventListener('dragleave', function () {
    this.classList.remove('selected');
  });

  // Drop event — swap content
  image.addEventListener('drop', function () {
    if (draggedItem !== this) {
      // Swap background images
      const draggedImage = draggedItem.style.backgroundImage;
      draggedItem.style.backgroundImage = this.style.backgroundImage;
      this.style.backgroundImage = draggedImage;
    }
    this.classList.remove('selected');
  });
});
