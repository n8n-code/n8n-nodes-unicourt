import type { INodeProperties } from 'n8n-workflow';

export const courtStandardsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					]
				}
			},
			"options": [
				{
					"name": "Get Areas Of Law",
					"value": "Get Areas Of Law",
					"action": "AreaOfLaw Object.",
					"description": "Returns AreaOfLaw Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> AreaOfLawQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/areaOfLaw"
						}
					}
				},
				{
					"name": "Get Area Of Law",
					"value": "Get Area Of Law",
					"action": "AreaOfLaw Object for the given AreaOfLaw Id.",
					"description": "AreaOfLaw Object for the given AreaOfLaw Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/areaOfLaw/{{$parameter[\"areaOfLawId\"]}}"
						}
					}
				},
				{
					"name": "Get Attorney Representation Types",
					"value": "Get Attorney Representation Types",
					"action": "Attorney Representation Type Object.",
					"description": "Returns Attorney Representation Type Objects.\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyRepresentationTypeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/attorneyRepresentationType"
						}
					}
				},
				{
					"name": "Get Attorney Representation Type",
					"value": "Get Attorney Representation Type",
					"action": "Attorney Representation Type Object for the given attorneyRepresentationTypeId.",
					"description": "Returns Attorney Representation Type Object for the given attorneyRepresentationTypeId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/attorneyRepresentationType/{{$parameter[\"attorneyRepresentationTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Attorney Types",
					"value": "Get Attorney Types",
					"action": "Attorney Type Object.",
					"description": "Returns Attorney Type Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> AttorneyTypeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/attorneyType"
						}
					}
				},
				{
					"name": "Get Attorney Type",
					"value": "Get Attorney Type",
					"action": "Attorney Type Object for given Attorney Type Id.",
					"description": "Attorney Type Object for given Attorney Type Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/attorneyType/{{$parameter[\"attorneyTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Cases Class",
					"value": "Get Cases Class",
					"action": "Case Class Object.",
					"description": "Returns Case Class information.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseClassQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseClass"
						}
					}
				},
				{
					"name": "Get Case Class",
					"value": "Get Case Class",
					"action": "Case Class Object for the given Case Class Id.",
					"description": "Case Class for the given Case Class Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseClass/{{$parameter[\"caseClassId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Relationship Types",
					"value": "Get Case Relationship Types",
					"action": "Case Relationship Type Object.",
					"description": "Returns Case Relationship Type Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseRelationshipTypeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseRelationshipType"
						}
					}
				},
				{
					"name": "Get Case Relationship Type",
					"value": "Get Case Relationship Type",
					"action": "Case Relationship Type Object for the given caseRelationshipTypeId.",
					"description": "Case Relationship Type Object for the given caseRelationshipTypeId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseRelationshipType/{{$parameter[\"caseRelationshipTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Cases Status",
					"value": "Get Cases Status",
					"action": "Case Status Object.",
					"description": "Returns Case Status Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below Schema section. Schema --> CaseStatusQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseStatus"
						}
					}
				},
				{
					"name": "Get Case Status",
					"value": "Get Case Status",
					"action": "Returns the caseStatus information for the given caseStatusId.",
					"description": "Case Status Object for given Case Status Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseStatus/{{$parameter[\"caseStatusId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Status Groups",
					"value": "Get Case Status Groups",
					"action": "Case Status Group Object.",
					"description": "Returns Case Status Group Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseStatusGroupQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseStatusGroup"
						}
					}
				},
				{
					"name": "Get Case Status Group",
					"value": "Get Case Status Group",
					"action": "Returns the caseStatusGroup information for the given caseStatusGroupId.",
					"description": "CaseStatusGroup information for the given Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseStatusGroup/{{$parameter[\"caseStatusGroupId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Types",
					"value": "Get Case Types",
					"action": "Case Type Object.",
					"description": "Returns Case Type information.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseType"
						}
					}
				},
				{
					"name": "Get Case Type",
					"value": "Get Case Type",
					"action": "CaseType Object for given Case Type Id.",
					"description": "CaseType Object for the given Case Type Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseType/{{$parameter[\"caseTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Case Type Groups",
					"value": "Get Case Type Groups",
					"action": "CaseTypeGroup Object.",
					"description": "Returns CaseTypeGroup Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CaseTypeGroupQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseTypeGroup"
						}
					}
				},
				{
					"name": "Get Case Type Group",
					"value": "Get Case Type Group",
					"action": "CaseType Group for the given CaseType Group Id.",
					"description": "Returns CaseType Group for the given CaseType Group Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/caseTypeGroup/{{$parameter[\"caseTypeGroupId\"]}}"
						}
					}
				},
				{
					"name": "Get Causes Of Action",
					"value": "Get Causes Of Action",
					"action": "CauseOfAction Object.",
					"description": "Returns CauseOfAction Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/causeOfAction"
						}
					}
				},
				{
					"name": "Get Cause Of Action",
					"value": "Get Cause Of Action",
					"action": "CauseOfAction Object for the given causeOfActionId.",
					"description": "CauseOfAction Object for the given causeOfActionId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/causeOfAction/{{$parameter[\"causeOfActionId\"]}}"
						}
					}
				},
				{
					"name": "Get Causes Of Action Additional Data",
					"value": "Get Causes Of Action Additional Data",
					"action": "CauseOfActionAdditionaData Object.",
					"description": "Returns CauseOfActionAdditionaData Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionAdditionalDataQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/causeOfActionAdditionalData"
						}
					}
				},
				{
					"name": "Get Cause Of Action Additional Data",
					"value": "Get Cause Of Action Additional Data",
					"action": "CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.",
					"description": "CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/causeOfActionAdditionalData/{{$parameter[\"causeOfActionAdditionalDataId\"]}}"
						}
					}
				},
				{
					"name": "Get Causes Of Action Group",
					"value": "Get Causes Of Action Group",
					"action": "CauseOfActionGroup Object.",
					"description": "Returns CauseOfActionGroup Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CauseOfActionGroupQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/causeOfActionGroup"
						}
					}
				},
				{
					"name": "Get Cause Of Action Group",
					"value": "Get Cause Of Action Group",
					"action": "CauseOfActionGroup Object for the given causeOfActionGroupId.",
					"description": "CauseOfActionGroup Object for the given causeOfActionGroupId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/causeOfActionGroup/{{$parameter[\"causeOfActionGroupId\"]}}"
						}
					}
				},
				{
					"name": "Get Charges",
					"value": "Get Charges",
					"action": "Charge Object.",
					"description": "Returns Charge Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/charge"
						}
					}
				},
				{
					"name": "Get Charge",
					"value": "Get Charge",
					"action": "Charge Object for the given chargeId.",
					"description": "Charge Object for the given chargeId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/charge/{{$parameter[\"chargeId\"]}}"
						}
					}
				},
				{
					"name": "Get Charges Additional Data",
					"value": "Get Charges Additional Data",
					"action": "Charge Additional Data Object.",
					"description": "Returns ChargeAdditionalData Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeAdditionalDataQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeAdditionalData"
						}
					}
				},
				{
					"name": "Get Charge Additional Data",
					"value": "Get Charge Additional Data",
					"action": "Charge Additional Data Object for the given chargeAdditionalDataId.",
					"description": "Charge Additional Data Object for the given chargeAdditionalDataId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeAdditionalData/{{$parameter[\"chargeAdditionalDataId\"]}}"
						}
					}
				},
				{
					"name": "Get Charges Degree",
					"value": "Get Charges Degree",
					"action": "ChargeDegree Object.",
					"description": "Returns ChargeDegree Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeDegreeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeDegree"
						}
					}
				},
				{
					"name": "Get Charge Degree",
					"value": "Get Charge Degree",
					"action": "ChargeDegree Object for the given chargeDegreeId.",
					"description": "ChargeDegree Object for the given chargeDegreeId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeDegree/{{$parameter[\"chargeDegreeId\"]}}"
						}
					}
				},
				{
					"name": "Get Charge Groups",
					"value": "Get Charge Groups",
					"action": "Charge Group Object.",
					"description": "Returns Charge Group Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeGroupQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeGroup"
						}
					}
				},
				{
					"name": "Get Charge Group",
					"value": "Get Charge Group",
					"action": "Charge Group Object for the given chargeGroupId.",
					"description": "Charge Group Object for the given chargeGroupId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeGroup/{{$parameter[\"chargeGroupId\"]}}"
						}
					}
				},
				{
					"name": "Get Charges Severity",
					"value": "Get Charges Severity",
					"action": "ChargeSeverity Object.",
					"description": "Returns ChargeSeverity Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> ChargeSeverityQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeSeverity"
						}
					}
				},
				{
					"name": "Get Charge Severity",
					"value": "Get Charge Severity",
					"action": "ChargeSeverity Object for the given chargeSeverityId.",
					"description": "ChargeSeverity Object for the given chargeSeverityId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/chargeSeverity/{{$parameter[\"chargeSeverityId\"]}}"
						}
					}
				},
				{
					"name": "Get Courts",
					"value": "Get Courts",
					"action": "Court Objects.",
					"description": "Returns the court information.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n        | **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/court"
						}
					}
				},
				{
					"name": "Get Court",
					"value": "Get Court",
					"action": "Court Object for given courtId.",
					"description": "Returns court information for given courtId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/court/{{$parameter[\"courtId\"]}}"
						}
					}
				},
				{
					"name": "Get Appeal Courts For Court",
					"value": "Get Appeal Courts For Court",
					"action": "Appeal Court Objects for given courtId.",
					"description": "Returns Appeal Court Objects for given courtId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/court/{{$parameter[\"courtId\"]}}/appealCourts"
						}
					}
				},
				{
					"name": "Get Court Locations For Court",
					"value": "Get Court Locations For Court",
					"action": "Associated Court Location for given courtId.",
					"description": "Contains the Court Location Object for given courtId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/court/{{$parameter[\"courtId\"]}}/courtLocations"
						}
					}
				},
				{
					"name": "Get Jurisdiction Geo For Court",
					"value": "Get Jurisdiction Geo For Court",
					"action": "Jurisdiction Geo Objects for given courtId.",
					"description": "Returns Jurisdiction Geo Objects for given courtId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/court/{{$parameter[\"courtId\"]}}/jurisdictionGeo"
						}
					}
				},
				{
					"name": "Get Court Locations",
					"value": "Get Court Locations",
					"action": "Courthouse Object.",
					"description": "Returns the Courthouse Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtLocationQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtLocation"
						}
					}
				},
				{
					"name": "Get Court Location",
					"value": "Get Court Location",
					"action": "Courthouse Object for given Court Location Id.",
					"description": "Contains the Court Location Object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtLocation/{{$parameter[\"courtLocationId\"]}}"
						}
					}
				},
				{
					"name": "Get Courts For Court Location",
					"value": "Get Courts For Court Location",
					"action": "Associated Court for given Court Location.",
					"description": "Returns Associated Court for given Court Location.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtLocation/{{$parameter[\"courtLocationId\"]}}/courts"
						}
					}
				},
				{
					"name": "Get Courts Service Status",
					"value": "Get Courts Service Status",
					"action": "Court Service Status Object.",
					"description": "Returns Court Service Status Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtServiceStatusQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtServiceStatus"
						}
					}
				},
				{
					"name": "Get Court Service Status",
					"value": "Get Court Service Status",
					"action": "Court Service Status Object for the given courtServiceStatusId.",
					"description": "Court Service Status Object for the given courtServiceStatusId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtServiceStatus/{{$parameter[\"courtServiceStatusId\"]}}"
						}
					}
				},
				{
					"name": "Get Court Systems",
					"value": "Get Court Systems",
					"action": "Court System Objects.",
					"description": "Returns the Court System Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n        | **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtSystemQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtSystem"
						}
					}
				},
				{
					"name": "Get Court System",
					"value": "Get Court System",
					"action": "Court System Object for given courtSystemId.",
					"description": "Contains the Court System object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtSystem/{{$parameter[\"courtSystemId\"]}}"
						}
					}
				},
				{
					"name": "Get Court Types",
					"value": "Get Court Types",
					"action": "Court Type Objects.",
					"description": "Returns the Court Type Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n        | **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> CourtTypeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtType"
						}
					}
				},
				{
					"name": "Get Court Type",
					"value": "Get Court Type",
					"action": "Court Type Object for given courtTypeId.",
					"description": "Contains the Court Type Object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/courtType/{{$parameter[\"courtTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Judge Types",
					"value": "Get Judge Types",
					"action": "Judge Type Object.",
					"description": "Returns Judge Type Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JudgeTypeQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/judgeType"
						}
					}
				},
				{
					"name": "Get Judge Type",
					"value": "Get Judge Type",
					"action": "Judge Type Object for the given judgeTypeId.",
					"description": "Judge Type Object for the given judgeTypeId.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/judgeType/{{$parameter[\"judgeTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Jurisdictions Geo",
					"value": "Get Jurisdictions Geo",
					"action": "Jurisdiction Geo Object.",
					"description": "Returns the Jurisdiction Geo Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> JurisdictionGeoQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/jurisdictionGeo"
						}
					}
				},
				{
					"name": "Get Jurisdiction Geo",
					"value": "Get Jurisdiction Geo",
					"action": "Jurisdiction Geo Object for given Jurisdiction Geo Id.",
					"description": "Returns the Jurisdiction Geo Object for given Jurisdiction Geo Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/jurisdictionGeo/{{$parameter[\"jurisdictionGeoId\"]}}"
						}
					}
				},
				{
					"name": "Get Courts For Jurisdiction Geo",
					"value": "Get Courts For Jurisdiction Geo",
					"action": "Associated Court for given Jurisdiction Geo.",
					"description": "Returns Associated Court for given Jurisdiction Geo.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/jurisdictionGeo/{{$parameter[\"jurisdictionGeoId\"]}}/courts"
						}
					}
				},
				{
					"name": "Get Party Roles",
					"value": "Get Party Roles",
					"action": "Party Role Object.",
					"description": "Returns Party Role Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/partyRole"
						}
					}
				},
				{
					"name": "Get Party Role",
					"value": "Get Party Role",
					"action": "Party Role Object.",
					"description": "Returns Party Role Object for given Party Role Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/partyRole/{{$parameter[\"partyRoleId\"]}}"
						}
					}
				},
				{
					"name": "Get Party Role Groups",
					"value": "Get Party Role Groups",
					"action": "Party Role Group Object.",
					"description": "Returns Party Role Group Object.\n\n## Logical Operators\n| Connector | Description  | Example |\n| ------| ------|------|\n| **AND** |Find data containing all connected terms.|**google AND facebook**|\n| **OR**  |Find data containing any connected term.| **order OR decision**|\n| **NOT** |Exclude data.| **google NOT apple**.|\n| **“[phrase]”** |Find an exact phrase.| **\"Google Inc”** |\n| **( … )** |Parenthesis may be used to group sets of terms of connectors.| **google (facebook OR apple)**.|\n\n### All Filter Query parameters supported for this API can be found in below schema section. Schema --> PartyRoleGroupQueryObject\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/partyRoleGroup"
						}
					}
				},
				{
					"name": "Get Party Role Group",
					"value": "Get Party Role Group",
					"action": "Party Role Group Object.",
					"description": "Returns Party Role Group Object for given Party Role Group Id.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/masterData/partyRoleGroup/{{$parameter[\"partyRoleGroupId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /masterData/areaOfLaw",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Areas Of Law"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Areas Of Law"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Areas Of Law"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Areas Of Law"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Areas Of Law"
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
						"Court Standards API"
					],
					"operation": [
						"Get Areas Of Law"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/areaOfLaw/{areaOfLawId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Area Of Law"
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
						"Court Standards API"
					],
					"operation": [
						"Get Area Of Law"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/attorneyRepresentationType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Types"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Types"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Types"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Types"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Types"
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Types"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/attorneyRepresentationType/{attorneyRepresentationTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Type"
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Representation Type"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/attorneyType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Types"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Types"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Types"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Types"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Types"
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Types"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/attorneyType/{attorneyTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Type"
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
						"Court Standards API"
					],
					"operation": [
						"Get Attorney Type"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cases Class"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Cases Class"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Cases Class"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cases Class"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cases Class"
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
						"Court Standards API"
					],
					"operation": [
						"Get Cases Class"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseClass/{caseClassId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Class"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Class"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseRelationshipType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Types"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Types"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Types"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Types"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Types"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Types"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseRelationshipType/{caseRelationshipTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Type"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Relationship Type"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cases Status"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Cases Status"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Cases Status"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cases Status"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cases Status"
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
						"Court Standards API"
					],
					"operation": [
						"Get Cases Status"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseStatus/{caseStatusId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Status"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Status"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseStatusGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Groups"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Groups"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Groups"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Groups"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseStatusGroup/{caseStatusGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Group"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Status Group"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Types"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Types"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Types"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Types"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Types"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Types"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseType/{caseTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Type"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Type"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseTypeGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Groups"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Groups"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Groups"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Groups"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/caseTypeGroup/{caseTypeGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Group"
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
						"Court Standards API"
					],
					"operation": [
						"Get Case Type Group"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/causeOfAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action"
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/causeOfAction/{causeOfActionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cause Of Action"
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
						"Court Standards API"
					],
					"operation": [
						"Get Cause Of Action"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/causeOfActionAdditionalData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Additional Data"
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Additional Data"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/causeOfActionAdditionalData/{causeOfActionAdditionalDataId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cause Of Action Additional Data"
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
						"Court Standards API"
					],
					"operation": [
						"Get Cause Of Action Additional Data"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/causeOfActionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Group"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Group"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Group"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Group"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Group"
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
						"Court Standards API"
					],
					"operation": [
						"Get Causes Of Action Group"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/causeOfActionGroup/{causeOfActionGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Cause Of Action Group"
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
						"Court Standards API"
					],
					"operation": [
						"Get Cause Of Action Group"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/charge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/charge/{chargeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeAdditionalData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Additional Data"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Additional Data"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Additional Data"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeAdditionalData/{chargeAdditionalDataId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge Additional Data"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge Additional Data"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeDegree",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Degree"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Degree"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Degree"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Degree"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Degree"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Degree"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeDegree/{chargeDegreeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge Degree"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge Degree"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge Groups"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge Groups"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge Groups"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge Groups"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeGroup/{chargeGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge Group"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge Group"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeSeverity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Severity"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Severity"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Severity"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Severity"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charges Severity"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charges Severity"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/chargeSeverity/{chargeSeverityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Charge Severity"
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
						"Court Standards API"
					],
					"operation": [
						"Get Charge Severity"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/court",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts"
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/court/{courtId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/court/{courtId}/appealCourts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Appeal Courts For Court"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Appeal Courts For Court"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Appeal Courts For Court"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Appeal Courts For Court"
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
						"Court Standards API"
					],
					"operation": [
						"Get Appeal Courts For Court"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/court/{courtId}/courtLocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations For Court"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations For Court"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations For Court"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations For Court"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations For Court"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/court/{courtId}/jurisdictionGeo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdiction Geo For Court"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdiction Geo For Court"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "state",
			"type": "options",
			"options": [
				{
					"name": "State",
					"value": "state"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdiction Geo For Court"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdiction Geo For Court"
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
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdiction Geo For Court"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Locations"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtLocation/{courtLocationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Location"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Location"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtLocation/{courtLocationId}/courts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Court Location"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Court Location"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Court Location"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Court Location"
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Court Location"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtServiceStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts Service Status"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts Service Status"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts Service Status"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts Service Status"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts Service Status"
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts Service Status"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtServiceStatus/{courtServiceStatusId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Service Status"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Service Status"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtSystem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Systems"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Systems"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Systems"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Systems"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Systems"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Systems"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtSystem/{courtSystemId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court System"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court System"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Types"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Types"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Types"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Types"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Types"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Types"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/courtType/{courtTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Court Type"
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
						"Court Standards API"
					],
					"operation": [
						"Get Court Type"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/judgeType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Judge Types"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Judge Types"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Judge Types"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Judge Types"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Judge Types"
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
						"Court Standards API"
					],
					"operation": [
						"Get Judge Types"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/judgeType/{judgeTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Judge Type"
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
						"Court Standards API"
					],
					"operation": [
						"Get Judge Type"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/jurisdictionGeo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdictions Geo"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdictions Geo"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdictions Geo"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "state",
			"type": "options",
			"options": [
				{
					"name": "State",
					"value": "state"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdictions Geo"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdictions Geo"
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
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdictions Geo"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/jurisdictionGeo/{jurisdictionGeoId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdiction Geo"
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
						"Court Standards API"
					],
					"operation": [
						"Get Jurisdiction Geo"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/jurisdictionGeo/{jurisdictionGeoId}/courts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Jurisdiction Geo"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Jurisdiction Geo"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Jurisdiction Geo"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Jurisdiction Geo"
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
						"Court Standards API"
					],
					"operation": [
						"Get Courts For Jurisdiction Geo"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/partyRole",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Roles"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Roles"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Roles"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Roles"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Roles"
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/partyRole/{partyRoleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Role"
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Role"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/partyRoleGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Groups"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.\nAll options are documented above.</a>\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Groups"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Page number.\n- minimum: 1\n- maximum: 100\n",
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort field.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Groups"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Sort order.",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Groups"
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /masterData/partyRoleGroup/{partyRoleGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Group"
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
						"Court Standards API"
					],
					"operation": [
						"Get Party Role Group"
					]
				}
			}
		},
];
