import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
 return <header className="native-header"><nav><Link href="/#home" className="wordmark" aria-label="Chawla Plywood home"><Image className="website-logo" src="/chawla-brand-white.png" alt="Chawla Plywood" width={180} height={108} priority/></Link><Link className="native-back" href="/#home">← Back to offer</Link></nav></header>;
}
