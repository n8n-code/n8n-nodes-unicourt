import type { INodeProperties } from 'n8n-workflow';

export const partyAnalyticsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Party Analytics API"
					]
				}
			},
			"options": [
				{
					"name": "Get Norm Party By Id",
					"value": "Get Norm Party By Id",
					"action": "Norm Party Details.",
					"description": "The Party Details API allows you to look up Parties by normPartyId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normParty/{{$parameter[\"normPartyId\"]}}"
						}
					}
				},
				{
					"name": "Get Norm Attorneys Associated With Norm Party",
					"value": "Get Norm Attorneys Associated With Norm Party",
					"action": "Attorneys that represented the Party.",
					"description": "Returns a list of  Attorneys the Party has been represented by.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTqrgr5iFOXfIBmk\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all attorneys associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normParty/{{$parameter[\"normPartyId\"]}}/associatedNormAttorneys"
						}
					}
				},
				{
					"name": "Get Norm Judges Associated With Norm Party",
					"value": "Get Norm Judges Associated With Norm Party",
					"action": "Judges Faced By the Party.",
					"description": "Returns a list of Judges the party has faced.\n<br><br>\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTqrgr5iFOXfIBmk\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all judges associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n<br><br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normParty/{{$parameter[\"normPartyId\"]}}/associatedNormJudges"
						}
					}
				},
				{
					"name": "Get Norm Law Firms Associated With Norm Party",
					"value": "Get Norm Law Firms Associated With Norm Party",
					"action": "Law Firms that represented the Party.",
					"description": "Returns a list of Law Firms the Party has been represented by.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTqrgr5iFOXfIBmk\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get all lawfirms associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normParty/{{$parameter[\"normPartyId\"]}}/associatedNormLawFirms"
						}
					}
				},
				{
					"name": "Search Normalized Parties",
					"value": "Search Normalized Parties",
					"action": "Party search.",
					"description": "### All query parameters supported for this API can be found in below schema section. Schema --> NormPartySearchQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normPartySearch"
						}
					}
				},
				{
					"name": "Search Normalized Parties By Id",
					"value": "Search Normalized Parties By Id",
					"action": "Norm party search results for a given normPartySearchId.",
					"description": "### All query parameters supported for this API can be found in below schema section. Schema --> NormPartySearchQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normPartySearch/{{$parameter[\"normPartySearchId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /normParty/{normPartyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Party By Id"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Party By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /normParty/{normPartyId}/associatedNormAttorneys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Attorneys Associated With Norm Party"
					]
				}
			}
		},
		{
			"displayName": "GET /normParty/{normPartyId}/associatedNormJudges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Judges Associated With Norm Party"
					]
				}
			}
		},
		{
			"displayName": "GET /normParty/{normPartyId}/associatedNormLawFirms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Party"
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
						"Party Analytics API"
					],
					"operation": [
						"Get Norm Law Firms Associated With Norm Party"
					]
				}
			}
		},
		{
			"displayName": "GET /normPartySearch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Party Analytics API"
					],
					"operation": [
						"Search Normalized Parties"
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
						"Party Analytics API"
					],
					"operation": [
						"Search Normalized Parties"
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
						"Party Analytics API"
					],
					"operation": [
						"Search Normalized Parties"
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
						"Party Analytics API"
					],
					"operation": [
						"Search Normalized Parties"
					]
				}
			}
		},
		{
			"displayName": "GET /normPartySearch/{normPartySearchId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Party Analytics API"
					],
					"operation": [
						"Search Normalized Parties By Id"
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
						"Party Analytics API"
					],
					"operation": [
						"Search Normalized Parties By Id"
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
						"Party Analytics API"
					],
					"operation": [
						"Search Normalized Parties By Id"
					]
				}
			}
		},
];
