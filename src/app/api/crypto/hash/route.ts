import jwt from 'jsonwebtoken'

export async function POST(
    request: Request
) {
    const { object } = await request.json()

    const encrypted = jwt.sign(object, process.env.SECRET_KEY as string)

    return Response.json({
        text: encrypted,
    }, {
        status: 200
    })
}