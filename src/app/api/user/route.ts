import { prisma as db } from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import * as z from 'zod'


const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.email('Invalid email').min(1, 'Email is required'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });


export async function POST(req: Request){
    try{
        const body = await req.json ();
        const { email, username, password } = userSchema.parse(body);

        // check if the email exists
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        });
        if(existingUserByEmail){
            return NextResponse.json({ user: null, message:"User with this email already exists"}, {status:409})
        }

        //check if the username exists
        const existingUserByUsername = await db.user.findUnique({
            where: {username: username}
        });
        if(existingUserByUsername){
            return NextResponse.json({ user: null, message:"User with this username already exists"}, {status:409})
        }


        const hashedPassword = await hash(password, 10);


        const newUser = await db.user.create({
            data:{
                username,
                email,
                password: hashedPassword
            }
        })
        const {password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201});

    }catch(error){

        return NextResponse.json({message: "Something went wrong"}, {status: 500});

    }
}