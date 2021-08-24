export default{
    DB:{
        URI: process.env.MONGODB_URI || "",
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    },
    jwtSecret: process.env.JWT_SECRET || "secret_key",
}