import "dotenv/config";

const dbConfig = {
  url: process.env.MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default dbConfig;
