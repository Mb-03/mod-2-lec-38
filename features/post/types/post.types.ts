export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}


export type PaginationMeta = {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}


export type NormalizedPostsResponse = {
    data: Post[];
    meta: PaginationMeta
}