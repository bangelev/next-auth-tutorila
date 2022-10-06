import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

const handler = async(req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401).json({
            error: 'Unauthenticated user',
        })
    } else {
        res.status(200).json({
            message: 'Success',
            session: session,
        })
    }
}

export default handler