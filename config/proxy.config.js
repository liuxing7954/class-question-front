const proxyToggle = true;

const proxy = {
    "/api": {
        "target": "http://127.0.0.1:8001/",
        "changeOrigin": true,
    }
};
export default proxyToggle ? proxy : {};
