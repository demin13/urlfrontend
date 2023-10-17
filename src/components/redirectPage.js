import React, { useEffect } from 'react';
import { API_BASE_URL } from './apiService';

function RedirectPage() {

    useEffect(() => {
        const urlParam = window.location.pathname.substring(1);
        console.log(urlParam)
        window.open(urlParam, '_blank');
        window.location.href = `${API_BASE_URL}/${urlParam}`;
    });

    return <div>Redirecting...</div>;
}

export default RedirectPage;
