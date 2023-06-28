import mongoose from "mongoose";

interface ConnectionInterface {
  isConnected?: boolean | number;
}
const connection: ConnectionInterface = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected == 1) {
      return;
    }
    await mongoose.disconnect();
  }
  if (!process.env.MONGODB_URI) {
    throw new Error("connection failed envirement variable MONGO_URI not found");
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    }
  }
}

const db = { connect, disconnect };
export default db;
