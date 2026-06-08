import type { INodeProperties } from 'n8n-workflow';

export const caseAnalyticsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					]
				}
			},
			"options": [
				{
					"name": "Get Case Count Analytics By Area Of Law",
					"value": "Get Case Count Analytics By Area Of Law",
					"action": "Case Count Analytics by Area Of Law.",
					"description": "Get Case Count Analytics by Area Of Law.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by Area Of Law of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByAreaOfLaw"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Case Class",
					"value": "Get Case Count Analytics By Case Class",
					"action": "Case Count Analytics by Case Class.",
					"description": "Get Analytics by Case Class.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by Case Class  of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCaseClass"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Case Filed Date",
					"value": "Get Case Count Analytics By Case Filed Date",
					"action": "Case Count Analytics by Case Filed Date.",
					"description": "Get Case Count Analytics grouped by Filing Date.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by case filed date of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCaseFiledDate"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Case Type",
					"value": "Get Case Count Analytics By Case Type",
					"action": "Case Count Analytics by Case Type.",
					"description": "Get Case Count Analytics by Case Type.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by case types  of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCaseType"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Case Type Group",
					"value": "Get Case Count Analytics By Case Type Group",
					"action": "Case Count Analytics by Case Type Group.",
					"description": "Get Analytics by Case Type Group.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by case type catgeory of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCaseTypeGroup"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Court",
					"value": "Get Case Count Analytics By Court",
					"action": "Case Count Analytics by Court.",
					"description": "Get Case Count Analytics grouped by Court.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by Court of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCourt"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Court Location",
					"value": "Get Case Count Analytics By Court Location",
					"action": "Case Count Analytics by Court Location.",
					"description": "Get Case Count Analytics grouped by Court Location.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by court location  of all cases with court id CORTV4vCEaKrhystBz and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=courtId:\"CORTV4vCEaKrhystBz\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCourtLocation"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Court System",
					"value": "Get Case Count Analytics By Court System",
					"action": "Case Count Analytics by Court System.",
					"description": "Get Case Count Analytics grouped by Court System.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by court system of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCourtSystem"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Court Type",
					"value": "Get Case Count Analytics By Court Type",
					"action": "Case Count Analytics by CourtType.",
					"description": "Get Case Count Analytics grouped by Court Type.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by court type  of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByCourtType"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Jurisdiction Geo",
					"value": "Get Case Count Analytics By Jurisdiction Geo",
					"action": "Case Count Analytics by Jurisdiction Geo.",
					"description": "Get Case Count Analytics grouped by Jurisdiction Geo.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by jurisdiction geo of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByJurisdictionGeo"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Norm Attorney",
					"value": "Get Case Count Analytics By Norm Attorney",
					"action": "Case Count Analytics by Attorney.",
					"description": "Returns Case Analytics by Attorney.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by norm attorney of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByNormAttorney"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Norm Judge",
					"value": "Get Case Count Analytics By Norm Judge",
					"action": "Case Count Analytics by Judge.",
					"description": "Returns Case Analytics by Judge.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **normAttorneyId** | Multiple Ids Allowed |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by norm judge of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByNormJudge"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Norm Law Firm",
					"value": "Get Case Count Analytics By Norm Law Firm",
					"action": "Case Count Analytics by Norm Law Firm.",
					"description": "Returns Case Analytics by Norm Law Firm.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by norm lawfirm  of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByNormLawFirm"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Norm Party",
					"value": "Get Case Count Analytics By Norm Party",
					"action": "Case Count Analytics by Party.",
					"description": "Returns Case Analytics by Party.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Multiple Ids Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normLawFirmId** | Multiple Ids Allowed  |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normPartyId** | Multiple Ids Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Multiple Ids Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by norm party of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByNormParty"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Party Role",
					"value": "Get Case Count Analytics By Party Role",
					"action": "Case Count Analytics by Party Role.",
					"description": "Returns Case Analytics by Party Type.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by party role of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByPartyRole"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Party Role Group",
					"value": "Get Case Count Analytics By Party Role Group",
					"action": "Case Count Analytics by Party Role Group.",
					"description": "Returns Case Analytics by Party Type Group.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normPartyId** | Multiple Ids Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by Party Role Group of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/caseCountAnalyticsByPartyRoleGroup"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Opposing Norm Attorney For A Norm Attorney",
					"value": "Get Case Count Analytics By Opposing Norm Attorney For A Norm Attorney",
					"action": "Case Count Analytics by Opposing Norm Attorney.",
					"description": "Returns Case Analytics by Attorney.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normPartyId** | Single Allowed  |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Single Allowed |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by norm attorney with norm id NATYY29p78c7UoyJJ of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normAttorney/{{$parameter[\"normAttorneyId\"]}}/caseCountAnalyticsByOpposingNormAttorney"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Opposing Norm Law Firm For A Norm Law Firm",
					"value": "Get Case Count Analytics By Opposing Norm Law Firm For A Norm Law Firm",
					"action": "Case Count Analytics by Opposing Norm Law Firm.",
					"description": "Returns Case Analytics by Norm Law Firm.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normPartyId** | Single Allowed |Find Analytics for a particular Party Object. | **normPartyId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by norm lawfirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normLawFirm/{{$parameter[\"normLawFirmId\"]}}/caseCountAnalyticsByOpposingNormLawFirm"
						}
					}
				},
				{
					"name": "Get Case Count Analytics By Opposing Norm Party For A Norm Party",
					"value": "Get Case Count Analytics By Opposing Norm Party For A Norm Party",
					"action": "Case Count Analytics by Opposing Norm Party.",
					"description": "Returns Case Analytics by Opposing Norm Party.\n## Terms and Connectors\n| Connector | Schema   | Description  | Example |\n| ------| ------| ------|------|\n| **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**|\n| **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**|\n| **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** |\n| **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** |\n| **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** |\n| **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** |\n| **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPATMYyaJekdgj2c\"** |\n| **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYG8gZ6hPRKhhYi4Y\"** |\n| **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** |\n| **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** |\n| **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** |\n| **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** |\n| **normAttorneyId** | Single Allowed  |Find Analytics for a particular norm Attorney Object. | **normAttorneyId:\"NATYfwmXwRHS279WPY\"** |\n| **normLawFirmId** | Single Allowed |Find Analytics for a particular Norm LawFirm Object. | **normLawFirmId:\"NORGrPmQyLdx9NGHcT\"** |\n| **normJudgeId** | Single Allowed  |Find Analytics for a particular Judge Object. | **normJudgeId:\"NJUDT7jCZyFNeLGpRq\"** |\n| **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** |\n| **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** |\n| **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore>=0.5** |\n| **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** |\n<br>\n## Example Query\nQuery to get case count grouped by norm party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPATMYyaJekdgj2c and filed between Jan 1st, 2017 to Nov 30th,2021<br>\nq=caseTypeId:\"CTYPATMYyaJekdgj2c\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/normParty/{{$parameter[\"normPartyId\"]}}/caseCountAnalyticsByOpposingNormParty"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /caseCountAnalyticsByAreaOfLaw",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Area Of Law"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Area Of Law"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Area Of Law"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Area Of Law"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCaseClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Class"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Class"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Class"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Class"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCaseFiledDate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Filed Date"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Filed Date"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Filed Date"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"required": true,
			"description": "GroupBy",
			"default": "Yearly",
			"type": "options",
			"options": [
				{
					"name": "Yearly",
					"value": "Yearly"
				},
				{
					"name": "Quarterly",
					"value": "Quarterly"
				},
				{
					"name": "Monthly",
					"value": "Monthly"
				},
				{
					"name": "Weekly",
					"value": "Weekly"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "groupBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Filed Date"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Filed Date"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCaseType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCaseTypeGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type Group"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type Group"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type Group"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Case Type Group"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCourt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCourtLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Location"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Location"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Location"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Location"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCourtSystem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court System"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court System"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court System"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court System"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByCourtType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Type"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Type"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Type"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Court Type"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByJurisdictionGeo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Jurisdiction Geo"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Jurisdiction Geo"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Jurisdiction Geo"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Jurisdiction Geo"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByNormAttorney",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Attorney"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Attorney"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Attorney"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Attorney"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByNormJudge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Judge"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Judge"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Judge"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Judge"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByNormLawFirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Law Firm"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Law Firm"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Law Firm"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Law Firm"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByNormParty",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Party"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Party"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Party"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Norm Party"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByPartyRole",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role"
					]
				}
			}
		},
		{
			"displayName": "GET /caseCountAnalyticsByPartyRoleGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role Group"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role Group"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role Group"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Party Role Group"
					]
				}
			}
		},
		{
			"displayName": "GET /normAttorney/{normAttorneyId}/caseCountAnalyticsByOpposingNormAttorney",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Attorney For A Norm Attorney"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Attorney For A Norm Attorney"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Attorney For A Norm Attorney"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Attorney For A Norm Attorney"
					]
				}
			}
		},
		{
			"displayName": "GET /normLawFirm/{normLawFirmId}/caseCountAnalyticsByOpposingNormLawFirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Law Firm For A Norm Law Firm"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Law Firm For A Norm Law Firm"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Law Firm For A Norm Law Firm"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Law Firm For A Norm Law Firm"
					]
				}
			}
		},
		{
			"displayName": "GET /normParty/{normPartyId}/caseCountAnalyticsByOpposingNormParty",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Party For A Norm Party"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Party For A Norm Party"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Party For A Norm Party"
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
						"Case Analytics API"
					],
					"operation": [
						"Get Case Count Analytics By Opposing Norm Party For A Norm Party"
					]
				}
			}
		},
];
