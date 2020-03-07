import fetch from 'node-fetch';

export async function get(url: string) {
    const request =  await fetch(`${url}`);
    return request;
}
