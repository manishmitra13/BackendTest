import { PerformAPI } from "../helper/helper";
import { Followers, GitResponse, ResponsePut } from "../types/types";

describe('Testing the node fetch', () => {
    it('Validate the get function', async () => {
        const getcall = PerformAPI('https://api.github.com/users/github', 'GET');
        const resposneJson: GitResponse = await getcall.then(res => res.json());
        expect(resposneJson.avatar_url).toEqual('https://avatars.githubusercontent.com/u/9919?v=4');
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

    it('Validate the followers API endpoint', async () => {
        const getcall = PerformAPI('https://api.github.com/users/github/followers', 'GET');
        const resposneJson:Followers[] = await getcall.then(res => res.json());
        const status = await getcall.then(res => res.status);
        expect(status).toBe(200);
        const actualStarredurl = resposneJson.map(x=>x.starred_url).filter((x: String)=>{
            if(x.includes('yuya')){
                return x
            }
        });
        expect(actualStarredurl[0]).toEqual('https://api.github.com/users/yuya/starred{/owner}{/repo}')
    });
})