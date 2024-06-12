/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        UPSTASH_REDIS_REST_URL: 'https://thorough-frog-32499.upstash.io',
        UPSTASH_REDIS_REST_TOKEN: 'AX7zAAIncDFjMzMzYWMyOTEwOTI0YmUxYTJkOGE5OTAxMzI0MTQ0YnAxMzI0OTk',
    
        GOOGLE_CLIENT_ID: '245933819274-8uo6r5qhtv2uanacg3q1dt8q1rprd1v4.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
    
        NEXTAUTH_SECRET: 'loveyouineveryuniversesahana'
      }
};

export default nextConfig;
