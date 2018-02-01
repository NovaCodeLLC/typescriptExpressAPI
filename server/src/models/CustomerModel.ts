/**
 * Created by Thomas Lesperance on 2/1/2018.
 */
import mongoose = require('mongoose');
import { Model, Document } from "mongoose";
import { customerSchema } from "../schemas/CustomerSchema";
import { CustomerInterface as ICustomer } from "../interfaces/CustomerInterface";

export interface customerModel extends ICustomer, Document {}

export interface customerModelStatic extends Model{}

export const Customer = mongoose.model<customerModel, customerModelStatic>('Customer', customerSchema);