import axios from "axios";
import { api_url } from "../../../../config/config";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { phone, email, type } = req.body;

            const response = await axios({
                method: "POST",
                url: `${api_url}/otp_verification_form/send-otp`,
                data: {
                    ...(type === 'email' ? { to_email: email, to_mobile: phone } : { to_mobile: phone }),
                    type: type || 'phone',
                },
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200 && response.data.token) {
                res.status(200).json({
                    success: true,
                    token: response.data.token,
                    message: `OTP sent successfully to ${type === 'email' ? 'email' : 'phone'}!`
                });
            } else {
                res.status(500).json({ success: false, message: "Token not received from API" });
            }

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error sending OTP",
                error: error.message
            });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
    }
}
