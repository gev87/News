"use client"
/* eslint-disable @next/next/no-img-element */
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
	const router = useRouter();

	const newsItemSlug = params.slug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);
	console.log("InterceptedImagePage", newsItem);
	if (!newsItem) {
		notFound(newsItem);
	}
	return (
		<>
			<div className="modal-backdrop" onClick={router.back} />
			<dialog className="modal" open>
				<div>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
