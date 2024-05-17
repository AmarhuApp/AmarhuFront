// reportService.js
export default {
    fetchVideos() {
        return fetch('http://localhost:3004/videos')
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }
};
