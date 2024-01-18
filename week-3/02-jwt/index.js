const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  } else {
    const token = jwt.sign({ username }, jwtPassword);
    return token;
  }
}

function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (err) {}
  return false;
}

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
