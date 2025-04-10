// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from "./core/CancelablePromise";
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";
import type {
  AuthLoginCreateData,
  AuthLoginCreateResponse,
  AuthLogoutCreateResponse,
  AuthUsersListData,
  AuthUsersListResponse,
  AuthUsersCreateData,
  AuthUsersCreateResponse,
  AuthUsersRetrieveData,
  AuthUsersRetrieveResponse,
  AuthUsersUpdateData,
  AuthUsersUpdateResponse,
  AuthUsersPartialUpdateData,
  AuthUsersPartialUpdateResponse,
  AuthUsersDestroyData,
  AuthUsersDestroyResponse,
  AuthUsersActivationCreateData,
  AuthUsersActivationCreateResponse,
  AuthUsersMeRetrieveResponse,
  AuthUsersMeUpdateData,
  AuthUsersMeUpdateResponse,
  AuthUsersMePartialUpdateData,
  AuthUsersMePartialUpdateResponse,
  AuthUsersMeDestroyResponse,
  AuthUsersResendActivationCreateData,
  AuthUsersResendActivationCreateResponse,
  AuthUsersResetEmailCreateData,
  AuthUsersResetEmailCreateResponse,
  AuthUsersResetEmailConfirmCreateData,
  AuthUsersResetEmailConfirmCreateResponse,
  AuthUsersResetPasswordCreateData,
  AuthUsersResetPasswordCreateResponse,
  AuthUsersResetPasswordConfirmCreateData,
  AuthUsersResetPasswordConfirmCreateResponse,
  AuthUsersSetEmailCreateData,
  AuthUsersSetEmailCreateResponse,
  AuthUsersSetPasswordCreateData,
  AuthUsersSetPasswordCreateResponse,
  DatabasesListResponse,
  ProjectsListResponse,
  ProjectsCreateData,
  ProjectsCreateResponse,
  ProjectsRetrieveData,
  ProjectsRetrieveResponse,
  ProjectsUpdateData,
  ProjectsUpdateResponse,
  ProjectsPartialUpdateData,
  ProjectsPartialUpdateResponse,
  ProjectsDestroyData,
  ProjectsDestroyResponse,
  ProjectsQueriesCreateData,
  ProjectsQueriesCreateResponse,
  QueriesRetrieveData,
  QueriesRetrieveResponse,
  QueriesUpdateData,
  QueriesUpdateResponse,
  QueriesPartialUpdateData,
  QueriesPartialUpdateResponse,
  QueriesDestroyData,
  QueriesDestroyResponse,
  QueriesExecutionsCreateData,
  QueriesExecutionsCreateResponse,
} from "./types.gen";

export class AuthService {
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Login
   * @throws ApiError
   */
  public static authLoginCreate(
    data: AuthLoginCreateData,
  ): CancelablePromise<AuthLoginCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/login/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns unknown No response body
   * @throws ApiError
   */
  public static authLogoutCreate(): CancelablePromise<AuthLogoutCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/logout/",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.limit Number of results to return per page.
   * @param data.offset The initial index from which to return the results.
   * @returns PaginatedUserList
   * @throws ApiError
   */
  public static authUsersList(
    data: AuthUsersListData = {},
  ): CancelablePromise<AuthUsersListResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/auth/users/",
      query: {
        limit: data.limit,
        offset: data.offset,
      },
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserCreate
   * @throws ApiError
   */
  public static authUsersCreate(
    data: AuthUsersCreateData,
  ): CancelablePromise<AuthUsersCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this user.
   * @returns User
   * @throws ApiError
   */
  public static authUsersRetrieve(
    data: AuthUsersRetrieveData,
  ): CancelablePromise<AuthUsersRetrieveResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/auth/users/{id}/",
      path: {
        id: data.id,
      },
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this user.
   * @param data.requestBody
   * @returns User
   * @throws ApiError
   */
  public static authUsersUpdate(
    data: AuthUsersUpdateData,
  ): CancelablePromise<AuthUsersUpdateResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/auth/users/{id}/",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this user.
   * @param data.requestBody
   * @returns User
   * @throws ApiError
   */
  public static authUsersPartialUpdate(
    data: AuthUsersPartialUpdateData,
  ): CancelablePromise<AuthUsersPartialUpdateResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/auth/users/{id}/",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this user.
   * @returns void No response body
   * @throws ApiError
   */
  public static authUsersDestroy(
    data: AuthUsersDestroyData,
  ): CancelablePromise<AuthUsersDestroyResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/auth/users/{id}/",
      path: {
        id: data.id,
      },
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Activation
   * @throws ApiError
   */
  public static authUsersActivationCreate(
    data: AuthUsersActivationCreateData,
  ): CancelablePromise<AuthUsersActivationCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/activation/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns User
   * @throws ApiError
   */
  public static authUsersMeRetrieve(): CancelablePromise<AuthUsersMeRetrieveResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/auth/users/me/",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns User
   * @throws ApiError
   */
  public static authUsersMeUpdate(
    data: AuthUsersMeUpdateData,
  ): CancelablePromise<AuthUsersMeUpdateResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/auth/users/me/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns User
   * @throws ApiError
   */
  public static authUsersMePartialUpdate(
    data: AuthUsersMePartialUpdateData = {},
  ): CancelablePromise<AuthUsersMePartialUpdateResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/auth/users/me/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns void No response body
   * @throws ApiError
   */
  public static authUsersMeDestroy(): CancelablePromise<AuthUsersMeDestroyResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/auth/users/me/",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SendEmailReset
   * @throws ApiError
   */
  public static authUsersResendActivationCreate(
    data: AuthUsersResendActivationCreateData,
  ): CancelablePromise<AuthUsersResendActivationCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/resend_activation/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SendEmailReset
   * @throws ApiError
   */
  public static authUsersResetEmailCreate(
    data: AuthUsersResetEmailCreateData,
  ): CancelablePromise<AuthUsersResetEmailCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/reset_email/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UsernameResetConfirm
   * @throws ApiError
   */
  public static authUsersResetEmailConfirmCreate(
    data: AuthUsersResetEmailConfirmCreateData,
  ): CancelablePromise<AuthUsersResetEmailConfirmCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/reset_email_confirm/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SendEmailReset
   * @throws ApiError
   */
  public static authUsersResetPasswordCreate(
    data: AuthUsersResetPasswordCreateData,
  ): CancelablePromise<AuthUsersResetPasswordCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/reset_password/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns PasswordResetConfirm
   * @throws ApiError
   */
  public static authUsersResetPasswordConfirmCreate(
    data: AuthUsersResetPasswordConfirmCreateData,
  ): CancelablePromise<AuthUsersResetPasswordConfirmCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/reset_password_confirm/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SetUsername
   * @throws ApiError
   */
  public static authUsersSetEmailCreate(
    data: AuthUsersSetEmailCreateData,
  ): CancelablePromise<AuthUsersSetEmailCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/set_email/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SetPassword
   * @throws ApiError
   */
  public static authUsersSetPasswordCreate(
    data: AuthUsersSetPasswordCreateData,
  ): CancelablePromise<AuthUsersSetPasswordCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/auth/users/set_password/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }
}

export class DatabasesService {
  /**
   * @returns Database
   * @throws ApiError
   */
  public static databasesList(): CancelablePromise<DatabasesListResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/databases/",
    });
  }
}

export class ProjectsService {
  /**
   * @returns Project
   * @throws ApiError
   */
  public static projectsList(): CancelablePromise<ProjectsListResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/projects/",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Project
   * @throws ApiError
   */
  public static projectsCreate(
    data: ProjectsCreateData,
  ): CancelablePromise<ProjectsCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/projects/",
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this project.
   * @returns Project
   * @throws ApiError
   */
  public static projectsRetrieve(
    data: ProjectsRetrieveData,
  ): CancelablePromise<ProjectsRetrieveResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/projects/{id}/",
      path: {
        id: data.id,
      },
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this project.
   * @param data.requestBody
   * @returns Project
   * @throws ApiError
   */
  public static projectsUpdate(
    data: ProjectsUpdateData,
  ): CancelablePromise<ProjectsUpdateResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/projects/{id}/",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this project.
   * @param data.requestBody
   * @returns Project
   * @throws ApiError
   */
  public static projectsPartialUpdate(
    data: ProjectsPartialUpdateData,
  ): CancelablePromise<ProjectsPartialUpdateResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/projects/{id}/",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this project.
   * @returns void No response body
   * @throws ApiError
   */
  public static projectsDestroy(
    data: ProjectsDestroyData,
  ): CancelablePromise<ProjectsDestroyResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/projects/{id}/",
      path: {
        id: data.id,
      },
    });
  }

  /**
   * @param data The data for the request.
   * @param data.projectPk ID of the parent project
   * @param data.requestBody
   * @returns Query
   * @throws ApiError
   */
  public static projectsQueriesCreate(
    data: ProjectsQueriesCreateData,
  ): CancelablePromise<ProjectsQueriesCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/projects/{project_pk}/queries/",
      path: {
        project_pk: data.projectPk,
      },
      body: data.requestBody,
      mediaType: "application/json",
    });
  }
}

export class QueriesService {
  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this query.
   * @returns Query
   * @throws ApiError
   */
  public static queriesRetrieve(
    data: QueriesRetrieveData,
  ): CancelablePromise<QueriesRetrieveResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/queries/{id}/",
      path: {
        id: data.id,
      },
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this query.
   * @param data.requestBody
   * @returns Query
   * @throws ApiError
   */
  public static queriesUpdate(
    data: QueriesUpdateData,
  ): CancelablePromise<QueriesUpdateResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/queries/{id}/",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this query.
   * @param data.requestBody
   * @returns Query
   * @throws ApiError
   */
  public static queriesPartialUpdate(
    data: QueriesPartialUpdateData,
  ): CancelablePromise<QueriesPartialUpdateResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/queries/{id}/",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this query.
   * @returns void No response body
   * @throws ApiError
   */
  public static queriesDestroy(
    data: QueriesDestroyData,
  ): CancelablePromise<QueriesDestroyResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/queries/{id}/",
      path: {
        id: data.id,
      },
    });
  }

  /**
   * @param data The data for the request.
   * @param data.id A unique integer value identifying this query.
   * @returns QueryExecution
   * @throws ApiError
   */
  public static queriesExecutionsCreate(
    data: QueriesExecutionsCreateData,
  ): CancelablePromise<QueriesExecutionsCreateResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/queries/{id}/executions/",
      path: {
        id: data.id,
      },
    });
  }
}
