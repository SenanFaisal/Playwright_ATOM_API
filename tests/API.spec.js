const { test, expect } = require('@playwright/test');

test.describe('ATOM GET API', () => {
    require('../modules/leads/get/leadsApi')
    require('../modules/Opportunity/get/oppotunityAPI')

});






