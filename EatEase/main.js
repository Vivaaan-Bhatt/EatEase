// Show the add restaurant form
function showAddRestaurantForm() {
    // Check if user is logged in (you can implement this check)
    const isLoggedIn = true; // Change this to your actual auth check
    
    if (isLoggedIn) {
        const modal = new bootstrap.Modal(document.getElementById('addRestaurantModal'));
        document.getElementById('addRestaurantForm').reset();
        document.getElementById('menuItemsContainer').innerHTML = '';
        modal.show();
    } else {
        alert('Please login to add a restaurant');
        showAuthForm('login');
    }
}

// Add menu item to the form
function addMenuItem() {
    const container = document.getElementById('menuItemsContainer');
    const itemId = Date.now(); // Unique ID for the item
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'card mb-3';
    itemDiv.innerHTML = `
        <div class="card-body">
            <div class="row g-3">
                <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Item name" required>
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Description" required>
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control" placeholder="Price" min="0" step="0.01" required>
                </div>
                <div class="col-md-2">
                    <button type="button" class="btn btn-danger w-100" onclick="this.closest('.card').remove()">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    container.appendChild(itemDiv);
}

// Handle form submission
document.getElementById('addRestaurantForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('restaurantName').value;
    const description = document.getElementById('restaurantDescription').value;
    const traffic = document.getElementById('restaurantTraffic').value;
    const rating = parseFloat(document.getElementById('restaurantRating').value);
    const image = document.getElementById('restaurantImage').value;
    const location = document.getElementById('restaurantLocation').value;
    
    // Get opening hours (simplified for this example)
    const openingHours = {
        monday: "11:00 AM - 9:00 PM",
        tuesday: "11:00 AM - 9:00 PM",
        wednesday: "11:00 AM - 9:00 PM",
        thursday: "11:00 AM - 9:00 PM",
        friday: "11:00 AM - 10:00 PM",
        saturday: "10:00 AM - 10:00 PM",
        sunday: "10:00 AM - 8:00 PM"
    };
    
    // Get menu items
    const menu = [];
    const menuItemCards = document.querySelectorAll('#menuItemsContainer .card');
    menuItemCards.forEach(card => {
        const inputs = card.querySelectorAll('input');
        menu.push({
            name: inputs[0].value,
            description: inputs[1].value,
            price: parseFloat(inputs[2].value),
            category: "Main" // You can add category input if needed
        });
    });
    
    // Create new restaurant object
    const newRestaurant = {
        id: restaurants.length + 1,
        name,
        description,
        traffic,
        rating,
        image,
        openingHours,
        location,
        menu,
        subVenues: []
    };
    
    // Add to restaurants array
    restaurants.unshift(newRestaurant);
    
    // Refresh the display
    renderRestaurants(restaurants);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addRestaurantModal'));
    modal.hide();
    
    alert('Restaurant added successfully!');
});
        // Sample restaurant data (20+ restaurants)
        const restaurants = [
            {
                id: 1,
                name: "Caffe Codes",
                description: "A cozy cafe perfect for developers and coffee lovers. Enjoy our artisanal coffee and coding-friendly environment.",
                traffic: "moderate",
                rating: 4.2,
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "7:00 AM - 8:00 PM",
                    tuesday: "7:00 AM - 8:00 PM",
                    wednesday: "7:00 AM - 8:00 PM",
                    thursday: "7:00 AM - 8:00 PM",
                    friday: "7:00 AM - 10:00 PM",
                    saturday: "8:00 AM - 10:00 PM",
                    sunday: "8:00 AM - 6:00 PM"
                },
                location: "Babarmahal, Kathmandu",
                menu: [
                    { id: 1, name: "Espresso", description: "Strong coffee shot", price: 3.50, category: "Coffee" },
                    { id: 2, name: "Cappuccino", description: "Espresso with steamed milk", price: 4.50, category: "Coffee" },
                    { id: 3, name: "Croissant", description: "Buttery French pastry", price: 4.00, category: "Pastry" },
                    { id: 4, name: "Avocado Toast", description: "Sourdough bread with avocado and spices", price: 8.50, category: "Breakfast" }
                ]
            },
            {
                id: 2,
                name: "Jugaad Food",
                description: "Innovative fusion cuisine that combines traditional flavors with modern techniques.",
                traffic: "high",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:00 AM - 9:00 PM",
                    tuesday: "11:00 AM - 9:00 PM",
                    wednesday: "11:00 AM - 9:00 PM",
                    thursday: "11:00 AM - 10:00 PM",
                    friday: "11:00 AM - 11:00 PM",
                    saturday: "10:00 AM - 11:00 PM",
                    sunday: "10:00 AM - 9:00 PM"
                },
                location: "Buddhanagar, Kathmandu",
                menu: [
                    { id: 1, name: "Butter Chicken Pizza", description: "Classic butter chicken on pizza dough", price: 14.99, category: "Fusion" },
                    { id: 2, name: "Masala Pasta", description: "Pasta with Indian spices", price: 12.99, category: "Fusion" },
                    { id: 3, name: "Tandoori Wings", description: "Chicken wings with tandoori marinade", price: 9.99, category: "Appetizer" },
                    { id: 4, name: "Gulab Jamun Cheesecake", description: "Traditional dessert meets cheesecake", price: 7.99, category: "Dessert" }
                ]
            },
            {
                id: 3,
                name: "Burger Barn",
                description: "Home of the juiciest burgers in town. All beef is locally sourced and 100% organic.",
                traffic: "low",
                rating: 4.0,
                image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:00 AM - 9:00 PM",
                    tuesday: "11:00 AM - 9:00 PM",
                    wednesday: "11:00 AM - 9:00 PM",
                    thursday: "11:00 AM - 10:00 PM",
                    friday: "11:00 AM - 11:00 PM",
                    saturday: "10:00 AM - 11:00 PM",
                    sunday: "10:00 AM - 9:00 PM"
                },
                location: "Eakantakuna, Lalitpur",
                menu: [
                    { id: 1, name: "Classic Burger", description: "Beef patty with lettuce, tomato, and special sauce", price: 9.99, category: "Burgers" },
                    { id: 2, name: "Bacon Cheeseburger", description: "Classic burger with bacon and cheese", price: 11.99, category: "Burgers" },
                    { id: 3, name: "Truffle Fries", description: "Fries with truffle oil and parmesan", price: 5.99, category: "Sides" },
                    { id: 4, name: "Chocolate Shake", description: "Creamy chocolate milkshake", price: 4.99, category: "Drinks" }
                ]
            },
            {
                id: 4,
                name: "Pasta Palace",
                description: "Authentic Italian pasta dishes made with imported ingredients and traditional recipes.",
                traffic: "moderate",
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "5:00 PM - 10:00 PM",
                    tuesday: "5:00 PM - 10:00 PM",
                    wednesday: "5:00 PM - 10:00 PM",
                    thursday: "5:00 PM - 10:00 PM",
                    friday: "5:00 PM - 11:00 PM",
                    saturday: "12:00 PM - 11:00 PM",
                    sunday: "12:00 PM - 9:00 PM"
                },
                location: "Darbar Marg, Kathmandu",
                menu: [
                    { id: 1, name: "Spaghetti Carbonara", description: "Classic Roman pasta with egg, cheese, and pancetta", price: 15.99, category: "Pasta" },
                    { id: 2, name: "Fettuccine Alfredo", description: "Creamy pasta with parmesan sauce", price: 14.99, category: "Pasta" },
                    { id: 3, name: "Lasagna Bolognese", description: "Layered pasta with meat sauce and bechamel", price: 16.99, category: "Pasta" },
                    { id: 4, name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 8.99, category: "Dessert" }
                ]
            },
            {
                id: 5,
                name: "Sushi Express",
                description: "Fresh sushi and Japanese cuisine prepared by master chefs with decades of experience.",
                traffic: "high",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:30 AM - 10:00 PM",
                    tuesday: "11:30 AM - 10:00 PM",
                    wednesday: "11:30 AM - 10:00 PM",
                    thursday: "11:30 AM - 10:00 PM",
                    friday: "11:30 AM - 11:00 PM",
                    saturday: "11:30 AM - 11:00 PM",
                    sunday: "11:30 AM - 9:00 PM"
                },
                location: "Thamel, Kathmandu",
                menu: [
                    { id: 1, name: "California Roll", description: "Crab, avocado, and cucumber roll", price: 8.99, category: "Sushi" },
                    { id: 2, name: "Dragon Roll", description: "Eel and cucumber topped with avocado", price: 12.99, category: "Sushi" },
                    { id: 3, name: "Sashimi Platter", description: "Assorted fresh raw fish slices", price: 18.99, category: "Sushi" },
                    { id: 4, name: "Miso Soup", description: "Traditional Japanese soybean soup", price: 3.99, category: "Appetizer" }
                ]
            },
            {
                id: 6,
                name: "Green Leaf Salad Bar",
                description: "Healthy salads, grain bowls, and fresh juices for the health-conscious diner.",
                traffic: "low",
                rating: 4.1,
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "8:00 AM - 8:00 PM",
                    tuesday: "8:00 AM - 8:00 PM",
                    wednesday: "8:00 AM - 8:00 PM",
                    thursday: "8:00 AM - 8:00 PM",
                    friday: "8:00 AM - 9:00 PM",
                    saturday: "9:00 AM - 9:00 PM",
                    sunday: "9:00 AM - 6:00 PM"
                },
                location: "Thamel, Kathmandu",
                menu: [
                    { id: 1, name: "Kale Caesar", description: "Kale, romaine, parmesan, and Caesar dressing", price: 10.99, category: "Salad" },
                    { id: 2, name: "Quinoa Bowl", description: "Quinoa with roasted vegetables and tahini", price: 11.99, category: "Bowl" },
                    { id: 3, name: "Detox Juice", description: "Kale, apple, lemon, and ginger", price: 6.99, category: "Juice" },
                    { id: 4, name: "Avocado Toast", description: "Whole grain bread with avocado and chili flakes", price: 8.99, category: "Breakfast" }
                ]
            },
            {
                id: 7,
                name: "BBQ Pit",
                description: "Slow-smoked meats and classic barbecue sides in a rustic setting.",
                traffic: "extreme",
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "Closed",
                    tuesday: "11:00 AM - 9:00 PM",
                    wednesday: "11:00 AM - 9:00 PM",
                    thursday: "11:00 AM - 9:00 PM",
                    friday: "11:00 AM - 10:00 PM",
                    saturday: "11:00 AM - 10:00 PM",
                    sunday: "11:00 AM - 8:00 PM"
                },
                location: "Old Baneshwor, Kathmandu",
                menu: [
                    { id: 1, name: "Pulled Pork Sandwich", description: "Slow-smoked pork with BBQ sauce", price: 12.99, category: "Sandwich" },
                    { id: 2, name: "Beef Brisket Plate", description: "Tender smoked brisket with sides", price: 18.99, category: "Entree" },
                    { id: 3, name: "St. Louis Ribs", description: "Full rack of pork ribs", price: 22.99, category: "Entree" },
                    { id: 4, name: "Mac & Cheese", description: "Creamy macaroni with three cheeses", price: 5.99, category: "Side" }
                ]
            },
            {
                id: 8,
                name: "Pizza Heaven",
                description: "Artisanal pizzas with creative toppings and perfectly crispy crusts.",
                traffic: "high",
                rating: 4.3,
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:00 AM - 10:00 PM",
                    tuesday: "11:00 AM - 10:00 PM",
                    wednesday: "11:00 AM - 10:00 PM",
                    thursday: "11:00 AM - 11:00 PM",
                    friday: "11:00 AM - 12:00 AM",
                    saturday: "11:00 AM - 12:00 AM",
                    sunday: "11:00 AM - 10:00 PM"
                },
                location: "Thamel, Kathmandu",
                menu: [
                    { id: 1, name: "Margherita", description: "Tomato, mozzarella, and basil", price: 12.99, category: "Pizza" },
                    { id: 2, name: "Pepperoni", description: "Classic pepperoni pizza", price: 14.99, category: "Pizza" },
                    { id: 3, name: "Truffle Mushroom", description: "Wild mushrooms and truffle oil", price: 16.99, category: "Pizza" },
                    { id: 4, name: "Garlic Knots", description: "Fresh baked dough with garlic butter", price: 6.99, category: "Appetizer" }
                ]
            },
            {
                id: 9,
                name: "Taco Fiesta",
                description: "Authentic Mexican street food with a modern twist and vibrant atmosphere.",
                traffic: "moderate",
                rating: 4.4,
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:00 AM - 9:00 PM",
                    tuesday: "11:00 AM - 9:00 PM",
                    wednesday: "11:00 AM - 9:00 PM",
                    thursday: "11:00 AM - 10:00 PM",
                    friday: "11:00 AM - 11:00 PM",
                    saturday: "10:00 AM - 11:00 PM",
                    sunday: "10:00 AM - 8:00 PM"
                },
                location: "Chabahil, Kathmandu",
                menu: [
                    { id: 1, name: "Al Pastor Tacos", description: "Marinated pork with pineapple", price: 3.50, category: "Taco" },
                    { id: 2, name: "Carne Asada Burrito", description: "Grilled steak with rice and beans", price: 9.99, category: "Burrito" },
                    { id: 3, name: "Quesadilla", description: "Melted cheese in crispy tortilla", price: 7.99, category: "Main" },
                    { id: 4, name: "Horchata", description: "Traditional rice milk drink", price: 3.99, category: "Drink" }
                ]
            },
            {
                id: 10,
                name: "The Chicken House",
                description: "Premium cuts of chicken dry-aged in house and cooked to perfection.",
                traffic: "high",
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "5:00 PM - 10:00 PM",
                    tuesday: "5:00 PM - 10:00 PM",
                    wednesday: "5:00 PM - 10:00 PM",
                    thursday: "5:00 PM - 10:00 PM",
                    friday: "5:00 PM - 11:00 PM",
                    saturday: "5:00 PM - 11:00 PM",
                    sunday: "5:00 PM - 9:00 PM"
                },
                location: "Bouddha, Kathmandu",
                menu: [
                    { id: 1, name: "Filet Mignon", description: "8oz tender cut with choice of sides", price: 34.99, category: "Chicken" },
                    { id: 2, name: "Ribeye", description: "12oz well-marbled cut", price: 38.99, category: "Steak" },
                    { id: 3, name: "Truffle Mashed Potatoes", description: "Creamy potatoes with truffle oil", price: 8.99, category: "Side" },
                    { id: 4, name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: 9.99, category: "Dessert" }
                ]
            },
            {
                id: 11,
                name: "Vegan Delight",
                description: "Plant-based cuisine that even meat-lovers will enjoy, with creative dishes and bold flavors.",
                traffic: "moderate",
                rating: 4.6,
                image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "10:00 AM - 9:00 PM",
                    tuesday: "10:00 AM - 9:00 PM",
                    wednesday: "10:00 AM - 9:00 PM",
                    thursday: "10:00 AM - 9:00 PM",
                    friday: "10:00 AM - 10:00 PM",
                    saturday: "9:00 AM - 10:00 PM",
                    sunday: "9:00 AM - 8:00 PM"
                },
                location: "Sinamangal, Kathmandu",
                menu: [
                    { id: 1, name: "Beyond Burger", description: "Plant-based patty with all the fixings", price: 12.99, category: "Burger" },
                    { id: 2, name: "Jackfruit Tacos", description: "Pulled jackfruit with slaw and avocado", price: 10.99, category: "Taco" },
                    { id: 3, name: "Cauliflower Wings", description: "Buffalo-style cauliflower bites", price: 8.99, category: "Appetizer" },
                    { id: 4, name: "Chocolate Avocado Mousse", description: "Rich chocolate dessert with avocado", price: 7.99, category: "Dessert" }
                ]
            },
            {
                id: 12,
                name: "Seafood Shack",
                description: "Fresh catches daily with coastal flavors and relaxed beachside atmosphere.",
                traffic: "high",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:00 AM - 9:00 PM",
                    tuesday: "11:00 AM - 9:00 PM",
                    wednesday: "11:00 AM - 9:00 PM",
                    thursday: "11:00 AM - 10:00 PM",
                    friday: "11:00 AM - 11:00 PM",
                    saturday: "10:00 AM - 11:00 PM",
                    sunday: "10:00 AM - 9:00 PM"
                },
                location: "Shankamul, Kathmandu",
                menu: [
                    { id: 1, name: "Lobster Roll", description: "Fresh lobster meat on buttered roll", price: 22.99, category: "Sandwich" },
                    { id: 2, name: "Fish & Chips", description: "Beer-battered cod with fries", price: 16.99, category: "Entree" },
                    { id: 3, name: "Clam Chowder", description: "Creamy New England-style soup", price: 8.99, category: "Soup" },
                    { id: 4, name: "Grilled Oysters", description: "Fresh oysters with garlic butter", price: 14.99, category: "Appetizer" }
                ]
            },
            {
                id: 13,
                name: "Deli Corner",
                description: "Classic deli sandwiches piled high with premium meats and cheeses on fresh-baked bread.",
                traffic: "moderate",
                rating: 4.2,
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "8:00 AM - 8:00 PM",
                    tuesday: "8:00 AM - 8:00 PM",
                    wednesday: "8:00 AM - 8:00 PM",
                    thursday: "8:00 AM - 8:00 PM",
                    friday: "8:00 AM - 9:00 PM",
                    saturday: "9:00 AM - 9:00 PM",
                    sunday: "9:00 AM - 6:00 PM"
                },
                location: "Thamel, Kathmandu",
                menu: [
                    { id: 1, name: "Reuben", description: "Corned beef, sauerkraut, and Swiss on rye", price: 11.99, category: "Sandwich" },
                    { id: 2, name: "Turkey Club", description: "Triple-decker with bacon and avocado", price: 10.99, category: "Sandwich" },
                    { id: 3, name: "Pastrami on Rye", description: "Classic New York-style sandwich", price: 12.99, category: "Sandwich" },
                    { id: 4, name: "Matzo Ball Soup", description: "Chicken soup with fluffy matzo balls", price: 6.99, category: "Soup" }
                ]
            },
            {
                id: 14,
                name: "Ramen House",
                description: "Authentic Japanese ramen with rich broths simmered for hours and perfect noodles.",
                traffic: "extreme",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:30 AM - 10:00 PM",
                    tuesday: "11:30 AM - 10:00 PM",
                    wednesday: "11:30 AM - 10:00 PM",
                    thursday: "11:30 AM - 10:00 PM",
                    friday: "11:30 AM - 11:00 PM",
                    saturday: "11:30 AM - 11:00 PM",
                    sunday: "11:30 AM - 9:00 PM"
                },
                location: "BUddhanagar, Kathmandu",
                menu: [
                    { id: 1, name: "Tonkotsu Ramen", description: "Pork bone broth with chashu pork", price: 14.99, category: "Ramen" },
                    { id: 2, name: "Shoyu Ramen", description: "Soy sauce-based broth with chicken", price: 13.99, category: "Ramen" },
                    { id: 3, name: "Spicy Miso Ramen", description: "Rich miso broth with chili paste", price: 15.99, category: "Ramen" },
                    { id: 4, name: "Gyoza", description: "Pan-fried pork dumplings", price: 6.99, category: "Appetizer" }
                ]
            },
            {
                id: 15,
                name: "Curry Palace",
                description: "Authentic Indian curries with traditional spices and flavors from across the subcontinent.",
                traffic: "moderate",
                rating: 4.4,
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "11:00 AM - 9:30 PM",
                    tuesday: "11:00 AM - 9:30 PM",
                    wednesday: "11:00 AM - 9:30 PM",
                    thursday: "11:00 AM - 9:30 PM",
                    friday: "11:00 AM - 10:30 PM",
                    saturday: "11:00 AM - 10:30 PM",
                    sunday: "11:00 AM - 9:00 PM"
                },
                location: "Jwalakhel, Lalitpur",
                menu: [
                    { id: 1, name: "Butter Chicken", description: "Tandoori chicken in creamy tomato sauce", price: 15.99, category: "Curry" },
                    { id: 2, name: "Lamb Vindaloo", description: "Spicy Goan-style lamb curry", price: 17.99, category: "Curry" },
                    { id: 3, name: "Vegetable Biryani", description: "Fragrant rice with mixed vegetables", price: 13.99, category: "Rice" },
                    { id: 4, name: "Garlic Naan", description: "Traditional bread with garlic", price: 3.99, category: "Bread" }
                ]
            },
            {
                id: 16,
                name: "Crepe Cafe",
                description: "Sweet and savory French crepes made to order with high-quality ingredients.",
                traffic: "low",
                rating: 4.3,
                image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                openingHours: {
                    monday: "8:00 AM - 8:00 PM",
                    tuesday: "8:00 AM - 8:00 PM",
                    wednesday: "8:00 AM - 8:00 PM",
                    thursday: "8:00 AM - 9:00 PM",
                    friday: "8:00 AM - 10:00 PM",
                    saturday: "9:00 AM - 10:00 PM",
                    sunday: "9:00 AM - 7:00 PM"
                },
                location: "Mid-Baneshowr, Kathmandu",
                menu: [
                    { id: 1, name: "Ham & Cheese Crepe", description: "Classic savory crepe with Swiss", price: 9.99, category: "Savory" },
                    { id: 2, name: "Nutella Banana", description: "Sweet crepe with Nutella and bananas", price: 8.99, category: "Sweet" },
                    { id: 3, name: "Spinach & Feta", description: "Fresh spinach with feta cheese", price: 10.99, category: "Savory" },
                    { id: 4, name: "Lemon Sugar", description: "Simple classic with lemon and sugar", price: 6.99, category: "Sweet" }
                ]
            },
            {
                id: 17,
                name: "Pho King",
                description: "Authentic Vietnamese pho with aromatic broths and fresh ingredients.",
                traffic: "moderate",
                rating: 4.6,
                image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "10:00 AM - 9:00 PM",
                    tuesday: "10:00 AM - 9:00 PM",
                    wednesday: "10:00 AM - 9:00 PM",
                    thursday: "10:00 AM - 9:00 PM",
                    friday: "10:00 AM - 10:00 PM",
                    saturday: "10:00 AM - 10:00 PM",
                    sunday: "10:00 AM - 8:00 PM"
                },
                location: "Imadol, Lalitpur",
                menu: [
                    { id: 1, name: "Beef Pho", description: "Traditional beef noodle soup", price: 12.99, category: "Pho" },
                    { id: 2, name: "Chicken Pho", description: "Lighter chicken version", price: 11.99, category: "Pho" },
                    { id: 3, name: "Vegetable Pho", description: "Vegetarian option with tofu", price: 10.99, category: "Pho" },
                    { id: 4, name: "Summer Rolls", description: "Fresh rice paper rolls with shrimp", price: 7.99, category: "Appetizer" }
                ]
            },
            {
                id: 18,
                name: "Doughnut Den",
                description: "Artisanal doughnuts with creative flavors and perfect texture.",
                traffic: "high",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "7:00 AM - 5:00 PM",
                    tuesday: "7:00 AM - 5:00 PM",
                    wednesday: "7:00 AM - 5:00 PM",
                    thursday: "7:00 AM - 5:00 PM",
                    friday: "7:00 AM - 6:00 PM",
                    saturday: "8:00 AM - 6:00 PM",
                    sunday: "8:00 AM - 4:00 PM"
                },
                location: "1515 Sugar Lane, Doughville",
                menu: [
                    { id: 1, name: "Classic Glazed", description: "Traditional yeast doughnut", price: 3.50, category: "Doughnut" },
                    { id: 2, name: "Maple Bacon", description: "Maple glaze with bacon bits", price: 4.50, category: "Doughnut" },
                    { id: 3, name: "Boston Cream", description: "Custard-filled with chocolate glaze", price: 4.00, category: "Doughnut" },
                    { id: 4, name: "Cold Brew Coffee", description: "Perfect pairing with doughnuts", price: 4.50, category: "Drink" }
                ]
            },
            {
                id: 19,
                name: "Tapas Bar",
                description: "Authentic Spanish small plates perfect for sharing with friends over drinks.",
                traffic: "high",
                rating: 4.4,
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "4:00 PM - 11:00 PM",
                    tuesday: "4:00 PM - 11:00 PM",
                    wednesday: "4:00 PM - 11:00 PM",
                    thursday: "4:00 PM - 11:00 PM",
                    friday: "4:00 PM - 12:00 AM",
                    saturday: "4:00 PM - 12:00 AM",
                    sunday: "4:00 PM - 10:00 PM"
                },
                location: "Sanepa, Lalitpur",
                menu: [
                    { id: 1, name: "Patatas Bravas", description: "Fried potatoes with spicy sauce", price: 7.99, category: "Tapas" },
                    { id: 2, name: "Gambas al Ajillo", description: "Garlic shrimp in olive oil", price: 12.99, category: "Tapas" },
                    { id: 3, name: "Chorizo al Vino", description: "Spanish sausage in wine sauce", price: 9.99, category: "Tapas" },
                    { id: 4, name: "Sangria", description: "Traditional Spanish wine punch", price: 8.99, category: "Drink" }
                ]
            },
            {
                id: 20,
                name: "Ice Cream Dream",
                description: "Handcrafted ice cream with unique flavors and premium ingredients.",
                traffic: "extreme",
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                openingHours: {
                    monday: "12:00 PM - 10:00 PM",
                    tuesday: "12:00 PM - 10:00 PM",
                    wednesday: "12:00 PM - 10:00 PM",
                    thursday: "12:00 PM - 10:00 PM",
                    friday: "12:00 PM - 11:00 PM",
                    saturday: "11:00 AM - 11:00 PM",
                    sunday: "11:00 AM - 10:00 PM"
                },
                location: "Darbar Marg, Kathmandu",
                menu: [
                    { id: 1, name: "Vanilla Bean", description: "Classic made with real vanilla", price: 4.50, category: "Ice Cream" },
                    { id: 2, name: "Salted Caramel", description: "Sweet and salty perfection", price: 5.00, category: "Ice Cream" },
                    { id: 3, name: "Mint Chip", description: "Fresh mint with dark chocolate", price: 4.50, category: "Ice Cream" },
                    { id: 4, name: "Waffle Cone", description: "Freshly made waffle cone", price: 1.50, category: "Cone" }
                ]
            }
        ];

        // DOM elements
        const restaurantsContainer = document.getElementById('restaurantsContainer');
        const searchInput = document.getElementById('searchInput');
        const trafficFilter = document.getElementById('trafficFilter');
        const restaurantModal = new bootstrap.Modal(document.getElementById('restaurantModal'));
        const authModal = new bootstrap.Modal(document.getElementById('authModal'));
        const modalRestaurantName = document.getElementById('modalRestaurantName');
        const modalRestaurantImage = document.getElementById('modalRestaurantImage');
        const modalTrafficBadge = document.getElementById('modalTrafficBadge');
        const modalRestaurantRating = document.getElementById('modalRestaurantRating');
        const modalRestaurantDescription = document.getElementById('modalRestaurantDescription');
        const modalRestaurantLocation = document.getElementById('modalRestaurantLocation');
        const openingHours = document.getElementById('openingHours');
        const menuItems = document.getElementById('menuItems');
        const orderItems = document.getElementById('orderItems');
        const orderTotal = document.getElementById('orderTotal');
        const bookingForm = document.getElementById('bookingForm');
        const orderForm = document.getElementById('orderForm');
        const deliveryAddressGroup = document.getElementById('deliveryAddressGroup');
        const deliveryMethodRadios = document.querySelectorAll('input[name="deliveryMethod"]');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        // Current restaurant in modal
        let currentRestaurant = null;

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderRestaurants(restaurants);
            
            // Search functionality
            searchInput.addEventListener('input', filterRestaurants);
            trafficFilter.addEventListener('change', filterRestaurants);
            
            // Delivery method toggle
            deliveryMethodRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    deliveryAddressGroup.style.display = this.value === 'delivery' ? 'block' : 'none';
                    if (this.value === 'pickup') {
                        document.getElementById('orderAddress').required = false;
                    } else {
                        document.getElementById('orderAddress').required = true;
                    }
                });
            });
            
            // Form submissions
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Booking request submitted! We will confirm your reservation shortly.');
                restaurantModal.hide();
                this.reset();
            });
            
            orderForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Order placed successfully!');
                restaurantModal.hide();
                this.reset();
                orderTotal.textContent = '$0.00';
            });
        });

        // Render restaurants
        function renderRestaurants(restaurantsToRender) {
            restaurantsContainer.innerHTML = '';
            
            if (restaurantsToRender.length === 0) {
                restaurantsContainer.innerHTML = '<div class="col-12 text-center py-5"><h4>No restaurants found</h4></div>';
                return;
            }
            
            restaurantsToRender.forEach(restaurant => {
                const trafficClass = getTrafficClass(restaurant.traffic);
                const card = document.createElement('div');
                card.className = 'col-md-6 col-lg-4';
                card.innerHTML = `
                    <div class="card restaurant-card h-100">
                        <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">${restaurant.name}</h5>
                                <span class="badge ${trafficClass}">${capitalizeFirstLetter(restaurant.traffic)} Traffic</span>
                            </div>
                            <div class="star-rating mb-2">
                                ${renderStars(restaurant.rating)}
                                <small class="text-muted">${restaurant.rating.toFixed(1)}</small>
                            </div>
                            <p class="card-text text-muted">${restaurant.description.substring(0, 100)}...</p>
                        </div>
                        <div class="card-footer bg-white border-0">
                            <button class="btn btn-outline-primary btn-sm me-2" onclick="viewRestaurant(${restaurant.id})">
                                <i class="fas fa-info-circle me-1"></i> Details
                            </button>
                            <button class="btn btn-primary btn-sm" onclick="viewRestaurant(${restaurant.id}, 'book')">
                                <i class="fas fa-calendar-alt me-1"></i> Book
                            </button>
                        </div>
                    </div>
                `;
                restaurantsContainer.appendChild(card);
            });
        }

        // Render star rating
        function renderStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }

        // Filter restaurants based on search and traffic filter
        function filterRestaurants() {
            const searchTerm = searchInput.value.toLowerCase();
            const trafficFilterValue = trafficFilter.value;
            
            const filtered = restaurants.filter(restaurant => {
                const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) || 
                                    restaurant.description.toLowerCase().includes(searchTerm);
                
                const matchesTraffic = trafficFilterValue === 'all' || 
                                      restaurant.traffic === trafficFilterValue;
                
                return matchesSearch && matchesTraffic;
            });
            
            renderRestaurants(filtered);
        }

        // View restaurant details
        function viewRestaurant(id, activeTab = 'info') {
            currentRestaurant = restaurants.find(r => r.id === id);
            if (!currentRestaurant) return;
            
            // Set basic info
            modalRestaurantName.textContent = currentRestaurant.name;
            modalRestaurantImage.src = currentRestaurant.image;
            modalRestaurantDescription.textContent = currentRestaurant.description;
            modalRestaurantLocation.textContent = currentRestaurant.location;
            
            // Set traffic badge
            modalTrafficBadge.className = `badge ${getTrafficClass(currentRestaurant.traffic)}`;
            modalTrafficBadge.textContent = `${capitalizeFirstLetter(currentRestaurant.traffic)} Traffic`;
            
            // Set rating stars
            modalRestaurantRating.innerHTML = `${renderStars(currentRestaurant.rating)} ${currentRestaurant.rating.toFixed(1)}`;
            
            // Set opening hours
            openingHours.innerHTML = '';
            for (const [day, hours] of Object.entries(currentRestaurant.openingHours)) {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.innerHTML = `<strong>${capitalizeFirstLetter(day)}:</strong> ${hours}`;
                openingHours.appendChild(li);
            }
            
            // Set menu items
            menuItems.innerHTML = '';
            orderItems.innerHTML = '';
            currentRestaurant.menu.forEach(item => {
                // For info tab
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <div class="d-flex justify-content-between">
                        <div>
                            <h6 class="mb-1">${item.name}</h6>
                            <p class="text-muted small mb-1">${item.description}</p>
                        </div>
                        <span class="text-nowrap">$${item.price.toFixed(2)}</span>
                    </div>
                `;
                menuItems.appendChild(menuItem);
                
                // For order tab
                const orderItem = document.createElement('div');
                orderItem.className = 'form-check mb-2';
                orderItem.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <input class="form-check-input me-2" type="checkbox" value="${item.id}" id="item-${item.id}" 
                                   data-price="${item.price}" onchange="updateOrderTotal()">
                            <label class="form-check-label" for="item-${item.id}">
                                ${item.name} - $${item.price.toFixed(2)}
                            </label>
                        </div>
                        <input type="number" class="form-control form-control-sm quantity-input" 
                               style="width: 60px;" min="1" value="1" data-item-id="${item.id}" 
                               onchange="updateOrderTotal()" disabled>
                    </div>
                `;
                orderItems.appendChild(orderItem);
                
                // Enable quantity input when checkbox is checked
                const checkbox = orderItem.querySelector('.form-check-input');
                const quantityInput = orderItem.querySelector('.quantity-input');
                checkbox.addEventListener('change', function() {
                    quantityInput.disabled = !this.checked;
                    if (!this.checked) quantityInput.value = 1;
                    updateOrderTotal();
                });
            });
            
            // Activate the requested tab
            const tabButtons = document.querySelectorAll('#restaurantTabs .nav-link');
            tabButtons.forEach(button => {
                if (button.getAttribute('href') === `#${activeTab}`) {
                    button.classList.add('active');
                    const tabPane = document.querySelector(button.getAttribute('href'));
                    tabPane.classList.add('show', 'active');
                } else {
                    button.classList.remove('active');
                    const tabPane = document.querySelector(button.getAttribute('href'));
                    tabPane.classList.remove('show', 'active');
                }
            });
            
            // Show the modal
            restaurantModal.show();
        }

        // Show auth form (login or signup)
        function showAuthForm(formType) {
            if (formType === 'login') {
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
            }
            authModal.show();
        }

        // Update order total
        function updateOrderTotal() {
            let total = 0;
            const checkboxes = document.querySelectorAll('#orderItems .form-check-input:checked');
            
            checkboxes.forEach(checkbox => {
                const quantityInput = document.querySelector(`.quantity-input[data-item-id="${checkbox.value}"]`);
                const quantity = parseInt(quantityInput.value) || 1;
                const price = parseFloat(checkbox.dataset.price);
                total += price * quantity;
            });
            
            orderTotal.textContent = `$${total.toFixed(2)}`;
        }

        // Helper functions
        function getTrafficClass(trafficLevel) {
            switch (trafficLevel) {
                case 'low': return 'traffic-low';
                case 'moderate': return 'traffic-moderate';
                case 'high': return 'traffic-high';
                case 'extreme': return 'traffic-extreme';
                default: return 'bg-secondary';
            }
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        // Make functions available globally
        window.viewRestaurant = viewRestaurant;
        window.updateOrderTotal = updateOrderTotal;
        window.showAuthForm = showAuthForm;