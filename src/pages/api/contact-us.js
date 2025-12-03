import axios from "axios";
import { api_url } from "../../../config/config";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await axios({
                method: "POST",
                url: `${api_url}/send-feedback`,
                data: req.body,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": req.headers.authorization,
                },
            });

            if (response.status === 200) {
                res.status(200).json({ success: true, message: "Form submitted successfully!" });
            } else {
                res.status(500).json({ success: false, message: "Error submitting form" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Error submitting form", error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
    }
}
