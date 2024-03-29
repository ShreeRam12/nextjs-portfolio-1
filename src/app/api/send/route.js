// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// // Check if the environment variables are available, otherwise provide default values
// const RESEND_API_KEY = process.env.RESEND_API_KEY || "your_default_api_key";
// const FROM_EMAIL = process.env.FROM_EMAIL || "your_default_email@example.com";

// // Initialize Resend instance with the API key
// const resend = new Resend(RESEND_API_KEY);

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);

//   try {
//     // Send email using Resend
//     const data = await resend.emails.send({
//       from: FROM_EMAIL,
//       to: [FROM_EMAIL, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     // Return success response
//     return NextResponse.json(data);
//   } catch (error) {
//     // Handle error and return appropriate response
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: "Failed to send email." });
//   }
// }
