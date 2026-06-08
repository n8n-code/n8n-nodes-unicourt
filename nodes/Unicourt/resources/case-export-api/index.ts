import type { INodeProperties } from 'n8n-workflow';

export const caseExportApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					]
				}
			},
			"options": [
				{
					"name": "Get Case Export Callbacks",
					"value": "Get Case Export Callbacks",
					"action": "Get Case Export Callback list for a requested Date.",
					"description": "Retrieve callbacks according to the specified criteria.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseExport/callbacks"
						}
					}
				},
				{
					"name": "Get Case Export Callback By Id",
					"value": "Get Case Export Callback By Id",
					"action": "Get Case Export Callback for a requested Case Export Callback Id.",
					"description": "Retrieve the specified case export callback object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseExport/callbacks/{{$parameter[\"caseExportCallbackId\"]}}"
						}
					}
				},
				{
					"name": "Export Case",
					"value": "Export Case",
					"action": "Gets case exported for a requested Case ID.",
					"description": "Retrieve information about the specified case export.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseExport/{{$parameter[\"caseId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /caseExport/callbacks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Get Case Export Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "The date for which callbacks are to be retrieved.",
			"default": "2022-03-08T10:17:56+00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Get Case Export Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "The status code of the callbacks to be retrieved.",
			"default": "IN_PROGRESS",
			"type": "options",
			"options": [
				{
					"name": "IN PROGRESS",
					"value": "IN_PROGRESS"
				},
				{
					"name": "COMPLETE",
					"value": "COMPLETE"
				},
				{
					"name": "FAILURE",
					"value": "FAILURE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Get Case Export Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "The page number of the callbacks to be retrieved.<br>\n  - Minimum: 1\n",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Get Case Export Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Get Case Export Callbacks"
					]
				}
			}
		},
		{
			"displayName": "GET /caseExport/callbacks/{caseExportCallbackId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Get Case Export Callback By Id"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Get Case Export Callback By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /caseExport/{caseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Export Case"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Export API"
					],
					"operation": [
						"Export Case"
					]
				}
			}
		},
];
