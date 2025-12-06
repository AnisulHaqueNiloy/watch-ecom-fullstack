export interface Product {
  _id?: string
  name: string
  description: string
  category: string
  price: number
  image: string
  inStock: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface Order {
  _id?: string
  userId: string
  userName: string
  userEmail: string
  userPhone: string
  userAddress: string
  items: OrderItem[]
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt?: Date
  updatedAt?: Date
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
}
