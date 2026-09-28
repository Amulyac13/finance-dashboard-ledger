const mongoose = require("mongoose");

// we are blacklisting the token so that it cannot be used again for any future requests

const tokenBlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required to blacklist"],
      unique: [true, "Token is already blacklisted"],
    },
  },
  {
    timestamps: true,
  },
);

// when you blacklist a token, it will be automatically removed from the database after 3 days (the token's expiration time)
tokenBlacklistSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 60 * 60 * 24 * 3, // 3 days
  },
);

const tokenBlackListModel = mongoose.model(
  "tokenBlackList",
  tokenBlacklistSchema,
);

module.exports = tokenBlackListModel;
