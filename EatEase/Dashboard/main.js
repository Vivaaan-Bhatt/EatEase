 // Show section based on navigation
 function showSection(sectionId) {
    // Hide all sections
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('orders-section').style.display = 'none';
    document.getElementById('menu-section').style.display = 'none';
    document.getElementById('customers-section').style.display = 'none';
    document.getElementById('analytics-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'none';
    
    // Show selected section
    document.getElementById(sectionId + '-section').style.display = 'block';
    
    // Update active nav link
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Show add menu item modal
function showAddMenuItemModal() {
    const modal = new bootstrap.Modal(document.getElementById('addMenuItemModal'));
    document.getElementById('addMenuItemForm').reset();
    modal.show();
}

// Handle add menu item form submission
document.getElementById('addMenuItemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Menu item added successfully!');
    const modal = bootstrap.Modal.getInstance(document.getElementById('addMenuItemModal'));
    modal.hide();
    // In a real app, you would add the item to your menu list here
});

// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Order Type Chart (Doughnut)
    const orderTypeCtx = document.getElementById('orderTypeChart').getContext('2d');
    new Chart(orderTypeCtx, {
        type: 'doughnut',
        data: {
            labels: ['Dine-in', 'Pickup', 'Delivery'],
            datasets: [{
                data: [12, 8, 5],
                backgroundColor: ['#8e24aa', '#388e3c', '#1976d2'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Best Sellers Chart (Bar)
    const bestSellersCtx = document.getElementById('bestSellersChart').getContext('2d');
    new Chart(bestSellersCtx, {
        type: 'bar',
        data: {
            labels: ['Margherita', 'Garlic Bread', 'Lava Cake', 'Caesar Salad', 'Iced Tea'],
            datasets: [{
                label: 'Sales',
                data: [84, 72, 58, 45, 112],
                backgroundColor: '#ff7b25',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Sales Chart (Line)
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sales',
                data: [6500, 5900, 8000, 8100, 8600, 8250, 9000],
                fill: false,
                borderColor: '#ff7b25',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Order Type Pie Chart
    const orderTypePieCtx = document.getElementById('orderTypePieChart').getContext('2d');
    new Chart(orderTypePieCtx, {
        type: 'pie',
        data: {
            labels: ['Dine-in', 'Pickup', 'Delivery'],
            datasets: [{
                data: [120, 85, 65],
                backgroundColor: ['#8e24aa', '#388e3c', '#1976d2'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});