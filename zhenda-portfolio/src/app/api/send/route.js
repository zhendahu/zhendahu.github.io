import { NextResponse} from "next/server";
import { Resend } from "resend";

export async function GET() {
    console.log(process.env.resend_api_key)
    const resend = new Resend(process.env.resend_api_key)

    try{
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'zhendahu@gmail.com',
            subject: 'Hello World',
            html: '<p>hello world</p>'
        })
        return NextResponse.json({ data })
    }
    catch (error){
        return NextResponse.json({ error })
    }
}