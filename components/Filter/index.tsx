import cn from 'classnames'
import Calendar from 'react-calendar'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import { useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'
import { detailFilterState, filterState } from '@/atom'
import FilterLayout from './layout'

// Search Filter Component (전체 필터 컴포넌트를 통합하여 보여줍니다.)
export const SearchFilter = () => {
    return (
        <>
            <LocationFilter />
            <CheckInFilter />
            <CheckOutFilter />
            <GuestFilter />
        </>
    )
}

// Location Filter Component
// - Allows users to select a dormitory or housing option by name.
// - 유저가 기숙사 이름으로 필터링하여 검색할 수 있도록 합니다.
const LocationFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState)
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState)

    return (
        <FilterLayout
            title="Search by name" // Title of the filter (필터 제목)
            isShow={detailFilter === 'location'} // Only visible when "location" filter is active (location 필터가 활성화된 경우에만 표시)
        >
            <div className="flex flex-wrap gap-4 mt-4">
                {[
                    'De Neve Plaza',
                    'Dykstra Hall',
                    'Hedrick Court',
                    'Olympic Hall',
                    'Rieber Court',
                    'Sproul Plaza',
                    'Sunset Village',
                ]?.map((value) => (
                    <button
                        key={value}
                        type="button"
                        className={cn(
                            'border border-lightestBlue rounded-lg px-5 py-2.5 hover:bg-lightestBlue focus:bg-uclaBlue',
                            {
                                'bg-uclaBlue text-white':
                                    filterValue.location === value,
                            },
                        )}
                        onClick={() => {
                            setFilterValue({
                                ...filterValue,
                                location: value,
                            })
                            setDetailFilter('checkIn') // Move to Check-In filter (Check-In 필터로 이동)
                        }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </FilterLayout>
    )
}

// Check-In Filter Component
// - Allows users to set a check-in date using a calendar.
// - 캘린더를 사용하여 체크인 날짜를 설정할 수 있습니다.
const CheckInFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState)
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState)

    // Calendar value handler (캘린더 값 핸들러)
    const onChange = (e: any) => {
        setFilterValue({
            ...filterValue,
            checkIn: dayjs(e).format('YYYY-MM-DD'), // Format date to "YYYY-MM-DD" (날짜 형식을 "YYYY-MM-DD"로 설정)
        })
        setDetailFilter('checkOut') // Move to Check-Out filter (Check-Out 필터로 이동)
    }

    return (
        <FilterLayout
            title="Set Check-in Date" // Title of the filter (필터 제목)
            isShow={detailFilter === 'checkIn'} // Only visible when "checkIn" filter is active (checkIn 필터가 활성화된 경우에만 표시)
        >
            <Calendar
                className="mt-8 mx-auto"
                onChange={onChange}
                minDate={new Date()} // Prevent past date selection (지난 날짜 선택 방지)
                defaultValue={
                    filterValue.checkIn ? new Date(filterValue.checkIn) : null
                }
                formatDay={(locale, date) => dayjs(date).format('DD')} // Display only the day in the calendar (캘린더에 날짜만 표시)
            />
        </FilterLayout>
    )
}

// Check-Out Filter Component
// - Allows users to set a check-out date using a calendar.
// - 캘린더를 사용하여 체크아웃 날짜를 설정할 수 있습니다.
const CheckOutFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState)
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState)

    // Calendar value handler (캘린더 값 핸들러)
    const onChange = (e: any) => {
        setFilterValue({
            ...filterValue,
            checkOut: dayjs(e).format('YYYY-MM-DD'), // Format date to "YYYY-MM-DD" (날짜 형식을 "YYYY-MM-DD"로 설정)
        })
        setDetailFilter('guest') // Move to Guest filter (Guest 필터로 이동)
    }

    return (
        <FilterLayout
            title="Set Check-out Date" // Title of the filter (필터 제목)
            isShow={detailFilter === 'checkOut'} // Only visible when "checkOut" filter is active (checkOut 필터가 활성화된 경우에만 표시)
        >
            <Calendar
                className="mt-8 mx-auto"
                onChange={onChange}
                minDate={
                    filterValue.checkIn
                        ? new Date(filterValue.checkIn) // Prevent earlier dates than check-in (체크인 날짜 이전 날짜 선택 방지)
                        : new Date()
                }
                defaultValue={
                    filterValue.checkOut ? new Date(filterValue.checkOut) : null
                }
                formatDay={(locale, date) => dayjs(date).format('DD')} // Display only the day in the calendar (캘린더에 날짜만 표시)
            />
        </FilterLayout>
    )
}

// Guest Filter Component
// - Allows users to specify the number of roommates.
// - 룸메이트 수를 설정할 수 있습니다.
const GuestFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState)
    const detailFilter = useRecoilValue(detailFilterState)

    const [counter, setCounter] = useState<number>(filterValue.guest || 0)

    return (
        <FilterLayout
            title="Add Number of Roommates" // Title of the filter (필터 제목)
            isShow={detailFilter === 'guest'} // Only visible when "guest" filter is active (guest 필터가 활성화된 경우에만 표시)
        >
            <div className="mt-4 border border-gray-200 rounded-lg py-2 px-4 flex justify-between items-center">
                <div>
                    <div className="text-lighterBlue text-xs">
                        Please enter the number of roommates (룸메이트 수를
                        입력하세요)
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    {/* Decrease roommate count (룸메이트 수 감소) */}
                    <button
                        type="button"
                        className="rounded-full w-8 h-8 disabled:border-lightestBlue hover:border-black"
                        disabled={counter <= 0}
                        onClick={() => {
                            setCounter((val) => val - 1)
                            setFilterValue({
                                ...filterValue,
                                guest: counter - 1,
                            })
                        }}
                    >
                        <AiOutlineMinusCircle
                            className={cn('m-auto', {
                                'text-gray-200': counter <= 0, // Disable when counter is 0 (카운터가 0일 때 비활성화)
                            })}
                        />
                    </button>
                    <div className="w-3 text-center">{counter}</div>
                    {/* Increase roommate count (룸메이트 수 증가) */}
                    <button
                        type="button"
                        className="rounded-full w-8 h-8 disabled:border-gray-200 hover:border-black"
                        disabled={counter >= 20}
                        onClick={() => {
                            setCounter((val) => val + 1)
                            setFilterValue({
                                ...filterValue,
                                guest: counter + 1,
                            })
                        }}
                    >
                        <AiOutlinePlusCircle
                            className={cn('m-auto', {
                                'text-gray-200': counter >= 20, // Disable when counter reaches 20 (카운터가 20에 도달하면 비활성화)
                            })}
                        />
                    </button>
                </div>
            </div>
        </FilterLayout>
    )
}
