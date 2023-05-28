import { Injectable } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ToursService {
  constructor(private prisma: PrismaService) {}

  create(createTourDto: CreateTourDto) {
    return this.prisma.tour.create({ data: createTourDto });
  }

  findAll() {
    return this.prisma.tour.findMany();
  }

  findOne(id: number) {
    return this.prisma.tour.findUnique({ where: { id } });
  }

  update(id: number, updateTourDto: UpdateTourDto) {
    return this.prisma.tour.update({
      where: { id },
      data: updateTourDto,
    });
  }

  remove(id: number) {
    return this.prisma.tour.delete({ where: { id } });
  }
}
