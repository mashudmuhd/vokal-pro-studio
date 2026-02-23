export default function handler(req, res) {
    res.status(200).json({ status: "Vokal Pro API is Live!", endpoint: "/api/generate" });
}
