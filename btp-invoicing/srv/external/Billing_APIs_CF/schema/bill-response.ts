/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'BillResponse' schema.
     */
    export type BillResponse = {
      /**
       * @example "I2435AZ"
       */
      'developerId'?: string;
      /**
       * @example "ABC"
       */
      'developerName'?: string;
      /**
       * @example "2017:5:1T00:00:00"
       */
      'startDate'?: string;
      /**
       * @example "2017:5:1T00:00:00"
       */
      'endDate'?: string;
      /**
       * @example "120ca14-8674-494b-859d-c760f7d1a49e"
       */
      'billId'?: string;
      /**
       * @example "Billed"
       */
      'billStatus'?: string;
      'bill'?: {
            /**
             * @example 100
             */
            'value'?: string;
            /**
             * @example "Euro"
             */
            'currency'?: string;
          } | Record<string, any>;
      'apps'?: {
            /**
             * @example "TextAnalysisApp"
             */
            'appName'?: string;
            /**
             * @example "CDFCA8BA-1DFA-4097-BB48-0D004EE05499"
             */
            'appId'?: string;
            'bill'?: {
                  /**
                   * @example 100
                   */
                  'value'?: string;
                  /**
                   * @example "Euro"
                   */
                  'currency'?: string;
                } | Record<string, any>;
            'ratePlanSubscribed'?: {
                  /**
                   * @example "TextAnalysisProduct"
                   */
                  'productName'?: string;
                  /**
                   * @example "Basic"
                   */
                  'planType'?: string;
                  /**
                   * @example "C22638E5-4A52-4134-B50B-3858527F96C6"
                   */
                  'ratePlanId'?: string;
                  /**
                   * @example "GoldPlan"
                   */
                  'ratePlanName'?: string;
                  'Bill'?: {
                        /**
                         * @example 100
                         */
                        'value'?: string;
                        /**
                         * @example "Euro"
                         */
                        'currency'?: string;
                      } | Record<string, any>;
                } | Record<string, any>;
          } | Record<string, any>;
    } | Record<string, any>;
