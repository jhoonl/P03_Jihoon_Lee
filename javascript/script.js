document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const subtitle = document.getElementById('title-secondary');
  
    // Flag to track typewriter animation completion
    let titleLoaded = false;
    let subtitleLoaded = false;
  
    // Function to check if both titles have finished loading
    function checkAnimationCompletion() {
      if (titleLoaded && subtitleLoaded) {
        title.style.transform = 'scale(1)';
        subtitle.style.transform = 'scale(1)';
      }
    }
  
    setTimeout(() => {
      title.style.transition = 'opacity 7s';
      subtitle.style.transition = 'opacity 1s';
      title.style.opacity = '0.1';
      subtitle.style.opacity = '1';
      titleLoaded = true;
      checkAnimationCompletion();
    }, 100); // Add a small delay to ensure proper rendering
  
    // Typewriter effect for title
    typewriterEffect(title, () => {
      titleLoaded = true;
      checkAnimationCompletion();
    });
  
    // Typewriter effect for subtitle
    typewriterEffect(subtitle, () => {
      subtitleLoaded = true;
      checkAnimationCompletion();
    });
  });
  
  function typewriterEffect(element, callback) {
    const text = element.innerText;
    element.innerText = '';
  
    let i = 0;
    const speed = 80; // Adjust the typing speed (in milliseconds)
  
    function type() {
      if (i < text.length) {
        if (text.charAt(i) === ' ') {
          element.innerHTML += '<span>&nbsp;</span>';
        } else {
          element.innerHTML += `<span>${text.charAt(i)}</span>`;
        }
        i++;
        setTimeout(type, speed);
      } else {
        // Typewriter animation complete
        if (typeof callback === 'function') {
          callback(); // Call the callback function if provided
        }
      }
    }
  
    type();
  }

  