import type { INodeProperties } from 'n8n-workflow';

export const caseDocumentsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					]
				}
			},
			"options": [
				{
					"name": "Get Case Documents",
					"value": "Get Case Documents",
					"action": "Gets Documents for a requested Case ID.",
					"description": "Gets Documents for a requested Case ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/case/{{$parameter[\"caseId\"]}}/documents"
						}
					}
				},
				{
					"name": "Get Document By Id",
					"value": "Get Document By Id",
					"action": "Gets details for a requested Document ID.",
					"description": "Gets details for a requested Document ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseDocument/{{$parameter[\"caseDocumentId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Document Download By Id",
					"value": "Get Case Document Download By Id",
					"action": "Gets downloadable URL for a requested Document ID.",
					"description": "Gets downloadable URL for a requested Document ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseDocumentDownload/{{$parameter[\"caseDocumentId\"]}}"
						}
					}
				},
				{
					"name": "Order Case Document",
					"value": "Order Case Document",
					"action": "Add Case Document Order for requested Document Ids.",
					"description": "Add Case Document Order for requested Document Ids.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/caseDocumentOrder"
						}
					}
				},
				{
					"name": "Get Case Document Order Callbacks",
					"value": "Get Case Document Order Callbacks",
					"action": "Get Case Document Order Callback list for a requested Date.",
					"description": "Get Case Document Order Callback list for a requested Date.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseDocumentOrder/callbacks"
						}
					}
				},
				{
					"name": "Get Case Document Order Callback By Id",
					"value": "Get Case Document Order Callback By Id",
					"action": "Get Case Document Order Callback for a requested Case Document Order Callback Id.",
					"description": "Get Case Document Order Callback for a requested Case Document Order Callback Id.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseDocumentOrder/callbacks/{{$parameter[\"caseDocumentOrderCallbackId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /case/{caseId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
					]
				}
			}
		},
		{
			"displayName": "In Library",
			"name": "inLibrary",
			"description": "Filter all the documents those are added to the UniCourt library.",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
					]
				}
			}
		},
		{
			"displayName": "After First Fetch Date",
			"name": "afterFirstFetchDate",
			"description": "Get all the documents which were added to the case on or after a specific date.",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
					]
				}
			}
		},
		{
			"displayName": "Library Date",
			"name": "libraryDate",
			"description": "Sort all the documents based on the date when the document was added to the UniCourt Library.",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
					]
				}
			}
		},
		{
			"displayName": "First Fetch Date",
			"name": "firstFetchDate",
			"description": "Sort all the documents based on the date it was fetched from the source site.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstFetchDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"description": "Sort documents with document order.",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "The page for which the result should be retrieved.",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /caseDocument/{caseDocumentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Get Document By Id"
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
						"Case Documents API"
					],
					"operation": [
						"Get Document By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /caseDocumentDownload/{caseDocumentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Download By Id"
					]
				}
			}
		},
		{
			"displayName": "Is Preview Document",
			"name": "isPreviewDocument",
			"description": "If the document you want to download is a preview of a document.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isPreviewDocument",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Download By Id"
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Download By Id"
					]
				}
			}
		},
		{
			"displayName": "PUT /caseDocumentOrder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Order Case Document"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Case Document Id",
			"name": "caseDocumentId",
			"type": "string",
			"default": "CDOCcre989d654fa05",
			"description": "Document ID which you want to order.",
			"routing": {
				"send": {
					"property": "caseDocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Order Case Document"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Preview Only",
			"name": "isPreviewOnly",
			"type": "boolean",
			"default": true,
			"description": "Flag value to determine if the document order is a preview order or no.",
			"routing": {
				"send": {
					"property": "isPreviewOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Order Case Document"
					]
				}
			}
		},
		{
			"displayName": "Pacer Options",
			"name": "pacerOptions",
			"type": "json",
			"default": "{\n  \"pacerClientCode\": \"Test UniCourt API\",\n  \"pacerUserId\": \"URKYwer3tyh5r56gq2\"\n}",
			"description": "**Applicable for PACER cases.**",
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
						"Case Documents API"
					],
					"operation": [
						"Order Case Document"
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
						"Case Documents API"
					],
					"operation": [
						"Order Case Document"
					]
				}
			}
		},
		{
			"displayName": "GET /caseDocumentOrder/callbacks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Order Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date.",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Order Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Status of Document Order callbacks. Default status will fetch all callbacks.",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Order Callbacks"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page to fetch the Case Document Order Callback list.<br>\n  - Minimum: 1\n",
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Order Callbacks"
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Order Callbacks"
					]
				}
			}
		},
		{
			"displayName": "GET /caseDocumentOrder/callbacks/{caseDocumentOrderCallbackId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Order Callback By Id"
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
						"Case Documents API"
					],
					"operation": [
						"Get Case Document Order Callback By Id"
					]
				}
			}
		},
];
