import { ObjectId } from 'mongoose';

export class CreatePlayListDto {
  readonly name: string;
  readonly trackId: ObjectId;
}
