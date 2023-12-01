import { ObjectId } from 'mongoose';

export class AddTrackToPlayListDto {
  readonly playListId: ObjectId;
  readonly trackId: ObjectId;
}
