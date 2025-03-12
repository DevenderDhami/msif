interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    subItems?: NavigationItem[]; // Optional sub-navigation items
}

export const NavMenu: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About us', href: '', current: false, subItems: [
        { name: `Chairman's Message`, href: '/chairman-message', current: false },
        { name: 'Our Team', href: '/our-team', current: false },
        { name: 'About Eupraxis', href: '/about-us', current: false }
    ] },
    { name: 'Our services', href: '', current: false, subItems: [
        { name: `Projects`, href: '/our-projects', current: false },
        { name: 'Our Expertise', href: '/our-expertise', current: false },
    ] },
    { name: 'Our Recognitions', href: '', current: false, subItems: [
        { name: `Industry Tie ups`, href: '/approvals-and-collabrations/industry-tie-ups', current: false },
        { name: `Government Partnership`, href: '/approvals-and-collabrations/government-partnership', current: false },
        { name: `Placement Tie ups`, href: '/approvals-and-collabrations/placement-tie-ups', current: false },
        { name: `Approvals`, href: '/approvals-and-collabrations/approvals', current: false },
    ] },
    { name: 'Contact Us', href: '/contact-us', current: false },
];
