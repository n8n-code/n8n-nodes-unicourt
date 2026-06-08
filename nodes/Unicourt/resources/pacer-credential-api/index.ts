import type { INodeProperties } from 'n8n-workflow';

export const pacerCredentialApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					]
				}
			},
			"options": [
				{
					"name": "Get Pacer Credential",
					"value": "Get Pacer Credential",
					"action": "Get Pacer Credential List.",
					"description": "List registered PACER credentials.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCredential"
						}
					}
				},
				{
					"name": "Add Pacer Credential",
					"value": "Add Pacer Credential",
					"action": "Add Pacer Credential.",
					"description": "Register PACER credentials with UniCourt.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/pacerCredential"
						}
					}
				},
				{
					"name": "Remove Pacer Credential By Id",
					"value": "Remove Pacer Credential By Id",
					"action": "Remove Pacer credential for a specific Pacer User Id.",
					"description": "De-register the PACER credentials for the specified PACER username.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/pacerCredential/{{$parameter[\"pacerUserId\"]}}"
						}
					}
				},
				{
					"name": "Get Pacer Credential By Id",
					"value": "Get Pacer Credential By Id",
					"action": "Get Pacer Credential for a requested pacer User Id.",
					"description": "Retrieve the PACER credentials for the specified PACER username.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCredential/{{$parameter[\"pacerUserId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pacerCredential",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					],
					"operation": [
						"Get Pacer Credential"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "The page number of the PACER credentials to be retrieved.<br>\n  - Minimum: 1\n",
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
						"PACER Credential API"
					],
					"operation": [
						"Get Pacer Credential"
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
						"PACER Credential API"
					],
					"operation": [
						"Get Pacer Credential"
					]
				}
			}
		},
		{
			"displayName": "PUT /pacerCredential",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					],
					"operation": [
						"Add Pacer Credential"
					]
				}
			}
		},
		{
			"displayName": "Default Pacer Client Code",
			"name": "defaultPacerClientCode",
			"type": "string",
			"default": "Test UniCourt API",
			"description": "Pacer Client Code.",
			"routing": {
				"send": {
					"property": "defaultPacerClientCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					],
					"operation": [
						"Add Pacer Credential"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"type": "string",
			"default": "URKYwer3tyh5r56gq2",
			"description": "Pacer User Id.",
			"routing": {
				"send": {
					"property": "pacerUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					],
					"operation": [
						"Add Pacer Credential"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "your password",
			"description": "Password.",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					],
					"operation": [
						"Add Pacer Credential"
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
						"PACER Credential API"
					],
					"operation": [
						"Add Pacer Credential"
					]
				}
			}
		},
		{
			"displayName": "DELETE /pacerCredential/{pacerUserId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					],
					"operation": [
						"Remove Pacer Credential By Id"
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
						"PACER Credential API"
					],
					"operation": [
						"Remove Pacer Credential By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCredential/{pacerUserId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER Credential API"
					],
					"operation": [
						"Get Pacer Credential By Id"
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
						"PACER Credential API"
					],
					"operation": [
						"Get Pacer Credential By Id"
					]
				}
			}
		},
];
