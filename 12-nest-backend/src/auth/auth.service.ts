import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto, UpdateAuthDto, LoginDto, RegisterUserDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt.interface';
import { LoginResponse } from './interfaces/login-response';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    /*     const newUser = new this.userModel(createUserDto);
    return newUser.save(); */
    try {
      // 1 - Encriptar la contraseña
      const { password, ...userData } = createUserDto;
      /*
      En TypeScript, la función await se utiliza para esperar a que una promesa se resuelva antes de continuar con la ejecución del código. En este caso, la función bcryptjs.hash() devuelve una promesa que resuelve en el hash de la contraseña proporcionada.

      El primer argumento de la función bcryptjs.hash() es la contraseña que deseas hashear, y el segundo argumento es el número de rondas de encriptación que se deben realizar. En este caso, se utiliza el valor 10, lo que significa que se realizarán 10 rondas de encriptación para generar un hash más seguro.

      El resultado de la función bcryptjs.hash() se asigna a la propiedad password. Esto significa que el valor de password será el hash seguro de la contraseña original.
      */

      const newUser = new this.userModel({
        password: await bcryptjs.hash(password, 10),
        ...userData,
      });
      await newUser.save();
      /*
      El código utiliza la desestructuración de objetos en TypeScript para extraer propiedades específicas de un objeto newUser y asignarlas a una nueva variable llamada user.

      En la línea de código const { password: _, ...user } = newUser.toJSON();, se está utilizando la sintaxis de desestructuración de objetos para extraer todas las propiedades de newUser.toJSON() excepto la propiedad password.

      La parte { password: _, ...user } indica que queremos extraer todas las propiedades de newUser.toJSON() excepto password. La propiedad password se asigna a una variable _, que es una convención para indicar que no se utilizará esa variable en el código posterior. Las demás propiedades se asignan a la variable user.
      */
      const { password: _, ...user } = newUser.toJSON();
      return user;
      // 2 - Crear un nuevo usuario
      // 3 - Generar el JWT
      // 4 - Manejor las excepciones
    } catch (error) {
      if (error.code === 11000) {
        console.log(error);
        throw new BadRequestException(`${createUserDto.email} already exists`);
      }
      throw new InternalServerErrorException('Error creating user');
    }
  }

  getJwtToken(payload: JwtPayload) {

    const token = this.jwtService.sign(payload);
    return token;
  }

  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {
    const user = await this.create(registerUserDto);
    console.log(user);

    const token = this.getJwtToken({ id: user._id });
    return { user, token };
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {

    const { email, password } = loginDto;
    // 1 - Verificar que el usuario exista
    // 2 - Verificar que la contraseña sea correcta
    // 3 - Generar el JWT
    // 4 - Manejar las excepciones

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!(await bcryptjs.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _, ...result } = user.toJSON();

    return {
      user: result,
      token: this.getJwtToken({ id: user.id })
    }


  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
