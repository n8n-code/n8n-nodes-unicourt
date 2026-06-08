import type { INodeProperties } from 'n8n-workflow';

export const lawFirmAnalyticsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Law Firm Analytics API"
					]
				}
			},
			"options": [
				{
					"name": "Get Norm Law Firm By Id",
					"value": "Get Norm Law Firm By Id",
					"action": "Norm LawFirm Details.",
					"description": "The Law Firm API allows you to look up Law Firms by normLawFirmId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normLawFirm/{{$parameter[\"normLawFirmId\"]}}"
						}
					}
				},
				{
					"name": "Get Norm Attorneys Associated With Norm Law Firm",
					"value": "Get Norm Attorneys Associated With Norm Law Firm",
					"action": "Attorneys working for the Law Firm.",
					"description": "Returns a list of Attorneys associated to a Law Firm.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId**  | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **caseFiledDate**  | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>        \n## Example Query\nQuery to get all attorneys associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normLawFirm/{{$parameter[\"normLawFirmId\"]}}/associatedNormAttorneys"
						}
					}
				},
				{
					"name": "Get Norm Judges Associated With Norm Law Firm",
					"value": "Get Norm Judges Associated With Norm Law Firm",
					"action": "Judges Faced By the Law Firm.",
					"description": "Returns list of Judges faced by the Law Firm.\n<br><br>\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all judges associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normLawFirm/{{$parameter[\"normLawFirmId\"]}}/associatedNormJudges"
						}
					}
				},
				{
					"name": "Get Norm Parties Associated With Norm Law Firm",
					"value": "Get Norm Parties Associated With Norm Law Firm",
					"action": "Parties Represented by the Law Firm.",
					"description": "Returns list of Parties represented by the Law Firm.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all parties associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normLawFirm/{{$parameter[\"normLawFirmId\"]}}/associatedNormParties"
						}
					}
				},
				{
					"name": "Search Normalized Law Firms",
					"value": "Search Normalized Law Firms",
					"action": "Law firm search.",
					"description": "### All query parameters supported for this API can be found in below schema section. Schema --> NormLawFirmSearchQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normLawFirmSearch"
						}
					}
				},
				{
					"name": "Search Normalized Law Firms By Id",
					"value": "Search Normalized Law Firms By Id",
					"action": "Norm law firm search result for a given normLawFirmSearchId.",
					"description": "### All query parameters supported for this API can be found in below schema section. Schema --> NormLawFirmSearchQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normLawFirmSearch/{{$parameter[\"normLawFirmSearchId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /normLawFirm/{normLawFirmId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Law Firm By Id"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Law Firm By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /normLawFirm/{normLawFirmId}/associatedNormAttorneys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Law Firm"
					]
				}
			}
		},
		{
			"displayName": "GET /normLawFirm/{normLawFirmId}/associatedNormJudges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Law Firm"
					]
				}
			}
		},
		{
			"displayName": "GET /normLawFirm/{normLawFirmId}/associatedNormParties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Law Firm"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Get Norm Parties Associated With Norm Law Firm"
					]
				}
			}
		},
		{
			"displayName": "GET /normLawFirmSearch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Law Firm Analytics API"
					],
					"operation": [
						"Search Normalized Law Firms"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Search Normalized Law Firms"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Search Normalized Law Firms"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Search Normalized Law Firms"
					]
				}
			}
		},
		{
			"displayName": "GET /normLawFirmSearch/{normLawFirmSearchId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Law Firm Analytics API"
					],
					"operation": [
						"Search Normalized Law Firms By Id"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Search Normalized Law Firms By Id"
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
						"Law Firm Analytics API"
					],
					"operation": [
						"Search Normalized Law Firms By Id"
					]
				}
			}
		},
];
