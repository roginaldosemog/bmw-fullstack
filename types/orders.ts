export type Order = {
  _id: string
  customer: string
  carModel: string
  pickDate: string
  returnDate: string
  totalValue: number
  createdAt: string
  updatedAt: string
}

export type OrdersRequestProps = {
  orders: Order[]
}
