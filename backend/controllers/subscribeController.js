import Subscriber from "../models/Subscriber.js";
import transporter from "../configs/nodemailer.js";

export const sendSubscriberEmail = async(req, res)=>{
  const { email } = req.body;

  try {
    // Check for existing subscriber
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.json({success: false, message: "Already subscribed!" });
    }

    // Save subscriber
    const subscriber = new Subscriber({ email });
    await subscriber.save();

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Subscription Confirmed!",
      html: `
      <p>Thanks for subscribing to <b>blogOut</b>. Stay tuned for updates!</p>
      <p> Explore our blogs at <a href=${process.env.FRONTEND_URL}>blogOut Website</a></p>
      `,
    });

    res.json({success: true, message: "Subscription successful!" });
  } catch (error) {
    res.json({ success: false, message: "message" });
  }
}