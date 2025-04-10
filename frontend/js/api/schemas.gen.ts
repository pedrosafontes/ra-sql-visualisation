// This file is auto-generated by @hey-api/openapi-ts

export const $Activation = {
  type: "object",
  properties: {
    uid: {
      type: "string",
    },
    token: {
      type: "string",
    },
  },
  required: ["token", "uid"],
} as const;

export const $Database = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    name: {
      type: "string",
      maxLength: 255,
    },
  },
  required: ["id", "name"],
} as const;

export const $Login = {
  type: "object",
  properties: {
    username: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["password", "username"],
} as const;

export const $PaginatedUserList = {
  type: "object",
  required: ["count", "results"],
  properties: {
    count: {
      type: "integer",
      example: 123,
    },
    next: {
      type: "string",
      nullable: true,
      format: "uri",
      example: "http://api.example.org/accounts/?offset=400&limit=100",
    },
    previous: {
      type: "string",
      nullable: true,
      format: "uri",
      example: "http://api.example.org/accounts/?offset=200&limit=100",
    },
    results: {
      type: "array",
      items: {
        $ref: "#/components/schemas/User",
      },
    },
  },
} as const;

export const $PasswordResetConfirm = {
  type: "object",
  properties: {
    uid: {
      type: "string",
    },
    token: {
      type: "string",
    },
    new_password: {
      type: "string",
    },
  },
  required: ["new_password", "token", "uid"],
} as const;

export const $PatchedProject = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    database_id: {
      type: "integer",
      writeOnly: true,
    },
    database: {
      allOf: [
        {
          $ref: "#/components/schemas/Database",
        },
      ],
      readOnly: true,
    },
    queries: {
      type: "array",
      items: {
        $ref: "#/components/schemas/QuerySummary",
      },
      readOnly: true,
    },
    last_modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    created: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    name: {
      type: "string",
      maxLength: 255,
    },
  },
} as const;

export const $PatchedQuery = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    name: {
      type: "string",
      maxLength: 255,
    },
    text: {
      type: "string",
    },
    created: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    errors: {
      type: "array",
      items: {
        $ref: "#/components/schemas/QueryError",
      },
      readOnly: true,
    },
  },
} as const;

export const $PatchedUser = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    email: {
      type: "string",
      format: "email",
      maxLength: 255,
    },
    created: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
  },
} as const;

export const $Project = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    database_id: {
      type: "integer",
      writeOnly: true,
    },
    database: {
      allOf: [
        {
          $ref: "#/components/schemas/Database",
        },
      ],
      readOnly: true,
    },
    queries: {
      type: "array",
      items: {
        $ref: "#/components/schemas/QuerySummary",
      },
      readOnly: true,
    },
    last_modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    created: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    name: {
      type: "string",
      maxLength: 255,
    },
  },
  required: [
    "created",
    "database",
    "database_id",
    "id",
    "last_modified",
    "modified",
    "name",
    "queries",
  ],
} as const;

export const $Query = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    name: {
      type: "string",
      maxLength: 255,
    },
    text: {
      type: "string",
    },
    created: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    errors: {
      type: "array",
      items: {
        $ref: "#/components/schemas/QueryError",
      },
      readOnly: true,
    },
  },
  required: ["created", "errors", "id", "modified", "name", "text"],
} as const;

export const $QueryError = {
  type: "object",
  properties: {
    message: {
      type: "string",
    },
    line: {
      type: "integer",
    },
    start_col: {
      type: "integer",
    },
    end_col: {
      type: "integer",
    },
  },
  required: ["end_col", "line", "message", "start_col"],
} as const;

export const $QueryExecution = {
  type: "object",
  properties: {
    results: {
      allOf: [
        {
          $ref: "#/components/schemas/QueryResultData",
        },
      ],
      description: "Query result data if the query execution was successful",
    },
    success: {
      type: "boolean",
      description: "Indicates if the query execution was successful",
    },
  },
  required: ["success"],
} as const;

export const $QueryResultData = {
  type: "object",
  properties: {
    columns: {
      type: "array",
      items: {
        type: "string",
      },
      description: "List of column names from the query",
    },
    rows: {
      type: "array",
      items: {
        type: "array",
        items: {
          type: "string",
          nullable: true,
        },
        description: "Values in a single row",
      },
      description: "List of query result rows",
    },
  },
  required: ["columns", "rows"],
} as const;

export const $QuerySummary = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    name: {
      type: "string",
      maxLength: 255,
    },
  },
  required: ["id", "name"],
} as const;

export const $SendEmailReset = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
    },
  },
  required: ["email"],
} as const;

export const $SetPassword = {
  type: "object",
  properties: {
    new_password: {
      type: "string",
    },
    current_password: {
      type: "string",
    },
  },
  required: ["current_password", "new_password"],
} as const;

export const $SetUsername = {
  type: "object",
  properties: {
    current_password: {
      type: "string",
    },
    new_email: {
      type: "string",
      format: "email",
      title: "Email",
      maxLength: 255,
    },
  },
  required: ["current_password", "new_email"],
} as const;

export const $User = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      readOnly: true,
    },
    email: {
      type: "string",
      format: "email",
      maxLength: 255,
    },
    created: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    modified: {
      type: "string",
      format: "date-time",
      readOnly: true,
    },
  },
  required: ["created", "email", "id", "modified"],
} as const;

export const $UserCreate = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      maxLength: 255,
    },
    id: {
      type: "integer",
      readOnly: true,
    },
    password: {
      type: "string",
      writeOnly: true,
    },
  },
  required: ["email", "id", "password"],
} as const;

export const $UsernameResetConfirm = {
  type: "object",
  properties: {
    new_email: {
      type: "string",
      format: "email",
      title: "Email",
      maxLength: 255,
    },
  },
  required: ["new_email"],
} as const;
