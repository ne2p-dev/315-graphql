import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document, Schema } from 'mongoose';

export interface Users extends Document {
  firstname: string,
  lastname: string,
  email: string,
}

export const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
})
