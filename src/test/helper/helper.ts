import fetch from 'node-fetch';

export async function PerformAPI(url: string , method: string , body?: string) {
    const headers = { 'Content-Type': 'application/json' };
    const request = await fetch(`${url}`, {
        method: method,
        headers: headers,
        body: body
    });
    return request;
}


