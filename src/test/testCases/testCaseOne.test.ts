import { PerformAPI } from "../helper/helper";
import { GitResponse, ResponsePut } from "../types/types";

describe('Testing the node fetch', () => {
    it('Validate the get function', async () => {
        const getcall = PerformAPI('https://api.github.com/users/github', 'GET');
        const resposneJson: GitResponse = await getcall.then(res => res.json());
        expect(resposneJson.avatar_url).toEqual('https://avatars1.githubusercontent.com/u/9919?v=4');
        const status = await getcall.then(res => res.status);
        expect(status).toBe(200);
    });

    it('Testing for the put URL', async () => {
        const url = "http://dummy.restapiexample.com"
        const postRequest = PerformAPI(url + '/api/v1/create', 'POST')
        const status = await postRequest.then(res => res.status);
        expect(status).toBe(200);
        const resposneJson : ResponsePut = await postRequest.then(res => res.json());
        expect(resposneJson.status).toEqual('success');
    })
})