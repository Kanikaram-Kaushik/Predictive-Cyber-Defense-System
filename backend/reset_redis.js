const { createClient } = require('redis');

(async () => {
    const client = createClient();
    try {
        await client.connect();
        // Clear all keys related to localhost (assuming ::1 or 127.0.0.1)
        // Adjust for IP if needed, usually mapped as ::1 or 127.0.0.1
        const ip4 = '127.0.0.1';
        const ip6 = '::1';

        const keys = [
            `blacklist:${ip4}`, `rate:${ip4}`, `failed_login:${ip4}`, `failed_passwords:${ip4}`,
            `blacklist:${ip6}`, `rate:${ip6}`, `failed_login:${ip6}`, `failed_passwords:${ip6}`
        ];

        console.log("Deleting keys:", keys);
        await client.del(keys);

        console.log("✅ Redis State Cleared for Localhost");
    } catch (e) {
        console.error("Redis Error:", e);
    } finally {
        await client.disconnect();
    }
})();
