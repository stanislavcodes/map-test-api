import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlaceService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createPlaceDto: CreatePlaceDto) {
    return this.prismaService.place.create({
      data: createPlaceDto,
    });
  }

  findAll() {
    return this.prismaService.place.findMany();
  }

  findOne(id: string) {
    return this.prismaService.place.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePlaceDto: UpdatePlaceDto) {
    return this.prismaService.place.update({
      where: { id: id },
      data: updatePlaceDto,
    });
  }

  remove(id: string) {
    return this.prismaService.place.delete({
      where: { id: id },
    });
  }
}
