const PRODUCTION_BACKEND_URL = 'https://YOUR-BACKEND-URL-HERE';

const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
window.APP_CONFIG = {
    backendURL: isLocal ? 'http://localhost:5000' : PRODUCTION_BACKEND_URL
};