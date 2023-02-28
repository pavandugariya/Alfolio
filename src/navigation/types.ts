import type { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    onboarding: undefined;
    Login: undefined;
    OTP: { phoneNu: number | string };
    Drawer: undefined;
    PickAccount: undefined;
    ShowMarksheet: undefined;
    SendDocuments: undefined;
    SendHistory: undefined;
    EditProfile: undefined;
};

export type OTPScreenRoutProps = RouteProp<RootStackParamList, 'OTP'>;