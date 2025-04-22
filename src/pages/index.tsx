import Layout from "@theme/Layout";
import {Benefits} from "../components/app/benefits";
import {Browsing} from "../components/app/browsing";
import {Experience} from "../components/app/experience";
import {Footer} from "../components/app/footer";
import {Header} from "../components/app/header";
import Hero from "../components/app/hero";
import {Intersection} from "../components/app/intersection";
import {PartnerShip} from "../components/app/partnership";
import {Performance} from "../components/app/performance";
import {SectionImg} from "../components/app/section-img";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
			<div className='min-h-screen bg-brand-[#FEFAF8] -mt-[64px]'>
				<div className='bg-brand-home_bg'>
					<Hero />
				</div>
				<Browsing />
				<Performance />
				<SectionImg />
				<div className='bg-brand-home_bg'>
					<PartnerShip />
				</div>
				<div className='bg-[#FEEDE5]'>
					<Benefits />
				</div>
				<div
					// linear gradient to bottom
					className='bg-gradient-to-b from-[#FEEDE5] to-[#FEFAF8]'
				>
					<Intersection />
					<Experience />
				</div>
			</div>
		</Layout>
	);
}
