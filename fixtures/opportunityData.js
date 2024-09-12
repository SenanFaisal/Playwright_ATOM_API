const URL = 'https://atom.stage.dmclinical.com/'
const opportunityData = {
    getAllOpertunity: `${URL}/api/v1/Opportunity/GetAll/:subLeadId`,
    SubleadList: `${URL}/api/v1/Opportunity/Subleadlist/:leadId`,
    currentStateId: `${URL}/api/v1/Opportunity/StatusSelectList/:currentStatusId`,
    GetAllStatus: `${URL}/api/v1/Opportunity/GetAllStatuses`,
    prinicipalInvestigatorSelectList: `${URL}/api/v1/Opportunity/PrincipalInvestigatorsSelectList/:siteId`,
    GetOpportunity: `${URL}/api/v1/Opportunity/GetOpportunity/:opportunityId`,
    GetOpportunityAttachments: `${URL}/api/v1/Opportunity/GetOpportunityAttachments/:oppId`,
    GetArchiveAttachment: `${URL}/api/v1/Opportunity/GetArchiveAttachments`,
    GetOpportunityInteractions: `${URL}/api/v1/Opportunity/GetOpportunityInteractions/:oppId`,
    ExportOpportunitybyLead: `${URL}/api/v1/Opportunity/ExportOpportunitybylead`,
    OpportunityFieledData: `${URL}/api/v1/Opportunity/GetAllOpportunityFieldData`,
    OpportunityActivityLog: `${URL}/api/v1/Opportunity/GetOpportunityActivityLogs/:oppId`,

    PBMCStatuses: `${URL}/api/v1/Opportunity/GetPBMCStatuses`,
    OpportunityCategories: `${URL}/api/v1/Opportunity/GetOpportunityCategories`,
    CatrgoryBudget: `${URL}/api/v1/Opportunity/GetCategoryBudgets`,
    EnrollmentTypes: `${URL}/api/v1/Opportunity/GetEnrollmentTypes`,
    SiteinformationOpportunityWise: `${URL}/api/v1/Opportunity/GetSiteInformationOpportunityWise/:siteId/:opportunityId`,
    DropdownDataCapabilities: `${URL}/api/v1/Opportunity/GetSiteDropdownDataFromCapabilities/:siteId`,
    currentStatusId: `${URL}/api/v1/Opportunity/getSubStatusByStatus/:currentStatusId`,



}
module.exports = opportunityData;