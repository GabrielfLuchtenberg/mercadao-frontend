export default {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('access_token') || null,
    recentlyCreated: false,
}