// This file is auto-generated by @hey-api/openapi-ts

export const $PaginatedProjectList = {
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
        $ref: "#/components/schemas/Project",
      },
    },
  },
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
    is_active: {
      type: "boolean",
      description:
        "Designates whether this user should be treated as active. Unselect this instead of deleting accounts.",
    },
    is_staff: {
      type: "boolean",
      description: "Designates whether the user can log into this admin site.",
    },
    is_superuser: {
      type: "boolean",
      title: "Superuser status",
      description:
        "Designates that this user has all permissions without explicitly assigning them.",
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
    last_login: {
      type: "string",
      format: "date-time",
      nullable: true,
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
    name: {
      type: "string",
      maxLength: 255,
    },
    database: {
      type: "integer",
    },
  },
  required: ["database", "id", "name"],
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
  },
  required: ["created", "id", "modified", "name", "text"],
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

export const $QueryPartialUpdate = {
  type: "object",
  properties: {
    query: {
      allOf: [
        {
          $ref: "#/components/schemas/Query",
        },
      ],
      description: "The updated query object after partial update.",
    },
    errors: {
      type: "array",
      items: {
        $ref: "#/components/schemas/QueryError",
      },
      description: "Errors, if any, that occurred during update.",
    },
  },
  required: ["query"],
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
    is_active: {
      type: "boolean",
      description:
        "Designates whether this user should be treated as active. Unselect this instead of deleting accounts.",
    },
    is_staff: {
      type: "boolean",
      description: "Designates whether the user can log into this admin site.",
    },
    is_superuser: {
      type: "boolean",
      title: "Superuser status",
      description:
        "Designates that this user has all permissions without explicitly assigning them.",
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
    last_login: {
      type: "string",
      format: "date-time",
      nullable: true,
    },
  },
  required: ["created", "email", "id", "modified"],
} as const;
