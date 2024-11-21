'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { MdModeOfTravel } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'

import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'

import cn from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/en'

// Dropdown menu items
const menus = [
    { id: 1, title: 'Login', url: '/users/login' }, // 로그인
    { id: 2, title: 'Sign Up', url: '/users/signup' }, // 회원가입
    { id: 3, title: 'FAQ', url: '/faqs' }, // FAQ
]

// Filter types and props /
type DetailFilterType = 'location' | 'checkIn' | 'checkOut' | 'guest'
interface FilterProps {
    location: string
    checkIn: string
    checkOut: string
    guest: number
}

// Main Navbar Component (메인 네비게이션 바 컴포넌트)
export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const [detailFilter, setDetailFilter] = useState<null | DetailFilterType>(
        null,
    )
    const [filterValue, setFilterValue] = useState<FilterProps>({
        location: '',
        checkIn: '',
        checkOut: '',
        guest: 0,
    })
    const router = useRouter()

    return (
        <nav
            className={cn(
                'border border-b-lightestBlue w-full shadow-sm p-4 sm:px-10 flex justify-between items-center align-middle fixed top-0 bg-white',
                {
                    '!h-44': showFilter === true,
                    '!items-start': showFilter === true,
                },
            )}
        >
            {/* Logo section */}
            <div className="grow basis-0 hidden my-auto font-semibold text-lg sm:text-xl text-uclaBlue cursor-pointer sm:flex sm:gap-2">
                <img
                    src="/images/ucla-logo-180.png" // public 폴더 내 경로
                    className="h-10 my-auto" // 필요한 크기 및 스타일 적용
                />
                <div className="my-auto">UCLA Housing</div>
            </div>

            {/* Filter button */}
            {showFilter === false ? (
                <div className="w-full sm:w-[230px] border py-1.5 border-lightestBlue rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2">
                    <div
                        role="presentation"
                        className="flex justify-center gap-1 cursor-pointer"
                        onClick={() => setShowFilter(true)}
                    >
                        <div className="my-auto font-semibold text-sm">
                            Room
                        </div>
                        <RxDividerVertical className="text-lightestBlue my-auto text-2xl" />
                        <div className="my-auto font-semibold text-sm">
                            For guest
                        </div>
                        {/* <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
                        <div className="my-auto font-semibold text-sm">Who</div> */}
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowFilter(true)}
                        className="bg-uclaBlue text-white rounded-full w-8 h-8 my-auto"
                    >
                        <AiOutlineSearch className="text-lg m-auto font-semibold" />
                    </button>
                </div>
            ) : (
                <div className="sm:w-[340px] cursor-pointer w-full relative">
                    <div className="flex justify-center gap-7 h-14 text-center items-center">
                        <button
                            type="button"
                            className="font-semibold underline underline-offset-8"
                        >
                            Room
                        </button>
                        <button
                            type="button"
                            className="text-gray-700"
                            onClick={() => window.alert('Sorry.')}
                        >
                            For Guest
                        </button>
                        {/* <button
                            type="button"
                            className="text-gray-700"
                            onClick={() => window.alert('서비스 준비중입니다.')}
                        >
                            Online Experiences
                        </button> */}
                        <button
                            type="button"
                            className="underline underline-offset-8 text-lighterBlue hover:text-uclaBlue"
                            onClick={() => setShowFilter(false)}
                        >
                            Close
                        </button>
                    </div>
                    <div className="w-[100%] sm:max-w-4xl flex flex-col sm:flex-row border border-lightestBlue rounded-lg py-4 sm:py-2 sm:rounded-full shadow-sm bg-white hover:shadow-lg cursor-pointer justify-between fixed top-20 inset-x-0 mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-4 w-full relative sm:pl-2">
                            {/* where filter button */}
                            <button
                                type="button"
                                onClick={() => setDetailFilter('location')}
                                className={cn(
                                    'w-[190px] font-semibold text-sm rounded-full hover:bg-lightestBlue py-3 px-6 text-left',
                                    {
                                        'shadow bg-white':
                                            detailFilter === 'location',
                                    },
                                )}
                            >
                                Where
                                <div className="text-lighterBlue text-xs">
                                    {filterValue?.location ||
                                        'Search destinations'}
                                </div>
                            </button>

                            {/* Check in */}
                            <button
                                type="button"
                                onClick={() => setDetailFilter('checkIn')}
                                className={cn(
                                    'font-semibold text-sm rounded-full hover:bg-lightestBlue py-3 px-6 text-center',
                                    {
                                        'shadow bg-white':
                                            detailFilter === 'checkIn',
                                    },
                                )}
                            >
                                Check in
                                <div className="text-lighterBlue text-xs">
                                    {filterValue?.checkIn || 'Add dates'}
                                </div>
                            </button>

                            {/* Check out */}
                            <button
                                type="button"
                                onClick={() => setDetailFilter('checkOut')}
                                className={cn(
                                    'font-semibold text-sm rounded-full hover:bg-lightestBlue py-3 px-6 text-center',
                                    {
                                        'shadow bg-white':
                                            detailFilter === 'checkOut',
                                    },
                                )}
                            >
                                Check out
                                <div className="text-lighterBlue text-xs">
                                    {filterValue?.checkOut || 'Add dates'}
                                </div>
                            </button>

                            {/* Who */}
                            <button
                                type="button"
                                onClick={() => setDetailFilter('guest')}
                                className={cn(
                                    'font-semibold text-sm rounded-full hover:bg-lightestBlue py-3 px-6 text-center',
                                    {
                                        'shadow bg-white':
                                            detailFilter === 'guest',
                                    },
                                )}
                            >
                                Who
                                <div className="text-lighterBlue text-xs">
                                    {`${filterValue?.guest} guests` ||
                                        'Add guests'}
                                </div>
                            </button>
                            {detailFilter === 'location' && (
                                <LocationFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                            {detailFilter === 'checkIn' && (
                                <CheckInFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                            {detailFilter === 'checkOut' && (
                                <CheckOutFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                            {detailFilter === 'guest' && (
                                <GuestFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                        </div>

                        {/* Filter bar */}
                        <button
                            type="button"
                            className="bg-uclaBlue text-white rounded-full h-10 mx-4 sm:w-24 my-auto flex justify-center gap-1 px-3 py-2 hover:shadow hover:bg-darkerBlue"
                            onClick={() => {
                                setShowFilter(false)
                                setDetailFilter(null)
                            }}
                        >
                            <AiOutlineSearch className="font-semibold text-xl my-auto" />
                            <div className="my-auto">Search</div>
                        </button>
                    </div>
                </div>
            )}

            {/* Right-Side User actions and dropdown menu */}
            <div className="grow basis-0 hidden sm:flex gap-4 align-middle justify-end relative">
                {/* Your room Button */}
                <button
                    type="button"
                    className="font-semibold text-sm my-auto px-4 py-3 rounded-full hover:bg-lightestBlue"
                >
                    Your room
                </button>

                {/* User actions and dropdown menu  */}
                <button
                    type="button"
                    onClick={() => setShowMenu((val) => !val)}
                    className="flex align-middle gap-3 rounded-full border border-uclaBlue shadow-sm px-4 py-3 my-auto hover:shadow-lg"
                >
                    <AiOutlineMenu />
                    <AiOutlineUser />
                </button>

                {showMenu && (
                    <div className="border border-uclaBlue shadow-lg py-2 flex flex-col absolute top-12 bg-white w-60 rounded-lg">
                        {menus?.map((menu) => (
                            <button
                                type="button"
                                key={menu.id}
                                className="h-10 hover:bg-gray-50 pl-3 text-sm text-gray-700 text-left"
                                onClick={() => router.push(menu.url)}
                            >
                                {menu.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

interface FilterComponentProps {
    filterValue: FilterProps
    setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>
    setDetailFilter: React.Dispatch<
        React.SetStateAction<DetailFilterType | null>
    >
}

const LocationFilter = ({
    filterValue,
    setFilterValue,
    setDetailFilter,
}: FilterComponentProps) => {
    return (
        <div className="absolute top-80 sm:top-[70px] border border-lightestBlue px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            {/* Search by name */}
            <div className="text-base font-semibold">Search by name</div>
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
                            setDetailFilter('checkIn')
                        }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    )
}

// Set Check-in Date
const CheckInFilter = ({
    filterValue,
    setFilterValue,
    setDetailFilter,
}: FilterComponentProps) => {
    return (
        <div className="absolute top-80 sm:top-[70px] border border-lightestBlue px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            <div className="text-base font-semibold">Set Check-in Date</div>
            <input
                type="date"
                className="mt-4 border border-lightestBlue py-3 px-2.5 rounded-lg"
                defaultValue={filterValue.checkIn}
                min={dayjs().format('YYYY-MM-DD')}
                onChange={(e) => {
                    setFilterValue({ ...filterValue, checkIn: e.target.value })
                    setDetailFilter('checkOut')
                }}
            />
        </div>
    )
}

// Set Check-out Date
const CheckOutFilter = ({
    filterValue,
    setFilterValue,
    setDetailFilter,
}: FilterComponentProps) => {
    return (
        <div className="absolute top-80 sm:top-[70px] border border-lightestblue px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            <div className="text-base font-semibold">Set Check-out Date</div>
            <input
                type="date"
                className="mt-4 border border-lightestBlue py-3 px-2.5 rounded-lg"
                defaultValue={filterValue.checkOut}
                min={dayjs(filterValue.checkIn)
                    .add(1, 'day')
                    .format('YYYY-MM-DD')}
                onChange={(e) => {
                    setFilterValue({ ...filterValue, checkOut: e.target.value })
                    setDetailFilter('guest')
                }}
            />
        </div>
    )
}

// Who Guest Filter bar
const GuestFilter = ({
    filterValue,
    setFilterValue,
    setDetailFilter,
}: FilterComponentProps) => {
    const [counter, setCounter] = useState<number>(filterValue.guest || 0)

    return (
        <div className="absolute top-80 sm:top-[70px] border border-lightestblue px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            <div className="text-base font-semibold">Add Number of Guests</div>
            <div className="mt-4 border border-lightestBlue rounded-lg py-2 px-4 flex justify-between items-center">
                <div>
                    <div className="text-lighterBlue text-xs">
                        Please enter the number of guests
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-center">
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
                                'text-gray-200': counter <= 0,
                            })}
                        />
                    </button>
                    <div className="w-3 text-center">{counter}</div>
                    <button
                        type="button"
                        className="rounded-full w-8 h-8 disabled:border-lightestBlue hover:border-black"
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
                                'text-gray-200': counter >= 20,
                            })}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
