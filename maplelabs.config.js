module.exports = {
    title: 'OpenSource @ Maplelabs',
    tagline: 'At MapleLabs we contribute back.',
    favicon: '/images/favicon.png',
    navbarLogo: {
        alt: 'Maple Labs Logo',
        dark: '/images/dark-logo.svg',
        light: '/images/logo.svg',
    },
    //description goes to meta-tag
    description: 'OpenSource @ MapleLabs: Get involved in open source communities, discover projects and learn about MapleLabs opensource program.',
    organizationName: 'MapleLabs',

    projects: [
        {
            //organization name as per github 
            orgsName: 'maplelabs',
            //repositories to include
            include: [], //includes all
            //repositories to exclude
            exclude: [],  //exclude none
        },
        {
            orgsName: 'snappyflow',
            include: ['snappyflow-jenkins-plugin'],
            exclude: [],
        }
    ],

    textInintroSection1: 'Embracing Collabration.',
    textInintroSection2: 'Embracing Open Source.',
    introSectionDescription: "We at MapleLabs believe open source solves real-world problems. We are a passionate, open-minded and focused group of software enthusiasts pushing boundaries with an aim to contribute back to open-source by developing value adding applications, tools, plugins, utilities, etc relevant to company's product/services' offerings.",

    githubUrl: 'https://github.com/maplelabs',

    featuredVideos : [
        {
            videoLink : 'https://www.youtube.com/watch?v=JLmei2IUDm0',
            thumbnail: '/images/videos/Thumbnail1.png',
            title : 'What, Why And How Of Open Source',
        },
    ],

    footerLinkedinUrl: 'https://in.linkedin.com/company/maplelabs-cloud-solutions',
    footerInstagramUrl: 'https://www.instagram.com/maplelabs',
    officeAddress1: '152, Siddhi Vinayak Towers, Sarjapur - Marathahalli Road, Jakkasandra, 1st Block, Koramangala, Bangalore – 560034',
    officeAddress2: '1248 Reamwood Ave, Sunnyvale, CA 94089',
    services: ['Performance Engineering', 'Dev Ops', 'Site Reliability Engineering', 'Implementation Services'],
    discordLink: 'https://discord.gg/XQudKrsmdk',
    privacyPolicy: 'https://www.maplelabs.com/privacy_policy.html',
    termsofUse: 'https://www.maplelabs.com/terms.html',
    cookiePolicy: 'https://www.maplelabs.com/cookies.html'

}