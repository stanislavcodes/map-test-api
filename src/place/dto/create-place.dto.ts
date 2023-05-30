import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly longitude: number;

  @IsNumber()
  readonly latitude: number;
}
