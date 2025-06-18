import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ServiceHero from '../component/servicepage/ServiceHero';
import ServiceBody from '../component/servicepage/ServiceBody';
import { serviceAPI } from '../apis/apiService';

function ServicePage() {
    const { slug } = useParams();
    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                setLoading(true);
                const res = await serviceAPI.getServiceBySlug(slug);
                if (res.success) {
                    setServiceData(res.data);
                } else {
                    setError('Service not found');
                }
            } catch (err) {
                setError('Failed to load service');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [slug]);

    if (loading) return <div className="text-center py-5">Loading...</div>;
    if (error) return <div className="text-center py-5 text-danger">{error}</div>;

    return (
        <>
            <ServiceHero serviceData={serviceData} />
            <ServiceBody serviceData={serviceData} />
        </>
    );
}

export default ServicePage;
