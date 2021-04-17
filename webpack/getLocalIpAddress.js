const os = require('os');
const networkInterfaces = os.networkInterfaces() || {};

function getLocalIpAddress() {
    const en0 = networkInterfaces.en0 || [];
    const address = en0 && en0[0].address;

    return address;
}

module.exports = getLocalIpAddress;
