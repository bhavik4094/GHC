import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const FooterNavigationContext = createContext();

export const FooterNavigationProvider = ({ children }) => {
    const [footerContent, setFooterContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFooterContent = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get('http://localhost:5000/api/footernavigation');

                if (response.data) {
                    setFooterContent(response.data);
                } else {
                    setError('No footer navigation data found');
                }
            } catch (err) {
                console.error('Footer fetch error:', err);
                setError('Failed to load footer navigation');
            } finally {
                setLoading(false);
            }
        };

        fetchFooterContent();
    }, []);

    const value = {
        ...footerContent,
        loading,
        error
    };

    return (
        <FooterNavigationContext.Provider value={footerContent}>
            {children}
        </FooterNavigationContext.Provider>
    );
};

export const useFooterNavigation = () => {
    const context = useContext(FooterNavigationContext);
    if (context === undefined) {
        throw new Error('useFooterNavigation must be used within a FooterNavigationProvider');
    }
    return context;
};