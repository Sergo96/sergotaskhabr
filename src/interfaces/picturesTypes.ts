export interface iPicture {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface iState {
  data: iPicture[];
}

export interface iModal {
  openModal: boolean;
  handleClose: () => void;
  url: string;
}

export interface iPictureCard {
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
  handleDeleteItem: (id: number, e: any) => void;
}

export interface iBasePagination {
  count: number;
  handleChangePage: (event: any, newPage: number) => void;
}
