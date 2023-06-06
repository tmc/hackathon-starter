// This is a basic k6 load generation script that will send a GraphQL query to the gateway.
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 1, // number of virtual users
    duration: '30s', // test duration
};

export default function () {
    let url = 'http://localhost:4000/';
    let headers = {
        'Cache-Control': 'no-cache',
        'Origin': 'http://localhost:4000',
        'Referer': 'http://localhost:4000/',
        'Content-Type': 'application/json',
    };

    let userId = __VU; // use the VU number as the user id
    let payload = JSON.stringify({
        "query":"query User($userId: ID!) {\n  user(id: $userId) {\n    id\n    username\n    description\n  }\n}",
        "variables":{"userId": userId},
        "operationName":"User"
    });

    let response = http.post(url, payload, { headers: headers });

    // Add checks on the response
    check(response, {
        'is status 200': (r) => r.status === 200,
        'is username present in response body': (r) => r.body.indexOf(`user${userId}`) !== -1,
    });

    sleep(1);
}

