"use client";
import {performanceData} from "@site/src/data";
import {useEffect, useState} from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useBaseUrl from "@docusaurus/useBaseUrl";

function BaseUrlImage({src, alt, ...props}: {src: string; alt: string; [key: string]: any}) {
	const url = useBaseUrl(src);
	return <img src={url} alt={alt} {...props} />;
}

export function Performance() {
	const [windowWidth, setWindowWidth] = useState(0); // Initially 0 to avoid SSR issues

	useEffect(() => {
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			const handleResize = (e: any) => setWindowWidth(e.target.innerWidth);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return (
		<BrowserOnly fallback={<div>Loading...</div>}>
			{() => (
				<div className='min-h-screen bg-brand-black-100 pt-24 pb-0 md:pb-28'>
					<div className='container-custom flex flex-col justify-center gap-16'>
						<h2 className='text-brand-white-100 font-matter font-bold text-center mx-auto ~text-2xl/4xl md:max-w-3xl max-w-md'>
							Built for High <span className='text-brand-orange-200'>Performance</span>, <span className='text-brand-orange-300'>Security</span>, and{" "}
							<span className='text-brand-green-100'>Scalability</span>
						</h2>

						<div className='flex gap-20 md:flex-row flex-col gap-10 items-center md:items-start'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 max-w-2xl mx-auto'>
								{performanceData.map((data, index) => {
									const res = index === 2 && windowWidth > 640 ? "col-span-2" : "";
									return (
										<div key={index} className={`flex flex-col gap-3 sm:gap-5 ${res}`}>
											<BaseUrlImage src={data.img} alt='Performance icon' className='~size-16/24' />
											<h4 className='text-brand-white-100 font-matter font-bold text-xl md:text-2xl max-w-xs'>{data.head}</h4>
											<p className='~text-sm/lg text-brand-white-400 font-matter'>{data.para}</p>
										</div>
									);
								})}
							</div>

							<div className='max-w-xl max-h-full'>
								<BaseUrlImage src='img/performance.png' alt='Performance diagram' className='w-full' />
							</div>
						</div>
					</div>
				</div>
			)}
		</BrowserOnly>
	);
}
