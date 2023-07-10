/* authSlice.ts */
export interface LOGIN_USER {
  id: number;
  username: string;
}

export interface FILE extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

export interface PROFILE {
  id: number;
  user_profile: number;
  img: string | null;
}
