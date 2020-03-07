import { get } from "../helper/helper";
import { GitResponse } from "../types/types";


describe('Testing the node fetch Get', () => {

    it('Validate the get function', async () => {
        const getcall = get('https://api.github.com/users/github');
        const resposneJson: GitResponse = await getcall.then(res=>res.json());
        expect(resposneJson.avatar_url).toEqual('https://avatars1.githubusercontent.com/u/9919?v=4');
        const status = await getcall.then(res=>res.status);
        expect(status).toBe(200);

    });
})