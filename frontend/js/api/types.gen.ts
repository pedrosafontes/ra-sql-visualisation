// This file is auto-generated by @hey-api/openapi-ts

export type Activation = {
  uid: string;
  token: string;
};

export type Database = {
  readonly id: number;
  name: string;
};

export type Login = {
  username: string;
  password: string;
};

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

export type PasswordResetConfirm = {
  uid: string;
  token: string;
  new_password: string;
};

export type PatchedProject = {
  readonly id?: number;
  database_id?: number;
  readonly database?: Database;
  readonly queries?: Array<Query>;
  readonly created?: string;
  readonly modified?: string;
  name?: string;
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
  readonly created?: string;
  readonly modified?: string;
};

export type Project = {
  readonly id: number;
  database_id: number;
  readonly database: Database;
  readonly queries: Array<Query>;
  readonly created: string;
  readonly modified: string;
  name: string;
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

export type SendEmailReset = {
  email: string;
};

export type SetPassword = {
  new_password: string;
  current_password: string;
};

export type SetUsername = {
  current_password: string;
  new_email: string;
};

export type User = {
  readonly id: number;
  email: string;
  readonly created: string;
  readonly modified: string;
};

export type UserCreate = {
  email: string;
  readonly id: number;
  password: string;
};

export type UsernameResetConfirm = {
  new_email: string;
};

export type AuthLoginCreateData = {
  requestBody: Login;
};

export type AuthLoginCreateResponse = Login;

export type AuthLogoutCreateResponse = unknown;

export type AuthUsersListData = {
  /**
   * Number of results to return per page.
   */
  limit?: number;
  /**
   * The initial index from which to return the results.
   */
  offset?: number;
};

export type AuthUsersListResponse = PaginatedUserList;

export type AuthUsersCreateData = {
  requestBody: UserCreate;
};

export type AuthUsersCreateResponse = UserCreate;

export type AuthUsersRetrieveData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
};

export type AuthUsersRetrieveResponse = User;

export type AuthUsersUpdateData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
  requestBody: User;
};

export type AuthUsersUpdateResponse = User;

export type AuthUsersPartialUpdateData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
  requestBody?: PatchedUser;
};

export type AuthUsersPartialUpdateResponse = User;

export type AuthUsersDestroyData = {
  /**
   * A unique integer value identifying this user.
   */
  id: number;
};

export type AuthUsersDestroyResponse = void;

export type AuthUsersActivationCreateData = {
  requestBody: Activation;
};

export type AuthUsersActivationCreateResponse = Activation;

export type AuthUsersMeRetrieveResponse = User;

export type AuthUsersMeUpdateData = {
  requestBody: User;
};

export type AuthUsersMeUpdateResponse = User;

export type AuthUsersMePartialUpdateData = {
  requestBody?: PatchedUser;
};

export type AuthUsersMePartialUpdateResponse = User;

export type AuthUsersMeDestroyResponse = void;

export type AuthUsersResendActivationCreateData = {
  requestBody: SendEmailReset;
};

export type AuthUsersResendActivationCreateResponse = SendEmailReset;

export type AuthUsersResetEmailCreateData = {
  requestBody: SendEmailReset;
};

export type AuthUsersResetEmailCreateResponse = SendEmailReset;

export type AuthUsersResetEmailConfirmCreateData = {
  requestBody: UsernameResetConfirm;
};

export type AuthUsersResetEmailConfirmCreateResponse = UsernameResetConfirm;

export type AuthUsersResetPasswordCreateData = {
  requestBody: SendEmailReset;
};

export type AuthUsersResetPasswordCreateResponse = SendEmailReset;

export type AuthUsersResetPasswordConfirmCreateData = {
  requestBody: PasswordResetConfirm;
};

export type AuthUsersResetPasswordConfirmCreateResponse = PasswordResetConfirm;

export type AuthUsersSetEmailCreateData = {
  requestBody: SetUsername;
};

export type AuthUsersSetEmailCreateResponse = SetUsername;

export type AuthUsersSetPasswordCreateData = {
  requestBody: SetPassword;
};

export type AuthUsersSetPasswordCreateResponse = SetPassword;

export type DatabasesListResponse = Array<Database>;

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

export type ProjectsRetrieveData = {
  /**
   * A unique integer value identifying this project.
   */
  id: number;
};

export type ProjectsRetrieveResponse = Project;

export type ProjectsUpdateData = {
  /**
   * A unique integer value identifying this project.
   */
  id: number;
  requestBody: Project;
};

export type ProjectsUpdateResponse = Project;

export type ProjectsPartialUpdateData = {
  /**
   * A unique integer value identifying this project.
   */
  id: number;
  requestBody?: PatchedProject;
};

export type ProjectsPartialUpdateResponse = Project;

export type ProjectsDestroyData = {
  /**
   * A unique integer value identifying this project.
   */
  id: number;
};

export type ProjectsDestroyResponse = void;

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

export type $OpenApiTs = {
  "/api/auth/login/": {
    post: {
      req: AuthLoginCreateData;
      res: {
        200: Login;
      };
    };
  };
  "/api/auth/logout/": {
    post: {
      res: {
        /**
         * No response body
         */
        200: unknown;
      };
    };
  };
  "/api/auth/users/": {
    get: {
      req: AuthUsersListData;
      res: {
        200: PaginatedUserList;
      };
    };
    post: {
      req: AuthUsersCreateData;
      res: {
        201: UserCreate;
      };
    };
  };
  "/api/auth/users/{id}/": {
    get: {
      req: AuthUsersRetrieveData;
      res: {
        200: User;
      };
    };
    put: {
      req: AuthUsersUpdateData;
      res: {
        200: User;
      };
    };
    patch: {
      req: AuthUsersPartialUpdateData;
      res: {
        200: User;
      };
    };
    delete: {
      req: AuthUsersDestroyData;
      res: {
        /**
         * No response body
         */
        204: void;
      };
    };
  };
  "/api/auth/users/activation/": {
    post: {
      req: AuthUsersActivationCreateData;
      res: {
        200: Activation;
      };
    };
  };
  "/api/auth/users/me/": {
    get: {
      res: {
        200: User;
      };
    };
    put: {
      req: AuthUsersMeUpdateData;
      res: {
        200: User;
      };
    };
    patch: {
      req: AuthUsersMePartialUpdateData;
      res: {
        200: User;
      };
    };
    delete: {
      res: {
        /**
         * No response body
         */
        204: void;
      };
    };
  };
  "/api/auth/users/resend_activation/": {
    post: {
      req: AuthUsersResendActivationCreateData;
      res: {
        200: SendEmailReset;
      };
    };
  };
  "/api/auth/users/reset_email/": {
    post: {
      req: AuthUsersResetEmailCreateData;
      res: {
        200: SendEmailReset;
      };
    };
  };
  "/api/auth/users/reset_email_confirm/": {
    post: {
      req: AuthUsersResetEmailConfirmCreateData;
      res: {
        200: UsernameResetConfirm;
      };
    };
  };
  "/api/auth/users/reset_password/": {
    post: {
      req: AuthUsersResetPasswordCreateData;
      res: {
        200: SendEmailReset;
      };
    };
  };
  "/api/auth/users/reset_password_confirm/": {
    post: {
      req: AuthUsersResetPasswordConfirmCreateData;
      res: {
        200: PasswordResetConfirm;
      };
    };
  };
  "/api/auth/users/set_email/": {
    post: {
      req: AuthUsersSetEmailCreateData;
      res: {
        200: SetUsername;
      };
    };
  };
  "/api/auth/users/set_password/": {
    post: {
      req: AuthUsersSetPasswordCreateData;
      res: {
        200: SetPassword;
      };
    };
  };
  "/api/databases/": {
    get: {
      res: {
        200: Array<Database>;
      };
    };
  };
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
  "/api/projects/{id}/": {
    get: {
      req: ProjectsRetrieveData;
      res: {
        200: Project;
      };
    };
    put: {
      req: ProjectsUpdateData;
      res: {
        200: Project;
      };
    };
    patch: {
      req: ProjectsPartialUpdateData;
      res: {
        200: Project;
      };
    };
    delete: {
      req: ProjectsDestroyData;
      res: {
        /**
         * No response body
         */
        204: void;
      };
    };
  };
  "/api/projects/{project_pk}/queries/": {
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
};
