import React from 'react'
import styles from './style'

const App = () => {
  return (
    <html class="antialiased [font-feature-settings:'ss01'] js-focus-visible dark" lang="en" data-theme="dark" data-js-focus-visible="">
      <header class="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-transparent"/>
      <footer class="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
        <div class="relative text-center text-sm text-slate-600">
          <p>Copyright © 2022 Team Ehrenlos</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </html>
  )
}

export default App