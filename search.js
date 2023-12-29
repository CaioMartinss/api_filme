function searchMovies(data, searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    return (data || []).filter((item) => {
        // Verifique se item é um objeto antes de acessar suas propriedades
        if (typeof item === 'object' && item !== null) {
            return (
                (item.title || '').toLowerCase().includes(searchTermLower) ||
                (item.description || '').toLowerCase().includes(searchTermLower) ||
                (item.trailer || '').toLowerCase().includes(searchTermLower) ||
                (item.gender || '').toLowerCase().includes(searchTermLower)
            );
        }
        return false;
    });
}

export default searchMovies;
