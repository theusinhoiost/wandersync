import { LucideIcon } from "lucide-react"

type BaseGraphItem = {
  value: number
  color: string
  icon: LucideIcon
  additional?: null
}

export type GraphsSpendByCategory = Array<
  BaseGraphItem & {
    title: "Gastos por categoria"
    category: string
  }
>

export type GraphsSpendByDay = Array<
  BaseGraphItem & {
    title: "Gastos por dias"
    category: string
    data: {
      dayNumber: number
      dayName: string
      value: number
    }
  }
>

export type GraphsSpendByMember = Array<
  BaseGraphItem & {
    title: "Contribuição por membros"
    name: string
  }
>
