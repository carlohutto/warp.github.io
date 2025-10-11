// Small script to toggle dark mode and persist choice in localStorage
(function(){
  const key = 'warp-dark-mode';

  // If the user explicitly set 'false', ensure light mode. Otherwise default to dark.
  try {
    const val = localStorage.getItem(key);
    if (val === 'false') {
      document.documentElement.classList.remove('dark');
    } else {
      // covers 'true' and null (no preference) -> default dark
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    // localStorage may be unavailable; silently continue with default dark
    document.documentElement.classList.add('dark');
  }

  function toggle(){
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem(key, isDark ? 'true' : 'false');
    } catch (e) {
      // ignore storage errors
    }
    return isDark;
  }

  // expose for manual toggling from other scripts or buttons
  window.warpDarkToggle = toggle;
})();
