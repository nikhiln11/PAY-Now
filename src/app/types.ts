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
export class Payment{
  amountSent: number=0;
  senderName : any="No name";
  receiverName:any="No rec";
  payTime!: string;
  senderId: number=0;
  messageCode!: string;
  transferTypes!:string;
  receiverId! : string ;
};
export class Transaction {

	transactionId!: string;
	senderName!: string;
	receiverName!: string;
	messageCode!: string;
	senderId!: number;
	amountSent!: number;
	paymentStatus!: string;
	receiverId!: number;
	senderAmountleft!: number;
	paymentTime!: string;
	transferType!: string;
};
