import axios from "axios";
import { api_url } from "../../../config/config";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            
            const response = await axios({
                method: "POST",
                url: `${api_url}/charges/getrates`,
                data: req.body,
                headers: {
                    "Content-Type": "application/json", 
                },
            });

            if (response.status === 200) {
                res.status(200).json(response.data);
            } else {
                res.status(500).json({ success: false, message: "Internal server error" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
    }
}
