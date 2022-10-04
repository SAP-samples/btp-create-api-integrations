/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'DownloadBillUsingBillIDApi'.
 * This API is part of the 'Billing_APIs_CF' service.
 */
export const DownloadBillUsingBillIDApi = {
  /**
   * For a specific bill, using the bill ID, you can download the bill details in a .csv format. In the bill details, you can view the total bill amount, bill id, bill amount corresponding to each application, and the details of all products and rate plans associated to each application. You can obtain bill ID through View Bill resource.
   * @param billid - id of the bill
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getMonetizeBillsByBillid: (billid: string) => new OpenApiRequestBuilder<any>(
    'get',
    '/monetize/bills/{billid}',
    {
          pathParameters: { billid }
        }
  )
};
