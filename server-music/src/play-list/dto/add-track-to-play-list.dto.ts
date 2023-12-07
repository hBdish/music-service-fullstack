import { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class AddTrackToPlayListDto {
  @ApiProperty({
    description: 'playlist identifier',
    type: String,
    nullable: false,
  })
  readonly playListId: ObjectId;

  @ApiProperty({
    description: 'track identifier',
    type: String,
    nullable: false,
  })
  readonly trackId: ObjectId;
}
