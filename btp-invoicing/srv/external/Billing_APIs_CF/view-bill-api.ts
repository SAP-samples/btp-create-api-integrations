/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { BillResponse } from './schema';
/**
 * Representation of the 'ViewBillApi'.
 * This API is part of the 'Billing_APIs_CF' service.
 */
export const ViewBillApi = {
  /**
   * For the specified month, year, and developer View Bill provides the bill details. In the bill details, you can view the total bill amount, bill id, bill amount corresponding to each application, and the details of all products and rate plans associated to each application. To view bill details of a specific application, enter the application ID and view bill details specific to that application.
   * @param queryParameters - Object containing the following keys: month, year, developer_id, application_id.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getMonetizeBills: (queryParameters: {'month': string,
  'year': string,
  'developer_id': string,
  'application_id'?: string}) => new OpenApiRequestBuilder<BillResponse>(
    'get',
    '/api/1.0/apimgmt/monetize/bills',
    {
          queryParameters
        }
  )
};
