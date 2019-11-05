/**
 * Action types
 */

export enum PostsTypes {
    'LOAD_REQUEST' = '@posts/LOAD_REQUEST',
    'LOAD_SUCCESS' = '@posts/LOAD_SUCCESS',
    'LOAD_FAILURE' = '@posts/LOAD_FAILURE'
}

/**
 * Data types
 */

export interface Post {
    id: number
    content: string
}

/**
 * State types
 */

export interface PostsState {
    readonly data: Post[]
    readonly loading: boolean
    readonly error: boolean
}
