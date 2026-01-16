  const heroImage = document.getElementById('main-hero');
  const heroText = document.getElementById('hero-text');
  const header = document.getElementById('main-header');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const galleryText = document.getElementById('gallery-text');

  function openSidebar() {
    sidebar.classList.add('show');
    overlay.classList.add('show');

  }

  function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
  }