/* eslint-disable @typescript-eslint/naming-convention */
import { Topic } from './topic';

export interface TopicsHttpResponse {
  total_count: number;
  items: Topic[];
}
