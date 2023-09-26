// JavaScript to handle sidebar menu clicks
const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
const contentSections = document.querySelectorAll('.content-section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the "active" class from all menu items
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        // Hide all content sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        // Add the "active" class to the clicked menu item
        item.classList.add('active');

        // Show the corresponding content section
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).style.display = 'block';
    });
});
