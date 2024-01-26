import { Json as BaseJson } from '../types';

export type Fetch = {
  id: number,
  address: string,
  city: string,
  state: string,
  cep: string,
  created_at: string,
  deleted_at: string,
}

export type Json = {
  id: number,
  address: string,
  city: string,
  state: string,
  cep: string,
  createdAt: string,
  deletedAt: string,
};
