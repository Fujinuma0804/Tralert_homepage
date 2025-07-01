document.getElementById('menuBtn').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
    
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('max-h-0');
            
            // Toggle hamburger icon animation
            menuBtn.classList.toggle('transform');
            menuBtn.classList.toggle('rotate-90');
            
            // Toggle menu visibility with animation
            if (isOpen) {
                mobileMenu.classList.remove('max-h-0');
                mobileMenu.classList.add('max-h-96'); // Adjust based on your content height
            } else {
                mobileMenu.classList.add('max-h-0');
                mobileMenu.classList.remove('max-h-96');
            }
        });