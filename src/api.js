import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = "http://ec2-18-118-95-190.us-east-2.compute.amazonaws.com:3000";
// const API_URL = "http://localhost:3000";

const request = async (endpoint, body, headers = {}) => {
    const token = await AsyncStorage.getItem("@ACCESS_TOKEN");
    if (token) headers["Authorization"] = token;
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

export const postListing = async ({
    title,
    price,
    type,
    category,
    description
}) => {
    return request('/listings', {
        title, price, type, category, description
    });
}