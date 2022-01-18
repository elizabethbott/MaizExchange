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

export const getGoogleAccountInfo = async (accessToken) => {
    const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    });
    const data = await res.json();
    return {
        email: data.email,
        firstName: data.given_name,
        lastName: data.family_name
    }
};