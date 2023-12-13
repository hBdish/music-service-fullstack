import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlayListService } from './play-list.service';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { AddTrackToPlayListDto } from './dto/add-track-to-play-list.dto';
import { ObjectId } from 'mongoose';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PlayList } from './schemas/play-list.schema';

@ApiTags('Play lists')
@Controller('/play-lists')
export class PlayListController {
  constructor(private playListService: PlayListService) {}

  @Get()
  @ApiOperation({ summary: 'Get all playLists' })
  getAll() {
    return this.playListService.getAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Note identifier',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: PlayList,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  getPlaylist(@Param('id') id: ObjectId) {
    return this.playListService.getPlaylist(id);
  }

  @Post()
  @ApiBody({ type: CreatePlayListDto })
  create(@Body() dto: CreatePlayListDto) {
    return this.playListService.create(dto);
  }

  @Patch()
  @ApiBody({ type: AddTrackToPlayListDto })
  addTrackToPlayList(@Body() dto: AddTrackToPlayListDto) {
    return this.playListService.addTrackToPlayList(dto);
  }

  @Delete()
  @ApiBody({ type: AddTrackToPlayListDto })
  deleteTrackFromPlayList(@Body() dto: AddTrackToPlayListDto) {
    return this.playListService.deleteTrackFromPlayList(dto);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Note identifier',
  })
  @Delete(':id')
  deletePlayList(@Param('id') id: ObjectId) {
    return this.playListService.deletePlayList(id);
  }
}
