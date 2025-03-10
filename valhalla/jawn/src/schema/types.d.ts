/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/v1/fine-tune": {
    /**
     * Insert a new request and its response
     * @description Adds a new entry to the 'request' and 'response' tables.
     */
    post: {
      requestBody: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      responses: {
        /** @description Successfully inserted the new request and response. */
        201: {
          content: {
            "application/json": {
              /**
               * Format: uuid
               * @description The unique ID of the newly inserted request.
               */
              requestId?: string;
              /**
               * Format: uuid
               * @description The unique ID of the associated response.
               */
              responseId?: string;
              /** @example Request and Response successfully inserted. */
              message?: string;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/fine-tune/{jobId}/stats": {
    /**
     * Get fine-tune job statistics
     * @description Retrieves statistics for a specified fine-tuning job.
     */
    get: {
      parameters: {
        path: {
          /** @description The unique ID of the fine-tuning job */
          jobId: string;
        };
      };
      responses: {
        /** @description Successfully retrieved job statistics. */
        200: {
          content: {
            "application/json": Record<string, never>;
          };
        };
        /** @description Invalid job ID provided. */
        400: {
          content: never;
        };
        /** @description Job not found. */
        404: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/dataset/{datasetId}/fine-tune": {
    /**
     * Fine-tune a model with a specified dataset
     * @description This endpoint allows for the fine-tuning of a model using the specified dataset.
     */
    post: {
      parameters: {
        path: {
          /** @description The unique ID of the dataset to be used for fine-tuning. */
          datasetId: string;
        };
      };
      requestBody: {
        content: {
          "application/json": {
            /** @description Key ID for the provider used in this fine-tuning process. */
            providerKeyId?: string;
          };
        };
      };
      responses: {
        /** @description Fine-tuning process started successfully. */
        202: {
          content: {
            "application/json": {
              /**
               * Format: uuid
               * @description The unique ID of the fine-tuning job initiated.
               */
              jobId?: string;
              /** @example Fine-tuning job started successfully. */
              message?: string;
            };
          };
        };
        /** @description Invalid input or missing parameters. */
        400: {
          content: never;
        };
        /** @description Dataset not found. */
        404: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/tokens/anthropic": {
    /**
     * Get a token for the Anthropic API
     * @description Counts the number of tokens used for the given request.
     */
    post: {
      requestBody: {
        content: {
          "application/json": {
            content?: string;
          };
        };
      };
      responses: {
        /** @description The number of tokens used for the given request. */
        200: {
          content: {
            "application/json": {
              /**
               * Format: int64
               * @description The number of tokens used for the given request.
               */
              tokens?: number;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/tokens/gpt3": {
    /**
     * Get a token for the GPT-3 API
     * @description Counts the number of tokens used for the given request.
     */
    post: {
      requestBody: {
        content: {
          "application/json": {
            content?: string;
          };
        };
      };
      responses: {
        /** @description The number of tokens used for the given request. */
        200: {
          content: {
            "application/json": {
              /**
               * Format: int64
               * @description The number of tokens used for the given request.
               */
              tokens?: number;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/feedback": {
    /**
     * Insert a new feedback
     * @description Adds a new entry to the 'feedback' table.
     */
    put: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["FeedbackInsert"];
        };
      };
      responses: {
        /** @description Successfully inserted the new feedback. */
        201: {
          content: {
            "application/json": {
              /**
               * Format: uuid
               * @description The unique ID of the newly inserted feedback.
               */
              feedbackId?: string;
              /** @example Feedback successfully inserted. */
              message?: string;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/request/query": {
    /**
     * Insert a new request and its response
     * @description Adds a new entry to the 'request' and 'response' tables.
     */
    post: {
      requestBody: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      responses: {
        /** @description Successfully inserted the new request and response. */
        201: {
          content: {
            "application/json": {
              /**
               * Format: uuid
               * @description The unique ID of the newly inserted request.
               */
              requestId?: string;
              /**
               * Format: uuid
               * @description The unique ID of the associated response.
               */
              responseId?: string;
              /** @example Request and Response successfully inserted. */
              message?: string;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/request": {
    /**
     * Insert a new request and its response
     * @description Adds a new entry to the 'request' and 'response' tables.
     */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["RequestInsert"];
        };
      };
      responses: {
        /** @description Successfully inserted the new request and response. */
        201: {
          content: {
            "application/json": {
              /**
               * Format: uuid
               * @description The unique ID of the newly inserted request.
               */
              requestId?: string;
              /**
               * Format: uuid
               * @description The unique ID of the associated response.
               */
              responseId?: string;
              /** @example Request and Response successfully inserted. */
              message?: string;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/v1/response": {
    /**
     * Insert a new request and its response
     * @description Adds a new entry to the 'request' and 'response' tables.
     */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["ResponseInsert"];
        };
      };
      responses: {
        /** @description Successfully inserted the new request and response. */
        201: {
          content: {
            "application/json": {
              /**
               * Format: uuid
               * @description The unique ID of the newly inserted request.
               */
              requestId?: string;
              /**
               * Format: uuid
               * @description The unique ID of the associated response.
               */
              responseId?: string;
              /** @example Request and Response successfully inserted. */
              message?: string;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
    /**
     * Update a response
     * @description Updates the response associated with the given request ID.
     */
    patch: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["ResponseInsert"];
        };
      };
      responses: {
        /** @description Successfully updated the response. */
        200: {
          content: {
            "application/json": {
              /**
               * Format: uuid
               * @description The unique ID of the newly inserted request.
               */
              requestId?: string;
              /**
               * Format: uuid
               * @description The unique ID of the associated response.
               */
              responseId?: string;
              /** @example Response successfully updated. */
              message?: string;
            };
          };
        };
        /** @description Invalid input. */
        400: {
          content: never;
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/healthcheck-db": {
    /**
     * Check the status of the database
     * @description Checks the status of the database.
     */
    get: {
      responses: {
        /** @description Database is up and running. */
        200: {
          content: {
            "application/json": {
              /** @example Database is up and running. */
              message?: string;
            };
          };
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/healthcheck-auth": {
    /**
     * Check the status of the database
     * @description Checks the status of the database.
     */
    get: {
      responses: {
        /** @description Database is up and running. */
        200: {
          content: {
            "application/json": {
              /** @example Database is up and running. */
              message?: string;
            };
          };
        };
        /** @description Internal server error. */
        500: {
          content: never;
        };
      };
    };
  };
  "/healthcheck": {
    /**
     * Check the status of the service
     * @description Checks the status of the service.
     */
    get: {
      responses: {
        /** @description Service is up and running. */
        200: {
          content: {
            "application/json": {
              /** @example Service is up and running. */
              message?: string;
            };
          };
        };
        /** @description Internal server error */
        500: {
          content: never;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    FeedbackInsert: {
      /** @description The rating of the response. */
      rating: boolean;
      /**
       * Format: uuid
       * @description The unique ID of the response.
       */
      response_id: string;
    };
    RequestInsert: {
      /**
       * Format: date-time
       * @description The date and time when the request was received.
       */
      requestReceivedAt: string;
      /** @description The model used for generating the response. */
      model?: string | null;
      /** @description JSON object containing the request body. */
      body: Record<string, never>;
      /**
       * Format: uuid
       * @description The unique ID of the request.
       */
      request_id: string;
      /** @description The URL associated with the request. */
      url_href: string;
      /** @description The provider associated with the request. */
      provider: string;
      /** @description The user ID associated with the request. */
      user_id?: string | null;
      /** @description JSON object containing additional properties. */
      properties?: unknown;
      /**
       * Format: int64
       * @description The API key ID for Helicone.
       */
      helicone_api_key_id?: number | null;
      /**
       * Format: uuid
       * @description The organization ID for Helicone.
       */
      helicone_org_id?: string | null;
      /**
       * Format: uuid
       * @description The proxy key ID for Helicone.
       */
      helicone_proxy_key_id?: string | null;
    };
    ResponseInsert: {
      /**
       * Format: date-time
       * @description The date and time when the request was received.
       */
      responseReceivedAt: string;
      /**
       * Format: uuid
       * @description The unique ID of the response.
       */
      response_id?: string | null;
      /** @description The delay in milliseconds. */
      delay_ms?: number | null;
      /**
       * Format: int16
       * @description The status code.
       */
      http_status: number | null;
      /** @description Number of tokens used for completion. */
      completion_tokens?: number | null;
      /** @description The model used for generating the response. */
      model?: string | null;
      /** @description Number of tokens used in the prompt. */
      prompt_tokens?: number | null;
      /** @description JSON object containing the response body. */
      body: unknown;
      /**
       * Format: uuid
       * @description JSON object containing the response body.
       */
      heliconeRequestId: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
