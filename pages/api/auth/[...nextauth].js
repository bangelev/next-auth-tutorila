// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'

// export default NextAuth({
//     providers: [
//         Providers.GitHub({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//         }),
//     ],
// })

import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
    adapter: MongoDBAdapter(clientPromise),
    database: process.env.DB_URI,
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.AUTH_SECRET,
        // encode: async({ secret, token }) => {
        //     return jwt.sign({...token, userId: token.id }, secret, {
        //         algorithm: 'HS256',
        //         expiresIn: 30 * 24 * 60 * 60, // 30 days
        //     })
        // },
        // decode: async({ secret, token }) => {
        //     return jwt.verify(token, secret, { algorithms: ['HS256'] })
        // },
    },
    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id
            session.user.role = 'user'

            return session
        },
    },
}

export default NextAuth(authOptions)