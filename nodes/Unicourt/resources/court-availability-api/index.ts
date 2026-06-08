import type { INodeProperties } from 'n8n-workflow';

export const courtAvailabilityApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Court Availability API"
					]
				}
			},
			"options": [
				{
					"name": "Get Court Coverage",
					"value": "Get Court Coverage",
					"action": "Gets Court Coverage of all courts of specific type.",
					"description": "Gets Court Coverage of all courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/courtCoverage/{{$parameter[\"courtId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /courtCoverage/{courtId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Availability API"
					],
					"operation": [
						"Get Court Coverage"
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
						"Court Availability API"
					],
					"operation": [
						"Get Court Coverage"
					]
				}
			}
		},
];
