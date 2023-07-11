import dynamic from 'next/dynamic';
import React from 'react'

//components imports dynamically to increase page initial loading speed and FCP
const DynamicGlobalBar = dynamic(() => import('../app/components/GlobalBar/globalBar'), {
    loading: () => <></>,
    ssr: false,

});
const DynamicNavBar = dynamic(() => import('../app/components/NavBar/navbar'), {
    loading: () => <></>,
    ssr: false,

});
const DynamicProgramSection = dynamic(() => import('../app/components/ProgramSection/ProgramSection'), {
    loading: () => <></>,
    ssr: false,

});
const DynamicFooter = dynamic(() => import('../app/components/Footer/index'), {
    loading: () => <></>,
    ssr: false,

});
const Home = () => {
    return (
        <>
            <DynamicGlobalBar />
            <DynamicNavBar />
            <DynamicProgramSection />
            <DynamicFooter />
        </>
    )
}
//for pages,we can use several methods of next js page rendering
// ---> get server-side render
// ---> static-site generation
// ---> incremental static site generation

// this is a static page that's why we are using static site generation
export async function getStaticProps() {
    return {
        props: {},
    }
}
export default Home;