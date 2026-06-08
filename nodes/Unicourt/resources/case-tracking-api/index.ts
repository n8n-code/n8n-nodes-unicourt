import type { INodeProperties } from 'n8n-workflow';

export const caseTrackingApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					]
				}
			},
			"options": [
				{
					"name": "Track Case",
					"value": "Track Case",
					"action": "Add Case Track for the requested Case Id.",
					"description": "Track the specified case.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/caseTrack"
						}
					}
				},
				{
					"name": "Remove Case Track By Id",
					"value": "Remove Case Track By Id",
					"action": "Remove Case Track for a specific Case Id.",
					"description": "Remove Case Track for a specific Case Id.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/caseTrack/{{$parameter[\"caseId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Track By Id",
					"value": "Get Case Track By Id",
					"action": "Get Case Track for a requested Case Id.",
					"description": "Retrieve case tracking information for the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseTrack/{{$parameter[\"caseId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Tracks",
					"value": "Get Case Tracks",
					"action": "Get Case Track list.",
					"description": "Retrieve a list of all tracked cases.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseTracks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /caseTrack",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Track Case"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Case Track Params",
			"name": "caseTrackParams",
			"type": "json",
			"default": "{\n  \"caseId\": \"CASEhq9d8b72d0800c\",\n  \"pacerOptions\": {\n    \"additionalPageArray\": [\n      {\n        \"fetchIfOlderThanDays\": 30,\n        \"page\": \"associatedCases\"\n      },\n      {\n        \"fetchIfOlderThanDays\": 15,\n        \"page\": \"caseSummary\"\n      },\n      {\n        \"fetchIfOlderThanDays\": 15,\n        \"page\": \"listOfCreditors\"\n      }\n    ],\n    \"fetchParticipantsIfOlderThanDays\": 30,\n    \"pacerClientCode\": \"Test UniCourt API\",\n    \"pacerUserId\": \"URKYwer3tyh5r56gq2\",\n    \"refreshType\": \"fetchNewDocketEntries\"\n  }\n}",
			"routing": {
				"send": {
					"property": "caseTrackParams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Track Case"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{\n  \"days\": [\n    1,\n    3,\n    5\n  ],\n  \"type\": \"weekly\"\n}",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Track Case"
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
						"Case Tracking API"
					],
					"operation": [
						"Track Case"
					]
				}
			}
		},
		{
			"displayName": "DELETE /caseTrack/{caseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Remove Case Track By Id"
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
						"Case Tracking API"
					],
					"operation": [
						"Remove Case Track By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /caseTrack/{caseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Get Case Track By Id"
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
						"Case Tracking API"
					],
					"operation": [
						"Get Case Track By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /caseTracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Get Case Tracks"
					]
				}
			}
		},
		{
			"displayName": "Last Fetch Date",
			"name": "lastFetchDate",
			"description": "The lastFetchDate value of the tracked case. The date value should be entered in the format YYYY-MM-DDTHH:MM:SS+ZZ:zz.\n",
			"default": "2022-03-08T10:17:56+00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastFetchDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Get Case Tracks"
					]
				}
			}
		},
		{
			"displayName": "Last Fetch Date With Updates",
			"name": "lastFetchDateWithUpdates",
			"description": "The date on which changes were last found in the case information.\n",
			"default": "2022-03-08T10:17:56+00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastFetchDateWithUpdates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Tracking API"
					],
					"operation": [
						"Get Case Tracks"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "The page number of the results to be retrieved.<br>\n  - Minimum: 1\n",
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
						"Case Tracking API"
					],
					"operation": [
						"Get Case Tracks"
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
						"Case Tracking API"
					],
					"operation": [
						"Get Case Tracks"
					]
				}
			}
		},
];
