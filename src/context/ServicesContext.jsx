// context/ServicesContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ServicesContext = createContext();

export const useServices = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error('useServices must be used within a ServicesProvider');
    }
    return context;
};

export const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchServices = async () => {
        try {
            setLoading(true);
            setError(null);

            // Direct axios call instead of serviceAPI
            const response = await axios.get('http://localhost:5000/api/services');

            if (response.data) {
                // Handle different response formats
                const servicesData = Array.isArray(response.data) ? response.data : response.data.data || [];
                setServices(servicesData);
            } else {
                setError('No services data found');
                setServices([]);
            }
        } catch (err) {
            setError('Failed to load services');
            setServices([]);
            console.error('Error fetching services:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const value = {
        services,
        loading,
        error,
        refetchServices: fetchServices
    };

    return (
        <ServicesContext.Provider value={value}>
            {children}
        </ServicesContext.Provider>
    );
};