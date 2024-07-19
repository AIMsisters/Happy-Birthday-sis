const messageContainer = document.getElementById('message-container');

anime({
  targets: messageContainer,
  translateY: ['100vh', '-200vh'],  /* Move from bottom to top, -200vh ensures it moves completely out of view */
  duration: 80000,  /* Adjust animation duration in milliseconds */
  easing: 'easeInOutSine'  /* Adjust animation easing as desired */
});
