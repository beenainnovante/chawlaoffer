import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../site-header";
import { catalogue, enquiryUrl } from "../../catalogue";

export function generateStaticParams() { return catalogue.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
 const {slug}=await params;const product=catalogue.find(item=>item.slug===slug);
 return {title:product ? `${product.name} | Chawla Plywood` : "Product not found", description:product?.description};
}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params;const product=catalogue.find(item=>item.slug===slug);if(!product)notFound();
 return <div className="native-site"><SiteHeader/><main><div className="native-section native-product-main"><nav className="native-breadcrumb" aria-label="Breadcrumb"><Link href="/#home">Christmas offer</Link><span>/</span><Link href="/about#products">Products</Link><span>/</span><span>{product.name}</span></nav><section className="native-product-hero"><div className="native-product-photo"><Image src={product.image} alt={`${product.name} — Chawla Plywood product range`} fill sizes="(max-width:700px) 90vw, 50vw" priority/></div><div><p className="eyebrow">{product.eyebrow}</p><h1>{product.name}</h1><p className="native-lead">{product.description}</p><ul className="native-features">{product.options.map(option=><li key={option}>✓ <span>{option}</span></li>)}</ul><a className="gold-button" href={enquiryUrl(product.name)} target="_blank" rel="noopener noreferrer">Enquire about {product.name.toLowerCase()} ↗</a><p className="native-availability">Ask our team for current availability, samples, specifications and pricing.</p></div></section><section className="native-selection"><div><p className="eyebrow">LET’S FIND YOUR FIT</p><h2>Choosing {product.name.toLowerCase()}?</h2></div><p>{product.guide}</p></section><section className="native-more"><h2>Explore more materials</h2><div className="native-category-links">{catalogue.filter(item=>item.slug!==slug).map(item=><Link key={item.slug} href={`/products/${item.slug}`}>{item.name}<span>↗</span></Link>)}</div></section></div></main><footer className="native-footer"><Link href="/#home">← Back to Christmas offer</Link><a href="tel:+919650024478">+91 96500 24478</a></footer></div>;
}
