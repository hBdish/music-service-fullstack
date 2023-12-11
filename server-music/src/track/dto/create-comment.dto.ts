import { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ type: String })
  readonly username: string;

  @ApiProperty({ type: String })
  readonly text: string;

  @ApiProperty({ type: String })
  readonly trackId: ObjectId;
}
