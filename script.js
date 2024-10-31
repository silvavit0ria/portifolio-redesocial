function infoPaginaInicial(sectionId) {
  const items = document.querySelectorAll(".item-pagina");
  items.forEach((item) => {
    item.style.display = "none";
  });
  const mostrarItem = document.getElementById(sectionId);
  mostrarItem.style.display = "block";
}

const sectionProjetos = document.getElementById('section-projetos');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
sectionProjetos.appendChild(overlay);


document.querySelectorAll('.photo').forEach(function(photo) {
    photo.addEventListener('click', function() {
      var targetId = this.getAttribute('data-target');
      document.getElementById(targetId).style.display = "block";
      overlay.style.display = 'block';
    });
  });
  
  document.querySelectorAll('.subpage').forEach(function(subpage) {
    subpage.addEventListener('click', function(event) {
      if (event.target === this) {
        this.style.display = "none";
        overlay.style.display = 'none';
      }
    });
  });
  
  overlay.addEventListener('click', function() {
    document.querySelectorAll('.subpage').forEach(function(subpage) {
      subpage.style.display = "none";
    });
    overlay.style.display = 'none';
  });
  
  const images = document.querySelectorAll('.item-galeria img');
  const modal = document.getElementById('galeria-open');
  const modalImage = document.getElementById('modelo-imagem');
  const modalCaption = document.getElementById('modelo-legenda');
  
  // Adiciona evento de clique a cada imagem
  images.forEach(image => {
      image.addEventListener('click', function() {
          modal.style.display = "flex";
          modalImage.src = this.src;
          modalCaption.textContent = this.getAttribute('data-caption'); // Exibe a legenda
      });
  });
  
  // Função para fechar o modal
  function closeModal() {
      modal.style.display = "none";
  }