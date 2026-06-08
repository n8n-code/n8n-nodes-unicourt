import type { INodeProperties } from 'n8n-workflow';

export const caseDocketApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					]
				}
			},
			"options": [
				{
					"name": "Get Attorney By Id",
					"value": "Get Attorney By Id",
					"action": "Gets details for a requested Attorney ID.",
					"description": "Retrieve the attorney with the specified attorneyId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/attorney/{{$parameter[\"attorneyId\"]}}"
						}
					}
				},
				{
					"name": "Get Attorney Associated Parties",
					"value": "Get Attorney Associated Parties",
					"action": "Gets Associated Party details for a requested Attorney ID.",
					"description": "Retrieve the parties represented by the attorney with the specified attorneyId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/attorney/{{$parameter[\"attorneyId\"]}}/associatedParties"
						}
					}
				},
				{
					"name": "Get Case",
					"value": "Get Case",
					"action": "Gets case information for a requested Case ID.",
					"description": "Retrieve the case with the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Attorneys",
					"value": "Get Case Attorneys",
					"action": "Gets Attorneys for a requested Case ID.",
					"description": "Retrieve the attorneys in the case with the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/attorneys"
						}
					}
				},
				{
					"name": "Get Case Docket Entries",
					"value": "Get Case Docket Entries",
					"action": "Gets Docket Entries for a requested Case ID.",
					"description": "Retrieve the docket entries in the case with the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/docketEntries"
						}
					}
				},
				{
					"name": "Get Primary Documents For Docket Entries",
					"value": "Get Primary Documents For Docket Entries",
					"action": "Gets Primary Documents of Docket Entries.",
					"description": "Retrieve the primary documents in the case with the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/docketEntries/primaryDocuments"
						}
					}
				},
				{
					"name": "Get Secondary Documents For Docket Entries",
					"value": "Get Secondary Documents For Docket Entries",
					"action": "Gets Secondary Documents of Docket Entries.",
					"description": "Retrieve the secondary documents in the case with the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/docketEntries/secondaryDocuments"
						}
					}
				},
				{
					"name": "Get Case Hearings",
					"value": "Get Case Hearings",
					"action": "Gets Hearings for a requested Case ID.",
					"description": "Gets Hearings for a requested Case ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/hearings"
						}
					}
				},
				{
					"name": "Get Case Judges",
					"value": "Get Case Judges",
					"action": "Gets Judges for a requested Case ID.",
					"description": "Retrieve the judges involved in the specified case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/judges"
						}
					}
				},
				{
					"name": "Get Case Parties",
					"value": "Get Case Parties",
					"action": "Gets Parties for a requested Case ID.",
					"description": "Retrieve the parties involved in the case with the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/parties"
						}
					}
				},
				{
					"name": "Get Case Related Cases",
					"value": "Get Case Related Cases",
					"action": "Gets Related Cases for a requested Case ID.",
					"description": "Retrieve cases that UniCourt has identified as related to the case with the specified caseId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/relatedCases"
						}
					}
				},
				{
					"name": "Get Judge By Id",
					"value": "Get Judge By Id",
					"action": "Gets details for a requested Judge ID.",
					"description": "Retrieve the judge with the specified judgeId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/judge/{{$parameter[\"judgeId\"]}}"
						}
					}
				},
				{
					"name": "Get Party By Id",
					"value": "Get Party By Id",
					"action": "Gets details for a requested Party ID.",
					"description": "Retrieve the party with the specified partyId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/party/{{$parameter[\"partyId\"]}}"
						}
					}
				},
				{
					"name": "Get Party Associated Attorneys",
					"value": "Get Party Associated Attorneys",
					"action": "Gets Associated Attorney details for a requested Party ID.",
					"description": "Retrieve the attorneys in the case with the specified partyId value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/party/{{$parameter[\"partyId\"]}}/associatedAttorneys"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /attorney/{attorneyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Attorney By Id"
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
						"Case Docket API"
					],
					"operation": [
						"Get Attorney By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /attorney/{attorneyId}/associatedParties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Attorney Associated Parties"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Attorney Associated Parties"
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
						"Case Docket API"
					],
					"operation": [
						"Get Attorney Associated Parties"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case"
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
						"Case Docket API"
					],
					"operation": [
						"Get Case"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/attorneys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Attorneys"
					]
				}
			}
		},
		{
			"displayName": "Is Visible",
			"name": "isVisible",
			"description": "Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isVisible",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Attorneys"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Attorneys"
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Attorneys"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/docketEntries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Docket Number",
			"name": "docketNumber",
			"description": "Retrieve the docket entry witih the specified docket number in the case with the specified caseId value.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "docketNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"description": "Sort the retrieved docket entries in ascending order or descending order of date.",
			"default": "latest to oldest",
			"type": "options",
			"options": [
				{
					"name": "Latest To Oldest",
					"value": "latest to oldest"
				},
				{
					"name": "Oldest To Latest",
					"value": "oldest to latest"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sortBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Docket Entries"
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/docketEntries/primaryDocuments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Primary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Docket Number",
			"name": "docketNumber",
			"required": true,
			"description": "Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "docketNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Primary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "In Library",
			"name": "inLibrary",
			"description": "Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "inLibrary",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Primary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "After First Fetch Date",
			"name": "afterFirstFetchDate",
			"description": "Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "afterFirstFetchDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Primary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Library Date",
			"name": "libraryDate",
			"description": "Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "libraryDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Primary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Primary Documents For Docket Entries"
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
						"Case Docket API"
					],
					"operation": [
						"Get Primary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/docketEntries/secondaryDocuments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Secondary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Docket Number",
			"name": "docketNumber",
			"required": true,
			"description": "Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "docketNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Secondary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "In Library",
			"name": "inLibrary",
			"description": "Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "inLibrary",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Secondary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "After First Fetch Date",
			"name": "afterFirstFetchDate",
			"description": "Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "afterFirstFetchDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Secondary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Library Date",
			"name": "libraryDate",
			"description": "Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "libraryDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Secondary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Secondary Documents For Docket Entries"
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
						"Case Docket API"
					],
					"operation": [
						"Get Secondary Documents For Docket Entries"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/hearings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Hearings"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"description": "Specify the sort order of hearings in the case with the specified caseId.",
			"default": "latest to oldest",
			"type": "options",
			"options": [
				{
					"name": "Latest To Oldest",
					"value": "latest to oldest"
				},
				{
					"name": "Oldest To Latest",
					"value": "oldest to latest"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sortBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Hearings"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Hearings"
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Hearings"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/judges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Judges"
					]
				}
			}
		},
		{
			"displayName": "Is Visible",
			"name": "isVisible",
			"description": "Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isVisible",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Judges"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Judges"
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Judges"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/parties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
					]
				}
			}
		},
		{
			"displayName": "Is Visible",
			"name": "isVisible",
			"description": "Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isVisible",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
					]
				}
			}
		},
		{
			"displayName": "Party Role Id",
			"name": "partyRoleId",
			"description": "Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
					]
				}
			}
		},
		{
			"displayName": "Party Role Group Id",
			"name": "partyRoleGroupId",
			"description": "Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleGroupId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
					]
				}
			}
		},
		{
			"displayName": "Attorney Representation Type Id",
			"name": "attorneyRepresentationTypeId",
			"description": "Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "attorneyRepresentationTypeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
					]
				}
			}
		},
		{
			"displayName": "Party Classification Type",
			"name": "partyClassificationType",
			"description": "Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value.",
			"default": "INDIVIDUAL",
			"type": "options",
			"options": [
				{
					"name": "INDIVIDUAL",
					"value": "INDIVIDUAL"
				},
				{
					"name": "COMPANY",
					"value": "COMPANY"
				},
				{
					"name": "OTHER",
					"value": "OTHER"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "partyClassificationType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Parties"
					]
				}
			}
		},
		{
			"displayName": "GET /case/{caseId}/relatedCases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Case Related Cases"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Related Cases"
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
						"Case Docket API"
					],
					"operation": [
						"Get Case Related Cases"
					]
				}
			}
		},
		{
			"displayName": "GET /judge/{judgeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Judge By Id"
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
						"Case Docket API"
					],
					"operation": [
						"Get Judge By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /party/{partyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Party By Id"
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
						"Case Docket API"
					],
					"operation": [
						"Get Party By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /party/{partyId}/associatedAttorneys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Docket API"
					],
					"operation": [
						"Get Party Associated Attorneys"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.",
			"default": 0,
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
						"Case Docket API"
					],
					"operation": [
						"Get Party Associated Attorneys"
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
						"Case Docket API"
					],
					"operation": [
						"Get Party Associated Attorneys"
					]
				}
			}
		},
];
