/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'Billingerror' schema.
     */
    export type Billingerror = {
      /**
       * Error code
       */
      'code'?: string;
      'message'?: {
            /**
             * Language code of the error mesage
             */
            'lang'?: string;
            /**
             * Detailed error message
             */
            'value'?: string;
          } | Record<string, any>;
    } | Record<string, any>;
