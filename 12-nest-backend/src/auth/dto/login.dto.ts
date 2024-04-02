//import { ApiModelProperty } from '@nestjs/swagger';

import { IsEmail, MinLength } from "class-validator";

export class LoginDto {
  @IsEmail()
  email: string;
  @MinLength(6)
  password: string;
}
