import type { INodeProperties } from 'n8n-workflow';

export const callbackApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Callback API"
					]
				}
			},
			"options": [
				{
					"name": "Get Callbacks",
					"value": "Get Callbacks",
					"action": "Get list of callback types with count for a requested Date.",
					"description": "Get list of callback types with count for a requested Date.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/callbacks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /callbacks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Callback API"
					],
					"operation": [
						"Get Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "Date for which fetch the callback type list. By default, the date will be set to current date.",
			"default": "",
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
						"Callback API"
					],
					"operation": [
						"Get Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Status of the callbacks. Default status will fetch all callbacks.",
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
						"Callback API"
					],
					"operation": [
						"Get Callbacks"
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
						"Callback API"
					],
					"operation": [
						"Get Callbacks"
					]
				}
			}
		},
];
