import jwt from 'jsonwebtoken'

const generateJWT = (payload) => {
 return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn : process.env.JWT_EXPIRE_TIME}
 )
}

export default generateJWT