// const API_URL = "http://ec2-18-118-95-190.us-east-2.compute.amazonaws.com:3000";
const API_URL = "http://localhost:3000";

const request = async (endpoint, body, headers = {}) => {
    const res = await fetch(API_URL + endpoint, {
        method: body ? 'POST' : 'GET',
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    });
    return res.json();
};

// TODO: export API functions here
export const testApi = async () => {
    const res = await request('/users/add', { user: { name: "Poopyhead", id: "abc" } });
    console.log(res);
};

export const logInOrSignUp = async (accessToken) => {
    return request('/auth/logInOrSignUp', { accessToken });
}

export const getListings = async () => {
    const res = await request('/listings/getListings');
    console.log(res);
    return res;
    
}