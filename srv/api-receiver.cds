using {apim_metadata as external} from './external/apim_metadata';

@path : '/apiReceiver'
@cds.persistence.skip
service ApiReceiver {
    entity dataObject {
        resourceUri : String;
    }

    entity NewApi {
        specversion     : String;
        source          : String;
        type            : String;
        id              : String;
        datacontenttype : String;
        subject         : String;
        time            : String;
        data            : Composition of one dataObject @Core.Computed : false;
    };

    entity APIProducts        as
        select from external.APIProducts {
            *,
            apiProxies
        };

    entity APIProxies         as
        select from external.APIProxies {
            *,
            apiProducts,
            proxyEndPoints,
            targetEndPoints
        };

    entity APITargetEndPoints as
        select from external.APITargetEndPoints {
            *,
            apiProxy
        };

    entity APIProxyEndPoints  as
        select from external.APIProxyEndPoints {
            *,
            apiProxy
        };

    entity APIResources       as
        select from external.APIResources {
            *,
            documentations
        };

    entity Documentations     as
        select from external.Documentations {
            *
        };
}
