# UCLA House Website (Frontend)

## Project Overview

-   Utilized : TypeScript, Next.js, React Query, tailwindCSS, Supabase, Prisma, Recoil, Storybook, Cypress, Vercel

---

## Reference Site

-   [Next.js Docs](https://nextjs.org/docs)
-   [Design System](https://primer.style/components)
-   [tailwindcss](https://tailwindcss.com/docs)
-   [storybook](https://storybook.js.org/)
-   [Google material Symbol](https://fonts.google.com/iconss)
-   [Day.js](https://day.js.org/docs/en/installation/installation)
-   [Scroll-lock](https://www.npmjs.com/package/scroll-lock)
-   [Faker.js](https://fakerjs.dev/guide/)
-   [Intersection Observer Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
-   [Supabase](https://supabase.com/)
-   [Prisma](https://prisma.io/docs)
-   [React-icons](https://react-icons.github.io/react-icons/)
-   [Classnames](https://www.npmjs.com/package/classnames/)
-   [Recoil](https://www.recoiljs.org/ko)

---

## Milestones

-   M1 : App Basic Functionality Development
-   M2 : Advanced Features and Testing

---

## Task List

### Milestone 1 : App Basic Functionality Development

**Task 1. Common Layout**

-   **Issues** : [task-1-layout](https://github.com/ld5ehom/house-web/tree/task-1-layout)
-   **Details** :
    -   **Commom Layout**
        -   Created a shared layout for the Navbar and Footer using Tailwind CSS for consistent styling across the application.
            ```
            yarn add react-icons
            ```

**Task 2: Main Page**

-   **Issues** : [task-2-main](https://github.com/ld5ehom/house-web/tree/task-2-main)
-   **Details** :
    -   **Main Page Search Filter** [669bedf](https://github.com/ld5ehom/house-web/commit/669bedfbaf1fe8905904dbe948e2dab1a8a11295)
        -   Implemented a dynamic search filter on the main page to allow users to search by location, check-in and check-out dates, and the number of guests.
        -   Incorporated Day.js to handle date selection and formatting, adhering to the MM/DD/YYYY format for US standards.
            ```
            yarn add classnames dayjs
            ```
    -   **Search Filter Update**
        -   Implemented a calendar component for check-in and check-out using React-Calendar.
            ```
            yarn add react-calendar
            ```
        -   Recoil: Recoil has been integrated to manage the global state for filters, enabling efficient and seamless state management. It allows the application to maintain a synchronized state for filters, including location, check-in date, check-out date, and the number of guests.
            ```
            yarn add recoil
            ```

**Task 3: Map Page**

**Task 4: Details Page**

### Milestone 2 : Advanced Features and Testing

**Task 5: Implement User Authentication**

**Task 6: Favorite and Comment Features**

**Task 7: Booking Feature**

**Task 8: Payment Feature**

**Task 9: Accommodation Registration Feature**

**Task 10: Search Feature**

**Task 11: Apply E2E Testing**

### Milestone 3 : Deployment and Post-Release Updates

**Task 12: Deploy the App**

**Task 13: Post-Release Updates**

---

## Start

```

yarn install

```

```

yarn dev

```

```

yarn storybook

```

-   **storybook start**:

```

npm run storybook

```

---

## Setup

-   **Homebrew (macOS terminal)**:

```

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

-   **git (homebrew)**:

```

brew install git

```

-   **node.js (homebrew)**:

```

brew install node

```

-   **ESLint**:

```

yarn add eslint --dev
npx eslint --init
yarn lint
yarn lint --quiet

```

-   **Prettier**:

```

yarn add --dev --exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
yarn prettier . --write

```

```

yarn add eslint-config-prettier eslint-plugin-prettier --dev

```

-   **Prisma**:

```

yarn add --dev prisma ts-node

```

```

npx prisma init

```

```

yarn add @prisma/client

```

```

npx prisma migrate dev

```

-   **Classnames**:

```

yarn add classnames

```

```

```
