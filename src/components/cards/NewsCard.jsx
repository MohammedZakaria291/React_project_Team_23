import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NewsCard({ news }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <Link
        to={`/news/${news.id}`}
        className="block h-48 bg-gray-100 overflow-hidden"
      >
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Link>
      <div className="p-5 pb-0">
        <span className="text-xs text-gray-400">{news.date}</span>
        <Link to={`/news/${news.id}`}>
          <h3 className="font-bold text-base leading-snug mt-1 line-clamp-3 hover:text-primary transition-colors">
            {news.title}
          </h3>
        </Link>
      </div>
      <div className="bg-primary text-white p-5 mt-4 flex-1 flex flex-col">
        <p className="text-sm leading-relaxed line-clamp-3 flex-1 opacity-95">
          {news.summary}
        </p>
        <Link
          to={`/news/${news.id}`}
          className="inline-block mt-4 self-start px-4 py-2 bg-white text-primary rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          {t("readMore")}
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
