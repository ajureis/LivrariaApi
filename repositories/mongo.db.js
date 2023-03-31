import mongoose from "mongoose";

async function connect() {
  const uri =
    "mongodb+srv://ju07reis:admin@cluster0.ljxwlis.mongodb.net/livraria?retryWrites=true&w=majority";
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
