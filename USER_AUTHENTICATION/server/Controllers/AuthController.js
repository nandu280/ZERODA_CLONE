const User = require("../Models/UserModel");

const { createSecretToken } = require("../util/SecretToken");

const bcrypt = require("bcrypt");


// =========================
// SIGNUP
// =========================

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check required fields
    if (!email || !password || !username) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Create user
    const user = await User.create({
      email,
      password,
      username,
    });

    // Create JWT token
    const token = createSecretToken(user._id);

    // Store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
      },
    });

  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Signup failed",
    });
  }
};


// =========================
// LOGIN
// =========================

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
      });
    }

    // Compare entered password with hashed password
    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({
        message: "Incorrect email or password",
      });
    }

    // Create JWT token
    const token = createSecretToken(user._id);

    // Store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Login failed",
    });
  }
};