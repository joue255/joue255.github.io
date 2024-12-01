// Name: Joshua Ouellette
// File: portfolio.js
// Date: 11/29/2024

 document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the dropdown menu
    function toggleDropdown() {
      const dropdownMenu = document.querySelector('.dropdown-menu');
      dropdownMenu.classList.toggle('show'); // Toggle 'show' class to show/hide menu
    }

    // Add event listener to the dropdown button
    const dropdownButton = document.querySelector('.dropdown-btn');
    dropdownButton.addEventListener('click', toggleDropdown);
  });
