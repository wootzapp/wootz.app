import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const data = [
	{
		head: "Custom Extension Framework",
		para: "Built on an enhanced Manifest V3, our API enables developers to create mobile-first extensions. Deploy custom AI data workflows in minutes—not weeks.",
		img: "/img/extension.png",
	},

	{
		head: "Robust API & SDK",
		para: "Our comprehensive toolkit integrates seamlessly with our native in‑browser task orchestration, automating validation, rewards distribution, and secure data collection.",
		img: "/img/sdk.png",
	},
];

export function PartnerShip() {
	return (
		<div className='min-h-screen relative md:pt-5 pb-16 overflow-hidden'>
			<img src={useBaseUrl("img/partnership-shadow.png")} alt='Decorative shadow' className='absolute -top-10 -right-16 md:-right-44 w-40' />

			<div className='container-custom'>
				<div className='flex flex-col gap-4 items-center text-center'>
					<h2 className='text-brand-black-100 font-matter ~text-xl/4xl font-bold text-center max-w-2xl mx-auto'>
						A Platform Built on Extensibility and
						<span className='text-brand-orange-200 block'>Global Partnerships</span>
					</h2>
					<p className='text-brand-black-200 font-matter font-light max-w-4xl ~text-sm/lg'>
						At the heart of WootzApp is our unique extension system—a first-of-its-kind solution on mobile. This allows AI companies to design custom,
						iterative, non-standard labeling workflows, while enabling developers to rapidly deploy and iterate on tasks.
					</p>
				</div>

				<div className='flex flex-col mt-16'>
					<div className='flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-8 xl:gap-10'>
						{data.map((e, index) => {
							return (
								<div key={index} className='flex bg-brand-white-100 p-5 gap-3 lg:gap-4 rounded-md basis-full z-10'>
									<img src={useBaseUrl(e.img)} alt={`Icon for ${e.head}`} className='object-cover ~size-14/20' />
									<div className='flex gap-3 md:gap-4 flex-col justify-start'>
										<h4 className='text-brand-black-100 font-matter ~text-base/xl font-semibold max-w-3xl leading-normal tracking-wide'>{e.head}</h4>
										<p className='text-brand-black-200 font-matter font-med max-w-lg ~text-xs/base'>{e.para}</p>
									</div>
								</div>
							);
						})}
					</div>

					<div className='flex flex-col-reverse md:flex-row items-center mt-5 md:mt-14 justify-center gap-5 md:gap-10 lg:gap-16'>
						<div className='max-w-2xl flex-1'>
							<img src={useBaseUrl("img/partnership.png")} alt='Partnership illustration' className='w-full' />
						</div>

						<div className='bg-[#EEEFE9] rounded-md flex flex-1 w-full h-full p-5 gap-2 md:gap-5'>
							<div>
								<img src={useBaseUrl("img/code.png")} alt='Code icon' className='w-16 md:w-24' />
							</div>
							<div className='w-full flex flex-col gap-3'>
								<p className='md:text-2xl font-semibold'>Technical Superiority – Code Comparison</p>

								<div className='bg-[#283911] rounded-lg max-h-[796px] overflow-auto'>
									<pre className='bg-transparent text-white p-4 whitespace-pre-wrap text-xs md:text-sm'>
										{`// Traditional Platforms (e.g., Scale AI, LabelBox)
class Traditional Platform {
  async deploy Task(config) {
    await this.setupProject(); // 1-2 weeks
    await this.trainWorkers(); // 1 week
    await this.setupValidation(); // Manual
  }
}
// WootzApp's Instant Extension System
interface WootzExtension {
  components: {
    selector?: Component;
    validator?: Component;
  };
  validation: {
    rules: ValidationRule[];
    consensus: number;
  };
  rewards: {
    baseAmount: number;
    bonusConditions: Condition[];
  };
}
async function deployWorkflow(extension: WootzExtension) {
  const deployment = await wootzapp.deploy(extension);
  return deployment.monitor();
}`}
									</pre>
								</div>
							</div>
							{/* 
							<img src={useBaseUrl('img/preview.png')} alt='Code preview' className='w-full hidden md:block' />
							<img src={useBaseUrl('img/preview-mobile.png')} alt='Mobile code preview' className='w-full md:hidden' />
							*/}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
