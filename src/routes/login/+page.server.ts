import { URL } from '../../util';
import type { PageServerLoad, Actions } from './$types';


export const load: PageServerLoad = async ({url}) => {
    const nextpg = url.searchParams.get('nextpg')
    console.log(nextpg)
	return {
        nextpg : nextpg,
		logged_in: false
	};
};

export const actions = {
	login: async ({ request }) => {
        const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
        
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': email,
                'password': password,
            })
        }

        // const response = await fetch(API.login, fetchOptions);
        const response = await fetch(URL+'login/',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password,
            }),
            credentials: 'include',
            mode:'cors'
        })

        const resp_content = await response.json()

        if (resp_content['success']){
            return { success: true, response: resp_content };
        }


	},
} satisfies Actions;