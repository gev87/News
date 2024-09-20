import NewsList from "@/components/news-list";
import {
	getNewsForYear,
	getAvailableNewsYears,
	getAvailableNewsMonths,
	getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }) {
	const filter = params.filter || [];
	const [selectedYear, selectedMonth] = filter;

	let links = await getAvailableNewsYears();

	let news = [];

	if (selectedYear) {
		if (selectedMonth) {
			news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
			links = [];
		} else {
			news = await getNewsForYear(selectedYear);
			links = getAvailableNewsMonths(selectedYear);
		}
	}

	let newsContent = <p>No news found for the selected period.</p>;

	if (news.length) {
		newsContent = <NewsList news={news} />;
	}

	if (selectedYear && !news.length) {
		throw new Error("Invalid Filter");
	}

	return (
		<>
			<header id="archive-header">
				<nav>
					<ul>
						{links.map((link) => {
							const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	);
}
