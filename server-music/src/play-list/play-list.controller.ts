import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlayListService } from './play-list.service';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { AddTrackToPlayListDto } from './dto/add-track-to-play-list.dto';
import { ObjectId } from 'mongoose';

@Controller('/play-lists')
export class PlayListController {
  constructor(private playListService: PlayListService) {}

  @Get()
  getAll() {
    return this.playListService.getAll();
  }

  @Post()
  create(@Body() dto: CreatePlayListDto) {
    return this.playListService.create(dto);
  }

  @Patch()
  addTrackToPlayList(@Body() dto: AddTrackToPlayListDto) {
    return this.playListService.addTrackToPlayList(dto);
  }

  @Delete()
  deleteTrackFromPlayList(@Body() dto: AddTrackToPlayListDto) {
    return this.playListService.deleteTrackFromPlayList(dto);
  }

  @Delete(':id')
  deletePlayList(@Param('id') id: ObjectId) {
    return this.playListService.deletePlayList(id);
  }
}
