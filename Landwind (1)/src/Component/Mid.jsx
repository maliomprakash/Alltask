    import React from 'react'
    import { Link } from 'react-router-dom'
    import Chart from './Chart'
    import Chart2 from './Chart2'

    function Mid() {
        return (
            <>
                <section className="bg-gray-50 light:bg-gray-800">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                            <div className="text-gray-500 sm:text-lg light:text-gray-400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 light:text-white">Work with tools you already use</h2>
                                <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>

                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 light:border-gray-700">
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Continuous integration and deployment</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Development workflow</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Knowledge management</span>
                                    </li>
                                </ul>
                                <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                            </div>
                            {/** this is chart
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="../src/assets/images/feature-1.png" alt="dashboard feature image" />
    */}


                            <Chart />

                        </div>

                        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                            <Chart2 />
                            <div className="text-gray-500 sm:text-lg light:text-gray-400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 light:text-white">We invest in the world’s potential</h2>
                                <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>

                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 light:border-gray-700">
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Dynamic reports and dashboards</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Templates for everyone</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Development workflow</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Limitless business automation</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Knowledge management</span>
                                    </li>
                                </ul>
                                <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    export default Mid