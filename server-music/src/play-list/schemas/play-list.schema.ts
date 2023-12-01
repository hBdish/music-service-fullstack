import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Track } from '../../track/schemas/track.schema';

export type PlayListDocument = HydratedDocument<PlayList>;

@Schema()
export class PlayList {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }] })
  tracks: Track[];
}

export const PlayListSchema = SchemaFactory.createForClass(PlayList);
