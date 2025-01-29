import { createClient } from "next-sanity";


const clinet = createClient ({
    projectId: "kq9j16ul",
    dataset: "production",
    useCdn : true,
    apiVersion: "2023-10-10",

})
export async function sanityFetch ({query, params = {}}: { query: string, params?: any }) {
    return await clinet.fetch(query, params);
}