interface BaseOrder {
  carModel: string
  pickDate: string
  returnDate: string
  totalValue: number
}

export interface SendOrder extends BaseOrder {
  customerId: string
}

export interface RequestedOrder extends BaseOrder {
  id: string
  createdAt: string
  updatedAt: string
  customerData: {
    id: string
    name: string
    email: string
  }
}

export type OrdersRequestProps = {
  orders: RequestedOrder[]
}
