/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'DownloadBillApi'.
 * This API is part of the 'Billing_APIs_CF' service.
 */
export const DownloadBillApi = {
  /**
   * For the specified month, year, and developer you can download the bill details in a .csv format. In the bill details, you can view the total bill amount, bill id, bill amount corresponding to each application, and the details of all products and rate plans associated to each application.
   * @param queryParameters - Object containing the following keys: month, year, developer_id.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getMonetizeBillsDownload: (queryParameters: {'month': string,
  'year': string,
  'developer_id': string}) => new OpenApiRequestBuilder<any>(
    'get',
    '/monetize/bills/download',
    {
          queryParameters
        }
  )
};
