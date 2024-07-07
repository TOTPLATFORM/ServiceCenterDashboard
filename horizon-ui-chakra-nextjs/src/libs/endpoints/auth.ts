"use client";

import { ILogin } from "types/ILogin";
import fetchApi from "utils/baseFetch";
import { baseUrl } from "utils/header";

/**
 * Function to perform login operation.
 * @param loginData The login data object containing username and password.
 * @returns A promise resolving to a string representing the success message.
 */
const login = async (loginData: ILogin): Promise<string> => {
    const data = await fetchApi<any>(
        `${baseUrl}/Auth/Login`,
        "POST",
        JSON.stringify(loginData)
        );

    if (typeof localStorage !== 'undefined' && data.value?.token) {
        localStorage.setItem("token", JSON.stringify(data.value.token));
        return data.successMessage;
    }
}

export default login;