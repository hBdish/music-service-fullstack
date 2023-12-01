import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { PlayList, PlayListDocument } from './schemas/play-list.schema';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { AddTrackToPlayListDto } from './dto/add-track-to-play-list.dto';
import { Track, TrackDocument } from '../track/schemas/track.schema';

@Injectable()
export class PlayListService {
  constructor(
    @InjectModel(PlayList.name) private playListModel: Model<PlayListDocument>,
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
  ) {}

  async getAll(): Promise<PlayList[]> {
    const playLists = await this.playListModel.find();

    return playLists;
  }

  async create(dto: CreatePlayListDto): Promise<PlayList> {
    const playList = await this.playListModel.create({ ...dto });

    return playList;
  }

  async deletePlayList(id: ObjectId) {
    const playList = await this.playListModel.findByIdAndDelete(id);

    return playList.id;
  }

  async addTrackToPlayList(dto: AddTrackToPlayListDto): Promise<PlayList> {
    const playList = await this.playListModel.findById(dto.playListId);
    const track = await this.trackModel.findById(dto.trackId);

    if (playList.tracks.includes(track.id)) {
      return playList;
    }

    playList.tracks.push(track.id);

    await playList.save();

    return playList;
  }

  async deleteTrackFromPlayList(dto: AddTrackToPlayListDto): Promise<PlayList> {
    const playList = await this.playListModel
      .findById(dto.playListId)
      .populate('tracks');
    const track = await this.trackModel.findById(dto.trackId);

    const newTracks = playList.tracks.filter((el) => el?.['id'] !== track.id);

    playList.tracks = newTracks;

    await playList.save();

    return playList;
  }
}
