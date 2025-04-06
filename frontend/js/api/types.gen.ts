// This file is auto-generated by @hey-api/openapi-ts

export type PaginatedProjectList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Project>;
};

export type PaginatedUserList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<User>;
};

export type PatchedQuery = {
  readonly id?: number;
  name?: string;
  text?: string;
  readonly created?: string;
  readonly modified?: string;
};

export type PatchedUser = {
  readonly id?: number;
  email?: string;
  /**
   * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
   */
  is_active?: boolean;
  /**
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /**
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser?: boolean;
  readonly created?: string;
  readonly modified?: string;
  last_login?: string | null;
};

export type Project = {
  readonly id: number;
  name: string;
  database: number;
};

export type Query = {
  readonly id: number;
  name: string;
  text: string;
  readonly created: string;
  readonly modified: string;
};

export type QueryError = {
  message: string;
  line: number;
  start_col: number;
  end_col: number;
};

export type QueryExecution = {
  /**
   * Query result data if the query execution was successful
   */
  results?: QueryResultData;
  /**
   * Indicates if the query execution was successful
   */
  success: boolean;
};

export type QueryPartialUpdate = {
  /**
   * The updated query object after partial update.
   */
  query: Query;
  /**
   * Errors, if any, that occurred during update.
   */
  errors?: Array<QueryError>;
};

export type QueryResultData = {
  /**
   * List of column names from the query
   */
  columns: Array<string>;
  /**
   * List of query result rows
   */
  rows: Array<Array<string | null>>;
};

export type User = {
  readonly id: number;
  email: string;
  /**
   * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
   */
  is_active?: boolean;
  /**
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /**
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser?: boolean;
  readonly created: string;
  readonly modified: string;
  last_login?: string | null;
};

export type ProjectsListData = {
  /**
   * Number of results to return per page.
   */
  limit?: number;
  /**
   * The initial index from which to return the results.
   */
  offset?: number;
};

export type ProjectsListResponse = PaginatedProjectList;

export type ProjectsCreateData = {
  requestBody: Project;
};

export type ProjectsCreateResponse = Project;

export type ProjectsQueriesListData = {
  /**
   * ID of the parent project
   */
  projectPk: number;
};

export type ProjectsQueriesListResponse = Array<Query>;

export type ProjectsQueriesCreateData = {
  /**
   * ID of the parent project
   */
  projectPk: number;
  requestBody: Query;
};

export type ProjectsQueriesCreateResponse = Query;

export type QueriesUpdateData = {
  /**
   * ID of the query
   */
  id: number;
  requestBody: Query;
};

export type QueriesUpdateResponse = Query;

export type QueriesPartialUpdateData = {
  /**
   * ID of the query
   */
  id: number;
  requestBody?: PatchedQuery;
};

export type QueriesPartialUpdateResponse = QueryPartialUpdate;

export type QueriesDestroyData = {
  /**
   * ID of the query
   */
  id: number;
};

export type QueriesDestroyResponse = void;

export type QueriesExecutionsCreateData = {
  /**
   * ID of the query
   */
  id: number;
};

export type QueriesExecutionsCreateResponse = QueryExecution;

export type UsersListData = {
  /**
   * Number of results to return per page.
   */
  limit?: number;
  /**
   * The initial index from which to return the results.
   */
  offset?: number;
};

export type UsersListResponse = PaginatedUserList;

export type UsersCreateData = {
  requestBody: User;
};

export type UsersCreateResponse = User;

export type UsersRetrieveData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
};

export type UsersRetrieveResponse = User;

export type UsersUpdateData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
  requestBody: User;
};

export type UsersUpdateResponse = User;

export type UsersPartialUpdateData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
  requestBody?: PatchedUser;
};

export type UsersPartialUpdateResponse = User;

export type UsersDestroyData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
};

export type UsersDestroyResponse = void;

export type $OpenApiTs = {
  "/api/projects/": {
    get: {
      req: ProjectsListData;
      res: {
        200: PaginatedProjectList;
      };
    };
    post: {
      req: ProjectsCreateData;
      res: {
        201: Project;
      };
    };
  };
  "/api/projects/{project_pk}/queries/": {
    get: {
      req: ProjectsQueriesListData;
      res: {
        200: Array<Query>;
      };
    };
    post: {
      req: ProjectsQueriesCreateData;
      res: {
        201: Query;
      };
    };
  };
  "/api/queries/{id}/": {
    put: {
      req: QueriesUpdateData;
      res: {
        200: Query;
      };
    };
    patch: {
      req: QueriesPartialUpdateData;
      res: {
        200: QueryPartialUpdate;
      };
    };
    delete: {
      req: QueriesDestroyData;
      res: {
        /**
         * No response body
         */
        204: void;
      };
    };
  };
  "/api/queries/{id}/executions/": {
    post: {
      req: QueriesExecutionsCreateData;
      res: {
        200: QueryExecution;
      };
    };
  };
  "/api/users/": {
    get: {
      req: UsersListData;
      res: {
        200: PaginatedUserList;
      };
    };
    post: {
      req: UsersCreateData;
      res: {
        201: User;
      };
    };
  };
  "/api/users/{id}/": {
    get: {
      req: UsersRetrieveData;
      res: {
        200: User;
      };
    };
    put: {
      req: UsersUpdateData;
      res: {
        200: User;
      };
    };
    patch: {
      req: UsersPartialUpdateData;
      res: {
        200: User;
      };
    };
    delete: {
      req: UsersDestroyData;
      res: {
        /**
         * No response body
         */
        204: void;
      };
    };
  };
};
