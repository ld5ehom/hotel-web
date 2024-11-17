'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'

/**
 * Header Bar
 * Menu items for the user dropdown menu (사용자 드롭다운 메뉴의 항목들)
 */

// mapping
const menus = [
    { id: 1, title: 'Login', url: '/users/login' }, // 로그인
    { id: 2, title: 'Sign Up', url: '/users/signup' }, // 회원가입
    { id: 3, title: 'FAQ', url: '/faqs' }, // FAQ
]

export default function Navbar() {
    // State to toggle menu visibility (메뉴 표시 여부를 제어하는 상태)
    const [showMenu, setShowMenu] = useState(false)

    // Router for navigation (내비게이션을 위한 라우터)
    const router = useRouter()

    return (
        <nav className="h-20 border border-b-gray-20 w-full shadow-sm p-4 sm:px-10 flex justify-between align-center fixed top-0 bg-lightestBlue">
            {/* Logo section */}
            <div className="grow basis-0 hidden my-auto font-semibold text-lg sm:text-xl text-uclaBlue cursor-pointer sm:flex sm:gap-2">
                <img
                    src="/images/ucla-logo-180.png" // public 폴더 내 경로
                    className="h-10 my-auto" // 필요한 크기 및 스타일 적용
                />
                <div className="my-auto">UCLA Housing</div>
            </div>

            {/* Center Search bar */}
            <div className="w-full sm:w-[280px] border border-uclaBlue rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-10 pr-2">
                <div className="flex justify-center gap-1">
                    <div className="my-auto font-semibold text-sm">where</div>{' '}
                    <RxDividerVertical className="text-uclaBlue my-auto text-2xl" />
                    <div className="my-auto font-semibold text-sm">Date</div>{' '}
                    <RxDividerVertical className="text-uclaBlue my-auto text-2xl" />
                    <div className="my-auto font-semibold text-sm">Who</div>{' '}
                </div>
                <button
                    type="button"
                    className="bg-uclaBlue text-white rounded-full w-8 h-8 my-auto"
                >
                    <AiOutlineSearch className="text-lg m-auto font-semibold" />
                </button>
            </div>

            {/* Right-Side User actions and dropdown menu */}
            <div className="grow basis-0 hidden sm:flex gap-4 align-middle my-auto justify-end relative">
                <button
                    type="button"
                    className="font-semibold text-sm my-auto px-4 py-3 rounded-full hover:bg-lighterBlue"
                >
                    Your House
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
                                className="h-10 hover:bg-lightestBlue pl-5 text-sm text-darkestBlue text-left"
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
