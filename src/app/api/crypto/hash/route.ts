import { AES } from "crypto-js";

export async function POST(
    request: Request
) {
    const { object } = await request.json()

    const encrypted = AES.encrypt(JSON.stringify(object), process.env.SECRET_KEY as string).toString()

    return Response.json({
        text: encrypted,
    }, {
        status: 200
    })
}