import jwt from 'jsonwebtoken'

export async function POST(
    request: Request
) {
    const { object } = await request.json()

    const decData = jwt.verify(object, process.env.SECRET_KEY as string)
    
    return Response.json({
        text: decData,
    }, {
        status: 200,
    })
}