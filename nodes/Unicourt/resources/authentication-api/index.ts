import type { INodeProperties } from 'n8n-workflow';

export const authenticationApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					]
				}
			},
			"options": [
				{
					"name": "Generate New Token",
					"value": "Generate New Token",
					"action": "Generate new token to access API.",
					"description": "This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/generateNewToken"
						}
					}
				},
				{
					"name": "Invalidate All Tokens",
					"value": "Invalidate All Tokens",
					"action": "API to invalidate all access tokens.",
					"description": "An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/invalidateAllTokens"
						}
					}
				},
				{
					"name": "Invalidate Token",
					"value": "Invalidate Token",
					"action": "API to invalidate the access token.",
					"description": "An endpoint which allows you to invalidate a given access token.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/invalidateToken"
						}
					}
				},
				{
					"name": "List All Token Ids",
					"value": "List All Token Ids",
					"action": "API to list all the access tokens Id.",
					"description": "An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/listAllTokenIds"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /generateNewToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Generate New Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
			"description": "Your Client ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Generate New Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Secret",
			"name": "clientSecret",
			"type": "string",
			"default": "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
			"description": "Your Client Secret ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Generate New Token"
					]
				}
			}
		},
		{
			"displayName": "PUT /invalidateAllTokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Invalidate All Tokens"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
			"description": "Your Client ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Invalidate All Tokens"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Secret",
			"name": "clientSecret",
			"type": "string",
			"default": "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
			"description": "Your Client Secret ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Invalidate All Tokens"
					]
				}
			}
		},
		{
			"displayName": "PUT /invalidateToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Invalidate Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
			"description": "Your Client ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Invalidate Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Secret",
			"name": "clientSecret",
			"type": "string",
			"default": "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
			"description": "Your Client Secret ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Invalidate Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token Id",
			"name": "tokenId",
			"type": "string",
			"default": "TKID384a057WFC3Dp3",
			"description": "The Token ID of token being invalidated",
			"routing": {
				"send": {
					"property": "tokenId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"Invalidate Token"
					]
				}
			}
		},
		{
			"displayName": "PUT /listAllTokenIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"List All Token Ids"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
			"description": "Your Client ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"List All Token Ids"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Secret",
			"name": "clientSecret",
			"type": "string",
			"default": "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
			"description": "Your Client Secret ID obtainable by logging into your UniCourt account.",
			"routing": {
				"send": {
					"property": "clientSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication API"
					],
					"operation": [
						"List All Token Ids"
					]
				}
			}
		},
];
