import { useRouter } from "next/router";

function PortfolioIdPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>Portfolio ID Page - { router.query.id }</h1>
        </div>
    );
}

export default PortfolioIdPage;