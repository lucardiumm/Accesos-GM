import { AES, enc } from "crypto-js"

export async function POST(
    request: Request
) {
    const { object } = await request.json()

    const savedBytes = AES.decrypt(object, process.env.SECRET_KEY as string)
    const decData = JSON.parse(savedBytes.toString(enc.Utf8))
    console.log(decData)
    
    return Response.json({
        text: decData,
    }, {
        status: 200,
    })
}