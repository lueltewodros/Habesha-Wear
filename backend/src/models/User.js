// Sample model structure
const User = {
  schema: {
    username: String,
    email: String,
    createdAt: { type: Date, default: Date.now },
  },
};

export default User;
