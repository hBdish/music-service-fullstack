import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Track, TrackSchema } from '../../track/schemas/track.schema';
import { ApiProperty } from '@nestjs/swagger';

export type PlayListDocument = HydratedDocument<PlayList>;

@Schema()
export class PlayList {
  @ApiProperty({ description: 'play list name', nullable: false })
  @Prop()
  name: string;

  @ApiProperty({
    description: 'tracks list',
    type: mongoose.Schema.Types.ObjectId,
    nullable: false,
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }] })
  tracks: Track[];
}

export const PlayListSchema = SchemaFactory.createForClass(PlayList);
