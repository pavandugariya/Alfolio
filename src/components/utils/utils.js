import RNSecureStorage from "rn-secure-storage";

export const _logOutHandler = () => {
    try {

        const response = RNSecureStorage.remove("userToken");
    } catch (error) {
        console.error(error);
    }
}