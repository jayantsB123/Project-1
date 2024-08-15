const trailers = [
 { id: 'TR1234', status: 'Active', location: 'DC 1', capacity: '20 tons', type: 'Truck' },
 { id: 'TR5678', status: 'Inactive', location: 'DC 2', capacity: '15 tons', type: 'van' },
 { id: 'TR9101', status: 'Under Maintenance', location: 'DC 3', capacity: '25 tons', type: 'Truck' },
 // Add more trailers as needed
];

const rowsPerPage = 5;
let currentPage = 1;

function renderTable(page) {
 const start = (page - 1) * rowsPerPage;
 const end = start + rowsPerPage;
 const trailerRows = trailers.slice(start, end).map(trailer => `
     <tr>
         <td>${trailer.id}</td>
         <td class="status ${trailer.status.toLowerCase().replace(' ', '-')}" >${trailer.status}</td>
         <td>${trailer.location}</td>
         <td>${trailer.capacity}</td>
         <td>${trailer.type}</td>
         <td><button class="edit-btn" onclick="editTrailer('${trailer.id}')">Edit</button>
             <button class="track-btn" onclick="trackTrailer('${trailer.id}')">Track</button>
         </td>
     </tr>
 `).join('');
 document.getElementById('trailer-body').innerHTML = trailerRows;
 document.getElementById('page-info').innerText = `Page ${currentPage}`;
}

function prevPage() {
 if (currentPage > 1) {
     currentPage--;
     renderTable(currentPage);
 }
}

function nextPage() {
 if (currentPage * rowsPerPage < trailers.length) {
     currentPage++;
     renderTable(currentPage);
 }
}

function editTrailer(trailerId) {
 alert('Edit functionality for trailer ID: ' + trailerId);
 // Add your edit functionality here
}

function trackTrailer(trailerId) {
 alert('Track functionality for trailer ID: ' + trailerId);
 // Add your track functionality here
}

// Initial render
renderTable(currentPage);
