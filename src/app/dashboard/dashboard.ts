export class transaction {
    txnId: number;
    paid: number;
    txnDate: Date;
    txnStatus: String;
    productDetail: productDetail;

}
 export interface productDetail {
     productName: string;
     cost:number;
 }

export class cardDetails {
    cardNumber: number;
    cardType: string;
    validity: Date;
    cardLimit: number;
    userInformation: userInformation;
}

export interface userInformation {
    name:string;
}

