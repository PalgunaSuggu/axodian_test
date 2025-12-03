import axios from "axios";
import { api_url } from "../../../../config/config";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { phone, email, otp, token, type } = req.body;

            if (!otp || !token) {
                return res.status(400).json({
                    success: false,
                    message: "OTP and token are required",
                    verified: false
                });
            }

            const response = await axios({
                method: "POST",
                url: `${api_url}/otp_verification_form/verify-otp`,
                data: {
                    ...(type === 'email' ? { to_email: email, to_mobile: phone } : { to_mobile: phone }),
                    otp,
                    token, // include the token from send-otp
                    type: type || 'phone',
                },
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.status === true) {
                res.status(200).json({
                    success: true,
                    message: `${type === 'email' ? 'Email' : 'Phone'} verified successfully!`,
                    verified: true,
                    token: response.data.token // Return the new token from the API response
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: response.data.message || "Invalid OTP or token",
                    verified: false
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error verifying OTP",
                error: error.message,
                verified: false
            });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
    }
}