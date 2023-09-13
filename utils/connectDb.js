import mongoose from "mongoose";
// define MongoDB Url in the environment variables
const localUri = process.env.DATABASE_URL.replace("<username>", process.env.DATABASE_USERNAME).replace("<password>", process.env.DATABASE_PASSWORD);

const connection = {};
export async function connectDb() {
  if (connection.isConnected) {
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(localUri);
  connection.isConnected = db.connections[0].readyState;
}

export async function disconnectDB() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not discounted");
    }
  }
}
