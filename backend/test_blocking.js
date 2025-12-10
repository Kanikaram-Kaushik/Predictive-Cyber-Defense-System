const http = require('http');

const SERVER_URL = 'http://localhost:3000';

function login(username, password) {
    return new Promise((resolve, reject) => {
        const req = http.request(`${SERVER_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        });
        req.on('error', reject);
        req.write(JSON.stringify({ username, password }));
        req.end();
    });
}

async function runTest() {
    console.log("--- Starting Smart Blocking Verification ---");

    // Test 1: Repeated same password (should not block)
    console.log("\nTest 1: 15 attempts with SAME wrong password...");
    for (let i = 1; i <= 15; i++) {
        const res = await login('admin', 'wrongpass');
        if (res.status === 403) {
            console.error(`❌ FAILED: Blocked at attempt ${i} with SAME password!`);
            process.exit(1);
        }
        process.stdout.write('.');
        await new Promise(r => setTimeout(r, 200)); // Avoid rate limit
    }
    console.log("\n✅ Test 1 Passed: No block for repeated same password.");

    // Test 2: Unique passwords (should block at 10th unique)
    console.log("\nTest 2: 12 attempts with UNIQUE wrong passwords...");
    // Previous attempts ('wrongpass') count as 1 unique.

    for (let i = 1; i <= 12; i++) {
        const pass = `unique_wrong_${i}`;
        const res = await login('admin', pass);

        // Wait first to avoid rate limit affecting result
        await new Promise(r => setTimeout(r, 200));

        // Logic: if uniqueCount >= 10, block.
        // i=1 (total unique=2) ... i=9 (total unique=10) => BLOCK.

        if (i < 9 && res.status === 403) {
            console.error(`❌ FAILED: Premature block at unique pass ${i}`);
            process.exit(1);
        }
        if (i >= 9 && res.status === 403) {
            console.log(`✅ Test 2 Passed: Blocked at unique pass ${i} (Total unique: ${1 + i})`);
            return;
        }
        process.stdout.write('.');
    }
    console.error("❌ FAILED: Did not block even after many unique passwords.");
}

runTest().catch(console.error);
