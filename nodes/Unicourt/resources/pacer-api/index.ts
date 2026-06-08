import type { INodeProperties } from 'n8n-workflow';

export const pacerApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					]
				}
			},
			"options": [
				{
					"name": "Import Pacer Case By Court Using Case Number",
					"value": "Import Pacer Case By Court Using Case Number",
					"action": "Find PACER Case for a requested Case Number and Court.",
					"description": "Importing a Case in PACER using the court id and case number. \n\n\tWorkflow: \n\n\t\t1.This API will return the Find Case results from the court site in a form of array of UniCourt Case Objects. These case objects will consists only Meta information of the case if not already present in the UniCourt Database. \n\n\t\t2.To get the full updated case information one will have to request the caseUpdate API by passing the caseId. \n\n\tNote: \n\n\t\t1.Charges for Find Case in District, Bankruptcy and National Courts is free. Find case for Appeal Courts will be charged at minimum rate of $0.1. The fee charged by the court for find case can be found in the response of this API in the field courtFee. \n\n\t\t2.The results of the search has less Meta information in case objects compared to the Meta information of cases found using the PCL search APIs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacer/importCaseByCourtUsingCaseNumber"
						}
					}
				},
				{
					"name": "All Courts Pacer Case Locator Case Search",
					"value": "All Courts Pacer Case Locator Case Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Case Search API for All Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/caseSearch/allCourts"
						}
					}
				},
				{
					"name": "Appeal Courts Pacer Case Locator Case Search",
					"value": "Appeal Courts Pacer Case Locator Case Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Case Search API for Appeal Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/caseSearch/appealCourts"
						}
					}
				},
				{
					"name": "Bankruptcy Courts Pacer Case Locator Case Search",
					"value": "Bankruptcy Courts Pacer Case Locator Case Search",
					"action": "PACER Case Locator Search API for Bankruptcy Courts.",
					"description": "PACER Case Locator Case Search API for Bankruptcy Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/caseSearch/bankruptcyCourts"
						}
					}
				},
				{
					"name": "Civil Courts Pacer Case Locator Case Search",
					"value": "Civil Courts Pacer Case Locator Case Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Case Search API for Civil Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/caseSearch/civilCourts"
						}
					}
				},
				{
					"name": "Criminal Courts Pacer Case Locator Case Search",
					"value": "Criminal Courts Pacer Case Locator Case Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Case Search API for Criminal Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/caseSearch/criminalCourts"
						}
					}
				},
				{
					"name": "Multi District Courts Pacer Case Locator Case Search",
					"value": "Multi District Courts Pacer Case Locator Case Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Case Search API for MultiDistrict Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/caseSearch/multiDistrictCourts"
						}
					}
				},
				{
					"name": "All Courts Pacer Case Locator Party Search",
					"value": "All Courts Pacer Case Locator Party Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Search API for All Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/partySearch/allCourts"
						}
					}
				},
				{
					"name": "Appeal Courts Pacer Case Locator Party Search",
					"value": "Appeal Courts Pacer Case Locator Party Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Party Search API for Appeal Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/partySearch/appealCourts"
						}
					}
				},
				{
					"name": "Bankruptcy Courts Pacer Case Locator Party Search",
					"value": "Bankruptcy Courts Pacer Case Locator Party Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Party Search API for Bankruptcy Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/partySearch/bankruptcyCourts"
						}
					}
				},
				{
					"name": "Civil Courts Pacer Case Locator Party Search",
					"value": "Civil Courts Pacer Case Locator Party Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Party Search API for Civil Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/partySearch/civilCourts"
						}
					}
				},
				{
					"name": "Criminal Courts Pacer Case Locator Party Search",
					"value": "Criminal Courts Pacer Case Locator Party Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Party Search API for Criminal Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/partySearch/criminalCourts"
						}
					}
				},
				{
					"name": "Multi District Courts Pacer Case Locator Party Search",
					"value": "Multi District Courts Pacer Case Locator Party Search",
					"action": "PACER Case Locator Search API for All Courts.",
					"description": "PACER Case Locator Party Search API for MultiDistrict Courts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pacerCaseLocator/partySearch/multiDistrictCourts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pacer/importCaseByCourtUsingCaseNumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Import Pacer Case By Court Using Case Number"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Import Pacer Case By Court Using Case Number"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Import Pacer Case By Court Using Case Number"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"required": true,
			"description": "Case Number which you would like to Find in PACER site and import it to UniCourt.",
			"default": "2:15-mc-12345",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Import Pacer Case By Court Using Case Number"
					]
				}
			}
		},
		{
			"displayName": "Court Id",
			"name": "courtId",
			"required": true,
			"description": "Court Id of the Case number being provided.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Import Pacer Case By Court Using Case Number"
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
						"PACER API"
					],
					"operation": [
						"Import Pacer Case By Court Using Case Number"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/caseSearch/allCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Case Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
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
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/caseSearch/appealCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn  \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Nature Of Suits Array",
			"name": "natureOfSuitsArray",
			"description": "Search can be narrowed down by passing Nature Of Suits. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-e-nature-of-suits'>APPENDIX E - Appellate Nature Of Suits</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple nature of suits needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments & Enforc. of Judgments), My query in the request will look like the example mentioned below. \n\n\tExample: natureOfSuitsArray=1110&natureOfSuitsArray=1150",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "natureOfSuitsArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Case Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
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
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/caseSearch/bankruptcyCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Federal Bankruptcy Chapter Array",
			"name": "federalBankruptcyChapterArray",
			"description": "Search can be narrowed down by passing Federal Bankruptcy Chapters. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-d-bankruptcy-chapters'>APPENDIX D: Bankruptcy Chapters</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple Federal Bankruptcy Chapters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below. \n\n\tExample: federalBankruptcyChapterArray=7&federalBankruptcyChapterArray=11",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "federalBankruptcyChapterArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Discharged Start Date",
			"name": "caseDischargedStartDate",
			"description": "Narrowing the search for bankruptcy cases by limiting the cases which matches the criteria for case discharged start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00 \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDischargedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Discharged End Date",
			"name": "caseDischargedEndDate",
			"description": "Narrowing the search for bankruptcy cases by limiting the cases which matches the criteria for case discharged end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00 \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDischargedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Dismissed Start Date",
			"name": "caseDismissedStartDate",
			"description": "Narrowing the search for bankruptcy cases by limiting the cases which matches the criteria for case dismissed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00 \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDismissedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Dismissed End Date",
			"name": "caseDismissedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDismissedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Case Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
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
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/caseSearch/civilCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Nature Of Suits Array",
			"name": "natureOfSuitsArray",
			"description": "Search can be narrowed down by passing Nature Of Suits. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-e-nature-of-suits'>APPENDIX E - Civil Nature Of Suits</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple nature of suits needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below. \n\n\tExample: natureOfSuitsArray=110&natureOfSuitsArray=140",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "natureOfSuitsArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Case Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
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
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/caseSearch/criminalCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Case Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
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
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/caseSearch/multiDistrictCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Jpml Number",
			"name": "jpmlNumber",
			"description": "Master JPML Case Number.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "jpmlNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Case Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
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
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Case Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/partySearch/allCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"description": "The last name of a party to search. This can be person or non person entity.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"description": "The first name of a party to search.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middleName",
			"description": "The middle name of a party to search.",
			"default": "Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "middleName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Generation",
			"name": "generation",
			"description": "The name suffix (e.g., III, MD).",
			"default": "III",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "generation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Type",
			"name": "partyType",
			"description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "ptf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Exact Name Match",
			"name": "partyExactNameMatch",
			"description": "When set to true this field will search the party with an exact match of the name provided.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyExactNameMatch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Role Array",
			"name": "partyRoleArray",
			"description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "[\n  \"plantiff\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year From",
			"name": "caseYearFrom",
			"description": "Limit the results of the search to those cases from the year specified or later",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year To",
			"name": "caseYearTo",
			"description": "Limit the results of the search to those cases from the year specified or earlier",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Party Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
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
						"PACER API"
					],
					"operation": [
						"All Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/partySearch/appealCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"description": "The last name of a party to search. This can be person or non person entity.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"description": "The first name of a party to search.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middleName",
			"description": "The middle name of a party to search.",
			"default": "Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "middleName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Generation",
			"name": "generation",
			"description": "The name suffix (e.g., III, MD).",
			"default": "III",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "generation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Type",
			"name": "partyType",
			"description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "ptf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Exact Name Match",
			"name": "partyExactNameMatch",
			"description": "When set to true this field will search the party with an exact match of the name provided.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyExactNameMatch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Role Array",
			"name": "partyRoleArray",
			"description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "[\n  \"plantiff\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year From",
			"name": "caseYearFrom",
			"description": "Limit the results of the search to those cases from the year specified or later",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year To",
			"name": "caseYearTo",
			"description": "Limit the results of the search to those cases from the year specified or earlier",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Party Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
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
						"PACER API"
					],
					"operation": [
						"Appeal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/partySearch/bankruptcyCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"description": "The last name of a party to search. This can be person or non person entity.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"description": "The first name of a party to search.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middleName",
			"description": "The middle name of a party to search.",
			"default": "Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "middleName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Generation",
			"name": "generation",
			"description": "The name suffix (e.g., III, MD).",
			"default": "III",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "generation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Type",
			"name": "partyType",
			"description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "ptf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Exact Name Match",
			"name": "partyExactNameMatch",
			"description": "When set to true this field will search the party with an exact match of the name provided.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyExactNameMatch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Role Array",
			"name": "partyRoleArray",
			"description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "[\n  \"plantiff\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year From",
			"name": "caseYearFrom",
			"description": "Limit the results of the search to those cases from the year specified or later",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year To",
			"name": "caseYearTo",
			"description": "Limit the results of the search to those cases from the year specified or earlier",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Ssn Or Ein",
			"name": "ssnOrEin",
			"description": "The 9 digit Social Security number or Federal Tax ID can be used in this search. The delimiter dash (-) can be used as the input to this API but wont be used during the search. A search for SSN 123-45-6789 or 12-3456789 will yield the same results as a search for 123456789.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssnOrEin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Four Digit Ssn",
			"name": "fourDigitSsn",
			"description": "Search for parties whose SSN ends with a specified four digits.\n\n\tNote: When specified, a last name/entity name must also be specified.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fourDigitSsn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Discharged Start Date",
			"name": "caseDischargedStartDate",
			"description": "Narrowing the search for bankruptcy cases by limiting the cases which matches the criteria for case discharged start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00 \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDischargedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Discharged End Date",
			"name": "caseDischargedEndDate",
			"description": "Narrowing the search for bankruptcy cases by limiting the cases which matches the criteria for case discharged end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00 \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDischargedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Dismissed Start Date",
			"name": "caseDismissedStartDate",
			"description": "Narrowing the search for bankruptcy cases by limiting the cases which matches the criteria for case dismissed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00 \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDismissedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Dismissed End Date",
			"name": "caseDismissedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseDismissedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Party Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
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
						"PACER API"
					],
					"operation": [
						"Bankruptcy Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/partySearch/civilCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"description": "The last name of a party to search. This can be person or non person entity.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"description": "The first name of a party to search.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middleName",
			"description": "The middle name of a party to search.",
			"default": "Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "middleName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Generation",
			"name": "generation",
			"description": "The name suffix (e.g., III, MD).",
			"default": "III",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "generation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Type",
			"name": "partyType",
			"description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "ptf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Exact Name Match",
			"name": "partyExactNameMatch",
			"description": "When set to true this field will search the party with an exact match of the name provided.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyExactNameMatch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Role Array",
			"name": "partyRoleArray",
			"description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "[\n  \"plantiff\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year From",
			"name": "caseYearFrom",
			"description": "Limit the results of the search to those cases from the year specified or later",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year To",
			"name": "caseYearTo",
			"description": "Limit the results of the search to those cases from the year specified or earlier",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Party Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
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
						"PACER API"
					],
					"operation": [
						"Civil Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/partySearch/criminalCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"description": "The last name of a party to search. This can be person or non person entity.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"description": "The first name of a party to search.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middleName",
			"description": "The middle name of a party to search.",
			"default": "Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "middleName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Generation",
			"name": "generation",
			"description": "The name suffix (e.g., III, MD).",
			"default": "III",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "generation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Type",
			"name": "partyType",
			"description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "ptf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Exact Name Match",
			"name": "partyExactNameMatch",
			"description": "When set to true this field will search the party with an exact match of the name provided.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyExactNameMatch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Role Array",
			"name": "partyRoleArray",
			"description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "[\n  \"plantiff\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year From",
			"name": "caseYearFrom",
			"description": "Limit the results of the search to those cases from the year specified or later",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year To",
			"name": "caseYearTo",
			"description": "Limit the results of the search to those cases from the year specified or earlier",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Party Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
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
						"PACER API"
					],
					"operation": [
						"Criminal Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "GET /pacerCaseLocator/partySearch/multiDistrictCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer User Id",
			"name": "pacerUserId",
			"required": true,
			"description": "User ID or User Name of the PACER Account used while signing in to PACER.",
			"default": "johndoe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Client Code",
			"name": "pacerClientCode",
			"required": true,
			"description": "Client Code used while signing in to PACER account.",
			"default": "john",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerClientCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Number",
			"name": "caseNumber",
			"description": "If the court type is selected as All or if you need data for a specific case number format, then you need to use this option. Case numbers may be entered in each of the following formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit).",
			"default": "12-1234",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Jpml Number",
			"name": "jpmlNumber",
			"description": "Master JPML Case Number.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "jpmlNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Pacer Case Id",
			"name": "pacerCaseId",
			"description": "Sequentially generated number that identifies the case in PACER system.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pacerCaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"description": "The last name of a party to search. This can be person or non person entity.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"description": "The first name of a party to search.",
			"default": "John",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middleName",
			"description": "The middle name of a party to search.",
			"default": "Doe",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "middleName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Generation",
			"name": "generation",
			"description": "The name suffix (e.g., III, MD).",
			"default": "III",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "generation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Type",
			"name": "partyType",
			"description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "ptf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Exact Name Match",
			"name": "partyExactNameMatch",
			"description": "When set to true this field will search the party with an exact match of the name provided.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyExactNameMatch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Party Role Array",
			"name": "partyRoleArray",
			"description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court.",
			"default": "[\n  \"plantiff\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyRoleArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Title",
			"name": "caseTitle",
			"description": "You can search using the case name even if you know one party. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Office",
			"name": "caseOffice",
			"description": "The divisional office in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseOffice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Sequence Number",
			"name": "caseSequenceNumber",
			"description": "The sequence number of a given case. Ex 12345",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseSequenceNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year",
			"name": "caseYear",
			"description": "The two digits or four digits of the year in which the case was filed.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Type Array",
			"name": "caseTypeArray",
			"description": "Search can be narrowed down by passing caseTypes. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-a-case-types'>APPENDIX A: Case Types</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTypeArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Court Region Id Array",
			"name": "courtRegionIdArray",
			"description": "Search can be narrowed down by passing courtRegionId. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-b-court-regions'>APPENDIX B: Court Regions</a> mentioned in the API Documentation. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "courtRegionIdArray",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year From",
			"name": "caseYearFrom",
			"description": "Limit the results of the search to those cases from the year specified or later",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Year To",
			"name": "caseYearTo",
			"description": "Limit the results of the search to those cases from the year specified or earlier",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseYearTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed Start Date",
			"name": "caseFiledStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Filed End Date",
			"name": "caseFiledEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case filed end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseFiledEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated Start Date",
			"name": "caseTerminatedStartDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated start date on or after the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Terminated End Date",
			"name": "caseTerminatedEndDate",
			"description": "Narrowing the search by limiting the cases which matches the criteria for case terminated end date on or before the given date. Format: YYYY-MM-DDTHH:MM:SS+ZZ:zz, Ex: 2017-12-20T12:54:24+00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "caseTerminatedEndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Sort Parameter Query",
			"name": "sortParameterQuery",
			"description": "The criteria based on which the search results are to be sorted. Please use the <a href='https://docs.unicourt.com/pacer-glossary/appendix-c-sort-parameter'>APPENDIX C: Sort Parameter - Sortable Party Parameters</a> mentioned in the API Documentation. The fields can be sorted either ASC or DESC. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC",
			"default": "sort=caseYear,DESC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortParameterQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Case Status",
			"name": "caseStatus",
			"description": "Status of a case. 'closed' for a Terminated case, 'open' for Pending cases. If this parameter is not sent both cases that fall in open and closed will be queried.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "caseStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page Number for a given Job ID or for the search your going to make.",
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
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
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
						"PACER API"
					],
					"operation": [
						"Multi District Courts Pacer Case Locator Party Search"
					]
				}
			}
		},
];
