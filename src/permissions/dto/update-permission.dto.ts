import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePermissionDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
