import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID le_cVWwfkFCXvUXxtoV6RdLcKLZa0ZbFbw8ZRGN6i6c"
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;