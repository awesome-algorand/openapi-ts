// This file is auto-generated by @hey-api/openapi-ts

/**
 * Foo
 */
export type Foo = {
    page?: number;
};

export type PostFooData = {
    /**
     * Foo
     */
    body: Foo;
    path?: never;
    query?: never;
    url: '/foo';
};

export type PostFooResponses = {
    /**
     * OK
     */
    200: unknown;
};