import type { INodeProperties } from 'n8n-workflow';

export const judgeAnalyticsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					]
				}
			},
			"options": [
				{
					"name": "Get Norm Judge By Id",
					"value": "Get Norm Judge By Id",
					"action": "Norm Judge Details.",
					"description": "The Judge API allows you to look up Judge Details by normJudgeId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normJudge/{{$parameter[\"normJudgeId\"]}}"
						}
					}
				},
				{
					"name": "Get Norm Attorneys Associated With Norm Judge",
					"value": "Get Norm Attorneys Associated With Norm Judge",
					"action": "Attorneys Associated with the Judge.",
					"description": "Returns a list of attorneys associated with a judge.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLOOY8WTHDBLL0eWv\",\"COLOItKA5pBVovpQSZ\")**|\n| **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all attorneys associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPATMYyaJekdgj2c and case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normJudge/{{$parameter[\"normJudgeId\"]}}/associatedNormAttorneys"
						}
					}
				},
				{
					"name": "Get Norm Law Firms Associated With Norm Judge",
					"value": "Get Norm Law Firms Associated With Norm Judge",
					"action": "Law Firms Associated With the Judge.",
					"description": "Returns a list of Law Firms a Judge has heard.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLOOY8WTHDBLL0eWv\",\"COLOItKA5pBVovpQSZ\")**|\n| **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all Law Firms associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPATMYyaJekdgj2c and case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normJudge/{{$parameter[\"normJudgeId\"]}}/associatedNormLawFirms"
						}
					}
				},
				{
					"name": "Get Norm Parties Associated With Norm Judge",
					"value": "Get Norm Parties Associated With Norm Judge",
					"action": "Parties Associated with the Judge.",
					"description": "Returns a list of Parties A Judge has seen.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLOOY8WTHDBLL0eWv\",\"COLOItKA5pBVovpQSZ\")**|\n| **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all Parties associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPATMYyaJekdgj2c and case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normJudge/{{$parameter[\"normJudgeId\"]}}/associatedNormParties"
						}
					}
				},
				{
					"name": "Search Normalized Judges",
					"value": "Search Normalized Judges",
					"action": "Judge search.",
					"description": "### All query parameters supported for this API can be found in below schema section. Schema --> NormJudgeSearchQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normJudgeSearch"
						}
					}
				},
				{
					"name": "Search Normalized Judges By Id",
					"value": "Search Normalized Judges By Id",
					"action": "Norm judge search results for a given normJudgeSearchId.",
					"description": "### All query parameters supported for this API can be found in below schema section. Schema --> NormJudgeSearchQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normJudgeSearch/{{$parameter[\"normJudgeSearchId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /normJudge/{normJudgeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Judge By Id"
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
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Judge By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /normJudge/{normJudgeId}/associatedNormAttorneys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"required": true,
			"description": "Page number.\n- minimum: 1\n",
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
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Judge"
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
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "GET /normJudge/{normJudgeId}/associatedNormLawFirms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"required": true,
			"description": "Page number.\n- minimum: 1\n",
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
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Judge"
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
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "GET /normJudge/{normJudgeId}/associatedNormParties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"required": true,
			"description": "Page number.\n- minimum: 1\n",
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
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Judge"
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
						"Judge Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "GET /normJudgeSearch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Search Normalized Judges"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.</a>\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Search Normalized Judges"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n",
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
						"Judge Analytics API"
					],
					"operation": [
						"Search Normalized Judges"
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
						"Judge Analytics API"
					],
					"operation": [
						"Search Normalized Judges"
					]
				}
			}
		},
		{
			"displayName": "GET /normJudgeSearch/{normJudgeSearchId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Judge Analytics API"
					],
					"operation": [
						"Search Normalized Judges By Id"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n",
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
						"Judge Analytics API"
					],
					"operation": [
						"Search Normalized Judges By Id"
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
						"Judge Analytics API"
					],
					"operation": [
						"Search Normalized Judges By Id"
					]
				}
			}
		},
];
