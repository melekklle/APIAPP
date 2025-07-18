const login = async (req, res) => {
  console.log(req.body);
  res.json({ message: "Login isteği alındı" });
};

const register = async (req, res) => {
  console.log(req.body);
  res.json({ message: "Register isteği alındı" });
};

module.exports = {
  login,
  register,
};
