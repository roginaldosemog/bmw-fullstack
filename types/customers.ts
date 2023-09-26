export type Customer = {
  _id: string
  name: string
  email: string
}

export type CustomersRequestProps = {
  customers: Customer[]
}
