import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { PlayListModule } from './play-list/play-list.module';

@Module({
  imports: [
    TrackModule,
    FileModule,
    PlayListModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb://admin:root@127.0.0.1:101/db_music?authSource=admin', // TODO вынести в env
    ),
  ],
})
export class AppModule {}
