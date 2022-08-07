export type Accountdetails = {
  customerId: number;
  customerName: string;
  accountBalance: number;
  overDraft: boolean;
  BIC: string;
  bankName: string;

  //rating:number;
};
export type Sender= {
  customerId: number,
    accountHolderName: string,
    clearBalance: number,
    overDraft: string
};

