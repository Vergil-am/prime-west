import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "@/lib/MongoClient";
import User from "@/app/models/UserSchema";
const bcrypt = require("bcrypt");

export const AuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email" },
        password: { label: "password" },
      },
      async authorize(credentials, req) {
        //perform your login logic here
        try {
          await db.connect();
          const user = await User.findOne({ Email: credentials?.email });
          if (user) {
            if (bcrypt.compareSync(credentials?.password, user.Password)) {
              return user;
            }
          }
          await db.disconnect();
        } catch (err) {
          console.log(err);
        }

        return null;
      },
    }),
  ],
};
