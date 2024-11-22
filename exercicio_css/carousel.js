let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeImage() {
  // Remove a classe "active" da imagem atual
  images[currentIndex].classList.remove('active');
  
  // Calcula o próximo índice
  currentIndex = (currentIndex + 1) % totalImages;

  // Adiciona a classe "active" à próxima imagem
  images[currentIndex].classList.add('active');

  // Move o slide para a imagem atual
  const slide = document.querySelector('.carousel-slide');
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Exibe a primeira imagem
images[currentIndex].classList.add('active');

// Altera a imagem a cada 3 segundos
setInterval(changeImage, 3000);
