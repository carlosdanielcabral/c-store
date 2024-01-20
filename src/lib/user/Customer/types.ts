import { Json as BaseJson } from '../types';

export type Fetch = {
  id: string,
  name: string,
  last_name: string,
  email: string,
  image: string,
  password: string,
  created_at: string,
  deleted_at: string,
}

export type Json = {
} & BaseJson;
