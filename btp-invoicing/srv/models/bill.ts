export interface IBill {
    billDetails: IBillDetails;
    billGeneratedAt: Date;
    billGeneratedBy: string;
    billId: string;
    currency: string;
    description: null;
    emailId: null;
    entityId: string;
    entityName: string;
    entityType: string;
    firstName: null;
    fromDate: Date;
    isoffboarded: boolean;
    lastName: null;
    offboardedDate: null;
    status: string;
    toDate: Date;
    total: number;
}

interface IBillDetails {
    developerId: string;
    developerName: string;
    startDate: string;
    endDate: string;
    bill: IBillClass;
    apps: IApp[];
    firstName: string;
    lastName: string;
    emailId: string;
}

interface IApp {
    appName: string;
    appId: string;
    bill: IBillClass;
    ratePlanSubscribed: Array<IRatePlanSubscribed[]>;
}

interface IBillClass {
    value: number;
    currency: string;
}

interface IRatePlanSubscribed {
    productName: string;
    planType: string;
    ratePlanId: string;
    ratePlanName: string;
    bill: IBillClass;
    calls: number;
}
