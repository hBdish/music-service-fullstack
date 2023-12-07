import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayList, PlayListSchema } from './schemas/play-list.schema';
import { PlayListController } from './play-list.controller';
import { PlayListService } from './play-list.service';
import { Track, TrackSchema } from '../track/schemas/track.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlayList.name, schema: PlayListSchema },
    ]),
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  controllers: [PlayListController],
  providers: [PlayListService],
})
export class PlayListModule {}
