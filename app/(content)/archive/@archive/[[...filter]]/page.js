import NewsList from "@/components/news-list";
import {
	getNewsForYear,
	getAvailableNewsYears,
	getAvailableNewsMonths,
	getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ year, month }) {
	const availableYears = await getAvailableNewsYears();
	let links = availableYears;

	if (
		(year && !availableYears.includes(year)) ||
		(month && !getAvailableNewsMonths(year).includes(month))
	) {
		throw new Error("Invalid Filter");
	}

	if (year) {
		links = month ? [] : getAvailableNewsMonths(year);
	}

	return (
		<header id="archive-header">
			<nav>
				<ul>
					{links.map((link) => {
						const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
						return (
							<li key={link}>
								<Link href={href}>{link}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

async function FilteredNews({ year, month }) {
	let news = [];
	if (year) {
		if (month) {
			news = await getNewsForYearAndMonth(year, month);
		} else {
			news = await getNewsForYear(year);
		}
	}

	let newsContent = <p>No news found for the selected period.</p>;

	if (news.length) {
		newsContent = <NewsList news={news} />;
	}

	return newsContent;
}

export default async function FilteredNewsPage({ params }) {
	const filter = params.filter || [];
	const [selectedYear, selectedMonth] = filter;

	return (
		<>
			<Suspense fallback={<p>Loading filter...</p>}>
				<FilterHeader year={selectedYear} month={selectedMonth} />
			</Suspense>
			<Suspense fallback={<p>Loading news...</p>}>
				<FilteredNews year={selectedYear} month={selectedMonth} />
			</Suspense>
		</>
	);
}
