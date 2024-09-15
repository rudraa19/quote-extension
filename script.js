document.addEventListener('DOMContentLoaded', () => {
    const quoteElem = document.getElementById('quote');
    const authorElem = document.getElementById('author');
    const apiUrl = 'https://dummyjson.com/quotes/random';

    async function fetchQuote(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            quoteElem.textContent = data.quote;
            authorElem.textContent = `- ${data.author}`;
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteElem.textContent = 'Error loading quote';
            authorElem.textContent = '';
        }
    }

    fetchQuote(apiUrl);
});
