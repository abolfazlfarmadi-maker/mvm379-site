// Simple JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
    const navMenu = document.querySelector('nav[class*="hidden md:flex"]');

    mobileMenuButton.addEventListener('click', function() {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
        navMenu.classList.toggle('flex-col');
        navMenu.classList.toggle('absolute');
        navMenu.classList.toggle('top-16');
        navMenu.classList.toggle('left-0');
        navMenu.classList.toggle('right-0');
        navMenu.classList.toggle('bg-white');
        navMenu.classList.toggle('shadow-md');
        navMenu.classList.toggle('p-4');
        navMenu.classList.toggle('space-y-4');
        navMenu.classList.remove('space-x-6');
        navMenu.classList.remove('space-x-reverse');
    });
});
