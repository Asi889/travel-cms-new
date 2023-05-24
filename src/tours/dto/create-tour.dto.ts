import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class CreateTourDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  content?: string;

  @ApiProperty({ required: false })
  published?: boolean;

  @ApiProperty()
  authorId?: number;

  //   @ApiProperty()
  //   auther?: User;
}
