import mongoose, { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayListDto {
  @ApiProperty({
    description: 'track identifier',
    nullable: false,
    type: String,
  })
  readonly trackId: ObjectId;

  @ApiProperty({ description: 'playlist name', nullable: false })
  readonly name: string;
}
