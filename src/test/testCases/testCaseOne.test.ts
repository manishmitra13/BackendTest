import { PerformAPI } from "../helper/helper";
import { Followers, GitResponse, RecievedEvents, ResponsePut } from "../types/types";

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
        const resposneJson: ResponsePut = await postRequest.then(res => res.json());
        expect(resposneJson.status).toEqual('success');
    })

    it('Validate the followers API endpoint', async () => {
        const getcall = PerformAPI('https://api.github.com/users/github/followers', 'GET');
        const resposneJson: Followers[] = await getcall.then(res => res.json());
        const status = await getcall.then(res => res.status);
        expect(status).toBe(200);
        const actualStarredurl = resposneJson.map(x => x.starred_url).filter((x: String) => {
            if (x.includes('yuya')) {
                return x
            }
        });
        expect(actualStarredurl[0]).toEqual('https://api.github.com/users/yuya/starred{/owner}{/repo}')
    });

    it('Validate the Repo Name', async () => {
        const getCall = PerformAPI('https://api.github.com/users/remiel/received_events', 'GET');
        const resposneJson: RecievedEvents[] = await getCall.then(res => res.json());
        const repoName = resposneJson.map(x => x.repo.name).filter((x: string) => {
            if (x.includes('india')) {
                return x;
            }
        })[0]
        expect(repoName).toEqual('github/india')
        Object.entries(resposneJson).forEach(([key, value]) => {
            expect(key).toBeDefined();
            expect(value).toBeDefined();
        }
        );
    })

})