import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class Place {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly longitude: number;

  @IsNumber()
  readonly latitude: number;

  @IsDateString()
  readonly created_at: string;

  @IsDateString()
  readonly updated_at: string;
}
