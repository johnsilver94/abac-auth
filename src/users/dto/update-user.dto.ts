import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  // @IsString()
  // @IsEmail()
  // readonly email: string;

  // @IsString()
  // @IsNotEmpty()
  // readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
