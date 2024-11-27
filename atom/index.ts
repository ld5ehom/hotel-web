import { DetailFilterType, FilterProps } from '@/interface'
import { atom } from 'recoil'

// Atom to manage the state of the currently selected detail filter
// 현재 선택된 상세 필터 상태를 관리하는 atom
export const detailFilterState = atom<DetailFilterType | null>({
    key: 'detailFilter', // Unique key for the atom (atom의 고유 키)
    default: null, // Default state is null (기본 상태는 null)
})

// Atom to manage the state of all filters, including location, dates, and guests
// 위치, 날짜, 게스트 수를 포함한 모든 필터 상태를 관리하는 atom
export const filterState = atom<FilterProps>({
    key: 'filter', // Unique key for the atom (atom의 고유 키)
    default: {
        location: '', // Default location is an empty string (기본 위치는 빈 문자열)
        checkIn: '', // Default check-in date is an empty string (기본 체크인 날짜는 빈 문자열)
        checkOut: '', // Default check-out date is an empty string (기본 체크아웃 날짜는 빈 문자열)
        guest: 0, // Default number of guests is 0 (기본 게스트 수는 0)
    },
})
