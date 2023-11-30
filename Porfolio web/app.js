document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBoton');
    const redesSociales = document.getElementById('redesSociales');
  
    toggleBtn.addEventListener('click', function () {
      if (redesSociales.style.display == 'none' || redesSociales.style.display === '') {
        redesSociales.style.display = 'block';
      } else {
        redesSociales.style.display = 'none';
      }
    });
  });
  