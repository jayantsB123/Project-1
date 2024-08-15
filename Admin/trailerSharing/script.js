document.addEventListener('DOMContentLoaded', () => {
    const trailerList = document.getElementById('trailer-list');
    const addTrailerBtn = document.getElementById('add-trailer-btn');
    const trailerModal = document.getElementById('trailer-modal');
    const closeModal = document.getElementById('close-modal');
    const trailerForm = document.getElementById('trailer-form');
    const pagination = document.getElementById('pagination');
    const trailersPerPageSelect = document.getElementById('trailers-per-page');

    // Initial trailer data
    const trailers = [
        { id: 1, name: 'Trailer 1', rentedBy: 'Company A', price: 100, pickupLocation: 'Location A', loadingQuantity: 5000, photo: 'trailer-1.jpeg' },
        { id: 2, name: 'Trailer 2', rentedBy: 'Company B', price: 150, pickupLocation: 'Location B', loadingQuantity: 8000, photo: 'trailer-1.jpeg' },
        { id: 3, name: 'Trailer 3', rentedBy: 'Company C', price: 200, pickupLocation: 'Location C', loadingQuantity: 10000, photo: 'trailer-1.jpeg' },
        { id: 4, name: 'Trailer 4', rentedBy: 'Company D', price: 250, pickupLocation: 'Location D', loadingQuantity: 12000, photo: 'trailer-1.jpeg' },
        { id: 5, name: 'Trailer 5', rentedBy: 'Company E', price: 300, pickupLocation: 'Location E', loadingQuantity: 15000, photo: 'trailer-1.jpeg' },
        { id: 6, name: 'Trailer 6', rentedBy: 'Company F', price: 350, pickupLocation: 'Location F', loadingQuantity: 16000, photo: 'trailer-1.jpeg' },
        { id: 7, name: 'Trailer 7', rentedBy: 'Company G', price: 400, pickupLocation: 'Location G', loadingQuantity: 17000, photo: 'trailer-1.jpeg' }
    ];

    let itemsPerPage = parseInt(trailersPerPageSelect.value); // Number of trailers to show per page
    let currentPage = 1;

    // Function to render trailers on the current page
    function renderTrailers() {
        trailerList.innerHTML = ''; // Clear the trailer list
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentTrailers = trailers.slice(startIndex, endIndex);

        currentTrailers.forEach(trailer => {
            const trailerCard = document.createElement('div');
            trailerCard.classList.add('trailer-card');
            trailerCard.innerHTML = `
                <img src="${trailer.photo}" alt="${trailer.name}">
                <h3>${trailer.name}</h3>
                <p>Rented by: ${trailer.rentedBy}</p>
                <p>Price: $${trailer.price}</p>
                <p>Pickup Location: ${trailer.pickupLocation}</p>
                <p>Loading Quantity: ${trailer.loadingQuantity} kg</p>
            `;
            trailerList.appendChild(trailerCard);
        });

        renderPagination();
    }

    // Function to render pagination buttons
    function renderPagination() {
        pagination.innerHTML = ''; // Clear pagination

        const totalPages = Math.ceil(trailers.length / itemsPerPage);

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.classList.add('pagination-button');
        prevButton.disabled = currentPage === 1;
        prevButton.classList.toggle('disabled', currentPage === 1);
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderTrailers();
            }
        });
        pagination.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('pagination-button');
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                currentPage = i;
                renderTrailers();
            });
            pagination.appendChild(button);
        }

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.classList.add('pagination-button');
        nextButton.disabled = currentPage === totalPages;
        nextButton.classList.toggle('disabled', currentPage === totalPages);
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderTrailers();
            }
        });
        pagination.appendChild(nextButton);
    }

    // Update trailers per page based on user selection
    trailersPerPageSelect.addEventListener('change', (event) => {
        itemsPerPage = parseInt(event.target.value);
        currentPage = 1;
        renderTrailers();
    });

    // Show modal when "Add Trailer" button is clicked
    addTrailerBtn.addEventListener('click', () => {
        trailerModal.style.display = 'block';
    });

    // Close modal when "X" is clicked
    closeModal.addEventListener('click', () => {
        trailerModal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === trailerModal) {
            trailerModal.style.display = 'none';
        }
    });

    // Handle form submission to add a new trailer
    trailerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newTrailer = {
            id: trailers.length + 1,
            name: document.getElementById('trailer-name').value,
            rentedBy: document.getElementById('rented-by').value,
            price: document.getElementById('price').value,
            pickupLocation: document.getElementById('pickup-location').value,
            loadingQuantity: document.getElementById('loading-quantity').value,
            photo: document.getElementById('photo-url').value
        };

        trailers.push(newTrailer);
        trailerModal.style.display = 'none';
        trailerForm.reset();
        renderTrailers();
    });

    // Initial rendering of trailers and pagination
    renderTrailers();
});
