export class IDatasets {
    label: string;
    backgroundColor: string;
    borderColor: string;
    data: number[];
}

export class IChartData {
    labels: string[];
    datasets: IDatasets[];

}

export class IPolicyList {
    message: string;
    statusCode: number;
    policies: IPolicyItem[];
}

export class IPolicyItem {
    policyId: number;
    policyName: string;
    policyMinAge: number;
    policyMaxAge: number;
    policyMinTerm: number;
    policyMaxTerm: number;
    policyMinPremium: number;
    minSumAssured: number;
    policyTerm: string;
}
export class IPolicyInput {
    policyHolderName: string;
    gender: string;
    age: number;
    mobileNumber: number;
    policyId?: number;
}

export class IResponse {
    message: string;
    statusCode: string;
}

export class IPolicyTrendItem {
    count: number;
    percentage: number;
    policyName: string;
    policyId: number;
}

export class IPolicyTrendList {
    message: string;
    statusCode: string;
}

export class IRegister {
    name: string;
    userName: string;
    salary: string;
    mobileNumber: number;
    dob: Date;
    address: string;
}

export class ILogin {
    userName: string;
    password: string;
}
export class ILoginOutput {
    userId: number;
    name: string;
    message: string;
    statusCode: number;
}

export class ICardDetails {
    card_number: number;
    limit: number;
    balance: number;
    expiry_date: number;
}

export interface IProducts {
    productSku?: string;
    name: string;
    description: string;
    availableQty: number;
    price: number;
    productCategory?: string;
    productId?: number;

}

export interface ICartProduct {
    cartItemId?: number;
    productId: number;
    userId: number;
    productQtyOrder: number;
    productTotalPrice: number;
    productName: string;
    productImg: string;
    dateOrdered: string;
    productDescription: string;
    id?: number;
}

export class IPaymentBuy {
    cardNumber: number;
    cvvNumber: number;
    expiryDate: string;
    otp: number;
    userId: number;
    products: IProductBuy[];
}

export class IProductBuy {
    productId: number;
    productPrice: number;
    availableQty: number;
}
export class IRegisterOutput {
    userResponseDto: IUser;
    message: string;
    statusCode: number;
}

export class IUser {
    userId: number;
    userName: string;
    password: string;

}

export class IProductBuyOutput {
    message: string;
    statusCode: string;
}

export class IProductOutput {
    message: string;
    statusCode: number;
    productDtos: IProducts[];
}

export class IOtp {
    otpValue: number;
    date: Date;
}

export class ITransactionResponse {
    message: string;
    statusCode: string;
    transactionListResponseDto: ITransactionLIst[];
    transactionsDto?: string[];
}

export class ITransactionLIst {
    transactionId: number;
    amount: number;
    date: Date;
    status: string;
    description: string;
}

export class ITransactionFilter {
    month: number;
    year: number;
}

export class ICreditCard {
    cardId: number;
    cardNumber: number;
    cardlimit: number;
    balance: number;
    ccv: number;
    expiryDate: string;


}

