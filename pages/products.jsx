import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
    return (
        <Layout>
            <Link id='product1' href={'/products/product1'} className="bg-gray-300 text-blue-900 rounded-md p-2">
                Check product
            </Link>
        </Layout>
    )
}