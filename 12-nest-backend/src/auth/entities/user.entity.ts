import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  //_id: string; Mongo creates this automatically
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ default: true })
  isActive: boolean;
  @Prop({ required: true })
  name: string;
  @Prop({ minlength: 6, required: true })
  password: string;
  @Prop({ type: [String], default: ['user'] }) // ['admin', 'user']
  roles: string[];
}

export const userSchema = SchemaFactory.createForClass(User);
