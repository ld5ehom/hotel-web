/**
 * Footer Bar
 */
export default function Footer() {
    return (
        <footer className="bg-uclaBlue py-2">
            <div className="max-w-screen-xl w-full mx-auto p-4 md:flex md:items-center md:justify-between border-b-lighterBlue border-b">
                <div className="text-sm text-white sm:text-center">
                    {' '}
                    © 2024 Regents of the{' '}
                    <span className="text-uclaGold hover:underline">
                        University of California{' '}
                    </span>{' '}
                </div>
                <ul className="flex flex-wrap gap-4 md:gap-6 items-center text-sm text-white mt-2 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline">
                            Emergency
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Accessibility
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Report Misconduct
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Privacy & Terms of Use
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-[10px] text-white mx-auto p-4 max-w-screen-xl">
                <p>UCLA Housing Services Office</p>
                <p>360 De Neve Drive</p>
                <p>Los Angeles, CA 90095-1383</p>
                <p>Mail Code: 138307</p> <br />
                <p>E-mail: uclahousing@housing.ucla.edu</p>
            </div>
        </footer>
    )
}
