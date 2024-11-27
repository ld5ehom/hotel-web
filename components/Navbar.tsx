'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'

import Image from 'next/image'
import cn from 'classnames'

import { DetailFilterType, FilterProps } from '@/interface' // Search bar Filter types and props
import Link from 'next/link'
import { SearchFilter } from './Filter'
import { useRecoilState, useRecoilValue } from 'recoil'
import { detailFilterState, filterState } from '@/atom'

// Right Side Dropdown menu items
const menus = [
    { id: 1, title: 'Login', url: '/users/login' }, // 로그인
    { id: 2, title: 'Sign Up', url: '/users/signup' }, // 회원가입
    { id: 3, title: 'FAQ', url: '/faqs' }, // FAQ
]

// Main Navbar Component (메인 네비게이션 바 컴포넌트)
export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState)
    const filterValue = useRecoilValue(filterState)

    const router = useRouter()

    return (
        <nav
            className={cn(
                'border border-b-lightestBlue w-full shadow-sm p-4 sm:px-10 flex justify-between items-center align-middle fixed top-0 bg-white',
                {
                    '!h-44': showFilter === true, // Change to h-44 when the filter is clicked (필터가 클릭되었을 때 h-44로 변경)
                    '!items-start': showFilter === true, // Change layout to top alignment (상단 정렬로 레이아웃 변경)
                },
            )}
        >
            {/* Logo section */}
            <div className="grow basis-0 hidden my-auto font-semibold text-md sm:text-xl text-uclaBlue cursor-pointer sm:flex sm:gap-2">
                <Link href="/" className="my-auto flex items-center gap-2">
                    {/* LOGO Image */}
                    <Image
                        src="/images/ucla-logo-180.png" // public 폴더 내 경로
                        alt="UCLA Logo"
                        className="mx-4" // 고정된 크기로 설정
                        width={50}
                        height={50}
                    />
                    <div>
                        UCLA <br />
                        Housing
                    </div>
                </Link>
            </div>

            {/* Search Bar Filter effect*/}
            {showFilter === false ? (
                <div className="w-[230px] sm:w-[230px] border py-1.5 border-lightestBlue rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2 mx-auto">
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
                // Search bar Top (after click)
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
                            className="text-black"
                            onClick={() => window.alert('Sorry.')}
                        >
                            For guest
                        </button>
                        <button
                            type="button"
                            className="underline underline-offset-8 text-uclaBlue hover:text-darkestBlue"
                            onClick={() => setShowFilter(false)}
                        >
                            Close
                        </button>
                    </div>

                    {/* Search filter buttom bar (after click) */}
                    <div className="w-[100%] sm:max-w-4xl flex flex-col sm:flex-row border border-lightestBlue rounded-lg py-4 sm:py-2 sm:rounded-full shadow-sm bg-white hover:shadow-lg cursor-pointer justify-between fixed top-20 inset-x-0 mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-4 w-full relative sm:pl-2">
                            {/* where filter button */}
                            <button
                                type="button"
                                onClick={() => setDetailFilter('location')}
                                className={cn(
                                    ' font-semibold text-sm rounded-full hover:bg-lightestBlue py-3 px-6 text-center',
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

                            {/* Check in filter button*/}
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

                            {/* Check out filter button*/}
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

                            {/* Who Button*/}
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
                                    {`${filterValue?.guest} roommates` ||
                                        'Add guests'}
                                </div>
                            </button>

                            <SearchFilter />
                        </div>

                        {/* Filter bar Search Button */}
                        <button
                            type="button"
                            className="bg-uclaBlue text-white rounded-full h-10 mx-4 sm:w-24  sm:mt-2 my-auto flex justify-center items-center gap-1 px-3 py-2 hover:shadow hover:bg-darkerBlue"
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
