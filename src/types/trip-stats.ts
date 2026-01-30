export interface TripStats {
    byCategory: { categoryName: string; total: number; color: string }[];
    byDay: { date: string; total: number }[];
    byMember: { memberName: string; total: number; percentage: number }[];
}