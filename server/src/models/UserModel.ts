/**
 * Created by Thomas Lesperance on 2/1/2018.
 */
import mongoose = require('mongoose');
import { Model, Document } from "mongoose";
import { UserInterface as IUser } from "../interfaces/user";
import { userSchema } from "../schemas/UserSchema";

export interface userModel extends IUser, Document {}

export interface userModelStatic extends Model{}

export const User = mongoose.model<userModel, userModelStatic>('User', userSchema);