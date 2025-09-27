export interface ResponseApi<T> {
  status?: string;
  message?: string;
  data: T;
  metadata?: PaginationMetadata; 
} 

export interface PaginationMetadata {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}