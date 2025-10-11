// Small script to toggle dark mode and persist choice in localStorage
(function(){
  const key = 'warp-dark-mode';
  const current = localStorage.getItem(key);
  if(current === 'true') document.documentElement.classList.add('dark');

  function toggle(){
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(key, isDark ? 'true' : 'false');
    return isDark;
  }

  // expose for manual toggling from other scripts or buttons
  window.warpDarkToggle = toggle;
})();
