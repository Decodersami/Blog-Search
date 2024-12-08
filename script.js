const resultsContainer = document.getElementById('results');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.getElementById('search-btn').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-box').value.trim();
    const category = document.getElementById('category-filter').value;
    const sortBy = document.getElementById('sort-filter').value;

    resultsContainer.innerHTML = ''; // Clear previous results

    if (!searchQuery) {
        resultsContainer.innerHTML = '<p>Please enter a search query.</p>';
        return;
    }

    // Mock results for demonstration purposes
    const mockResults = [
        { title: 'AI in Technology', category: 'tech', popularity: 90, date: '2024-01-01' },
        { title: 'Health Tips', category: 'health', popularity: 80, date: '2023-12-15' },
        { title: 'Education Innovations', category: 'education', popularity: 70, date: '2024-02-10' },
    ];

    let filteredResults = mockResults.filter(item =>
        (category === 'all' || item.category === category) &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'recent') {
        filteredResults.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'popular') {
        filteredResults.sort((a, b) => b.popularity - a.popularity);
    }

    if (filteredResults.length) {
        filteredResults.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('result-card');
            card.innerHTML = `<h3>${item.title}</h3><p>Category: ${item.category}</p><p>Published: ${item.date}</p>`;
            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
});
