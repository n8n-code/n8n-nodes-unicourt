import type { INodeProperties } from 'n8n-workflow';

export const usageApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Usage API"
					]
				}
			},
			"options": [
				{
					"name": "Get Billing Usage By Billing Cycle",
					"value": "Get Billing Usage By Billing Cycle",
					"action": "Specify the billing cycle to know the API usage.",
					"description": "An endpoint to obtain information on API usage for a specific billing cycle.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/billingCycleUsage/{{$parameter[\"billingCycle\"]}}"
						}
					}
				},
				{
					"name": "Get Billing Cycles",
					"value": "Get Billing Cycles",
					"action": "Get all the previous 12 billing cycles.",
					"description": "An endpoint to obtain information on the previous 12 billing cycles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/billingCycles"
						}
					}
				},
				{
					"name": "Get Daily Usage By Date",
					"value": "Get Daily Usage By Date",
					"action": "Get API usage for a requested Date.",
					"description": "An endpoint to obtain information on API usage for a specific day.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dailyUsage/{{$parameter[\"date\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /billingCycleUsage/{billingCycle}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Usage API"
					],
					"operation": [
						"Get Billing Usage By Billing Cycle"
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
						"Usage API"
					],
					"operation": [
						"Get Billing Usage By Billing Cycle"
					]
				}
			}
		},
		{
			"displayName": "GET /billingCycles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Usage API"
					],
					"operation": [
						"Get Billing Cycles"
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
						"Usage API"
					],
					"operation": [
						"Get Billing Cycles"
					]
				}
			}
		},
		{
			"displayName": "GET /dailyUsage/{date}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Usage API"
					],
					"operation": [
						"Get Daily Usage By Date"
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
						"Usage API"
					],
					"operation": [
						"Get Daily Usage By Date"
					]
				}
			}
		},
];
