import crypto from "crypto";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { regNumber } = req.body;

  const records = {
    "NAB12345": { name: "Ikenna", score: 78 },
    "NAB67890": { name: "Chinedu", score: 64 }
  };

  if (!records[regNumber]) {
    return res.status(401).json({
      success: false,
      message: "Invalid registration number"
    });
  }

  // create token
  const token = crypto.randomBytes(16).toString("hex");

  return res.status(200).json({
    success: true,
    token
  });
}
