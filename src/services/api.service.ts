import axios from 'axios';
import {
  CreateNoteProps,
  DeleteNotesProps,
  ListNotesProps,
  UpdateNotesProps,
} from '../models/note.model';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

interface ApiResponse {
  ok: boolean;
  messege: string;
  data?: any;
}

export class ApiService {
  public static async listNotes(props: ListNotesProps): Promise<ApiResponse> {
    try {
      const result = await api.get(
        `/users/${props.email}/notes?type=${props.type}`
      );
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async createNote(props: CreateNoteProps): Promise<ApiResponse> {
    try {
      const result = await api.post(`/users/${props.email}/notes/`);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async deleteNote(
    props: DeleteNotesProps
  ): Promise<ApiResponse> {
    try {
      const result = await api.delete(
        `/users/${props.email}/notes/${props.id}`
      );
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async updateNotes(
    props: UpdateNotesProps
  ): Promise<ApiResponse> {
    try {
      const result = await api.put(
        `/users/${props.email}/notes/${props.id}`,
        props
      );
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
}
