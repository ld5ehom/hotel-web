import { ReactNode } from 'react'

export type DetailFilterType = 'location' | 'checkIn' | 'checkOut' | 'guest'

export interface FilterProps {
    location: string
    checkIn: string
    checkOut: string
    guest: number
}

// Filter Values
export interface FilterComponentProps {
    filterValue: FilterProps
    setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>
    setDetailFilter: React.Dispatch<
        React.SetStateAction<DetailFilterType | null>
    >
}

export interface FilterLayoutProps {
    title: string
    children: ReactNode
    isShow: boolean
}
