// Get references to the search bar and button
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

// Function to handle the search when the button is clicked
function handleSearch() {
    const searchTerm = searchBar.value.trim();

//Function to search in a new tab the specific searched item
function newSearch() {
    window.open(`https://www.google.com/search?q=${searchTerm}`, "_blank");
}
    // Perform your search logic here
    // For this example, we'll display an alert
    if (searchTerm !== '') {
        newSearch();
    } else {
        alert('Please enter a search term.');
    }
}

// Attach the click event listener to the search button
searchButton.addEventListener('click', handleSearch);
