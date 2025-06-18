const BASE_URL = 'http://localhost:5000/api'; // Or your actual backend URL

export const serviceAPI = {
    getAllServices: async () => {
        try {
            const response = await fetch(`${BASE_URL}/services`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching services:', error);
            throw error;
        }
    },

    getServiceBySlug: async (slug) => {
        try {
            const response = await fetch(`${BASE_URL}/services/${slug}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching service:', error);
            throw error;
        }
    }
};