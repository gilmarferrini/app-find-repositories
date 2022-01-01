/* eslint-disable @typescript-eslint/naming-convention */
import { Owner } from './owner';

export interface Repository {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  owner: Owner;
  updated_at: string;
}
