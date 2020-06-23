import { Reply } from './reply';
import { ReplyDisplay } from './reply-display';

export class ThreadDisplay {
  threadID: number;
  threadSummary: string;
  threadDescription: string;
  replies: number;
  attachment: string;
  username: string;
  dateTime: Date;
  reply: ReplyDisplay[];
}
