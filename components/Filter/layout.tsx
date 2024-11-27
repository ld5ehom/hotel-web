import { FilterLayoutProps } from '@/interface'
import cn from 'classnames'

/**
 * Search by name ... etc ... Filter layout
 */
export default function FilterLayout({
    children,
    title,
    isShow,
}: FilterLayoutProps) {
    return (
        <div
            className={cn(
                'absolute top-80 sm:top-[70px] border border-lightestBlue px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl md:w-[780px] sm:w-[640px] rounded-xl',
                {
                    hidden: !isShow,
                },
            )}
        >
            <div className="text-sm font-semibold">{title}</div>
            {children}
        </div>
    )
}
