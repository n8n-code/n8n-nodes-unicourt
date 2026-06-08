import type { INodeProperties } from 'n8n-workflow';

export const caseUpdateApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					]
				}
			},
			"options": [
				{
					"name": "Update Case",
					"value": "Update Case",
					"action": "Add Case Update for the requested Case Id.",
					"description": "Request case updates for the specified case.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/caseUpdate"
						}
					}
				},
				{
					"name": "Get Case Update By Case Id",
					"value": "Get Case Update By Case Id",
					"action": "Get Case Updates for a requested CaseId.",
					"description": "Retrieve case updates for the specified case object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseUpdate/{{$parameter[\"caseId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Updates",
					"value": "Get Case Updates",
					"action": "Get Case Update  list for a requested Date.",
					"description": "Retrieve case updates for the specified date.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseUpdates"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /caseUpdate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					],
					"operation": [
						"Update Case"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Case Id",
			"name": "caseId",
			"type": "string",
			"default": "CASEhq9d8b72d0800c",
			"description": "UniCourt's Case Id for update.",
			"routing": {
				"send": {
					"property": "caseId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					],
					"operation": [
						"Update Case"
					]
				}
			}
		},
		{
			"displayName": "Pacer Options",
			"name": "pacerOptions",
			"type": "json",
			"default": "{\n  \"additionalPageArray\": [\n    {\n      \"fetchIfOlderThanDays\": 30,\n      \"page\": \"associatedCases\"\n    },\n    {\n      \"fetchIfOlderThanDays\": 15,\n      \"page\": \"caseSummary\"\n    },\n    {\n      \"fetchIfOlderThanDays\": 15,\n      \"page\": \"listOfCreditors\"\n    }\n  ],\n  \"fetchParticipantsIfOlderThanDays\": 30,\n  \"pacerClientCode\": \"Test UniCourt API\",\n  \"pacerUserId\": \"URKYwer3tyh5r56gq2\",\n  \"refreshType\": \"fetchNewDocketEntries\"\n}",
			"description": "Applicable for PACER cases.",
			"routing": {
				"send": {
					"property": "pacerOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					],
					"operation": [
						"Update Case"
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
						"Case Update API"
					],
					"operation": [
						"Update Case"
					]
				}
			}
		},
		{
			"displayName": "GET /caseUpdate/{caseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					],
					"operation": [
						"Get Case Update By Case Id"
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
						"Case Update API"
					],
					"operation": [
						"Get Case Update By Case Id"
					]
				}
			}
		},
		{
			"displayName": "GET /caseUpdates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					],
					"operation": [
						"Get Case Updates"
					]
				}
			}
		},
		{
			"displayName": "Case Id",
			"name": "caseId",
			"description": "The caseId value of the case for which updates should be retrieved.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					],
					"operation": [
						"Get Case Updates"
					]
				}
			}
		},
		{
			"displayName": "Requested Date",
			"name": "requestedDate",
			"description": "The date for which case updates are to be retrieved.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Update API"
					],
					"operation": [
						"Get Case Updates"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Status of the case updates to be retrieved.",
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
						"Case Update API"
					],
					"operation": [
						"Get Case Updates"
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
						"Case Update API"
					],
					"operation": [
						"Get Case Updates"
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
						"Case Update API"
					],
					"operation": [
						"Get Case Updates"
					]
				}
			}
		},
];
