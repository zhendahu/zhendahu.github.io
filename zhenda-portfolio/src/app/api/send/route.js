import { NextResponse} from "next/server";
import { Resend } from "resend";

export async function GET(req) {
    const { body } = await req.json();
    const { email, subject, message } = body;
    const resend = new Resend(process.env.resend_api_key)

    try {
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'zhendahu@gmail.com',
            reply_to: email,
            subject: subject,
            text: message
        })
        return NextResponse.json({ data })
    }
    catch (error) {
        return NextResponse.json({ error })
    }
}