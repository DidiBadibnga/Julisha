import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID ,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
    })
  ]
})