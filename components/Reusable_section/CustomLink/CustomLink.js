import Link from 'next/link';
import { useRouter } from 'next/router';

const removeSlugFromQueryParams = (queryParams) => {
    const { slug, ...filteredParams } = queryParams;
    return filteredParams;
};

const CustomLink = (props) => {
    const router = useRouter();
    let queryParams = removeSlugFromQueryParams(router.query);
    const { href, children, ...rest } = props;

    return (
        <Link href={{ pathname: href, query: { ...queryParams } }} {...rest}>
            {children}
        </Link>
    );
};

export default CustomLink;
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const removeSlugFromQueryParams = (queryParams) => {
//     const { slug, ...filteredParams } = queryParams;
//     return filteredParams;
// };

// const CustomLink = (props) => {
//     const router = useRouter();
//     const { href, children, ...rest } = props;

//     // Filter queryParams
//     let queryParams = removeSlugFromQueryParams(router.query);

//     // Remove `tab` unless going to /faqs
//     const isFaqsPage = typeof href === 'string' ? href.startsWith('/faqs') : href?.pathname?.startsWith('/faqs');

//     if (!isFaqsPage && queryParams.tab) {
//         const { tab, ...restParams } = queryParams;
//         queryParams = restParams;
//     }

//     return (
//         <Link href={{ pathname: href, query: { ...queryParams } }} {...rest}>
//             {children}
//         </Link>
//     );
// };

// export default CustomLink;
