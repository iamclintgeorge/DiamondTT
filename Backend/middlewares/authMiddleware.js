export const authMiddleware = (req, res, next) => {
  console.log("Cookies:", req.cookies);
  const token = req.cookies.uid;
  console.log("Token in cookie:", token);

  if (!token) {
    console.log("Token not found in authMiddleware");
    return res.status(401).json({ message: "You are not authenticated" }); // Return JSON error
  }

  try {
    const user = jwt.verify(token, jwtSecret);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("uid");
    console.log("authMiddleware:", err);
    return res
      .status(401)
      .json({ message: "You are not authenticated: Invalid token" }); // Return JSON error
  }
};
