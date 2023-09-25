export type Customer = {
  _id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export type CustomersRequestProps = {
  customers: Customer[]
}
