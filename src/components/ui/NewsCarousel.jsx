import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NewsCarousel({ items }) {
  const { t } = useTranslation();

  
  const MAX_CARDS = 5;         
  const visibleCount = 3;     

 
  const limitedItems = items.slice(0, MAX_CARDS);

  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, limitedItems.length - visibleCount);

 
  const dots = Array.from({ length: maxIndex + 1 }, (_, i) => i);


  useEffect(() => {
    if (limitedItems.length <= visibleCount) return;

    const interval = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [limitedItems.length, maxIndex]);

  return (
    <div className="news-carousel">
      <div className="news-carousel-viewport">
        <div
          className="news-carousel-track"
          style={{
            transform: `translateX(calc(-${index} * (33.333333% + 6.666px)))`,
          }}
        >
          {limitedItems.map((news, i) => {
         
            const isActive = i === index + 1;

            return (
              <div
                key={news.id}
                className={`
                  news-carousel-slide
                  transition-all duration-700 ease-in-out
                  ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}
                `}
              >
                {}
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

                {}
                <div className="p-5 pb-0">
                  <Link to={`/news/${news.id}`}>
                    <h3 className="font-bold text-base leading-snug line-clamp-3">
                      {news.title}
                    </h3>
                  </Link>
                </div>

                {}
                <div
                  className={`
                    news-carousel-content p-5 mt-4 flex-1 flex flex-col
                    transition-all duration-500
                    ${isActive ? "bg-primary text-white" : "bg-cyan-50 text-gray-500"}
                  `}
                >
                  <p className="text-sm leading-relaxed line-clamp-3 flex-1">
                    {news.summary}
                  </p>

                  <Link
                    to={`/news/${news.id}`}
                    className={`
                      inline-block mt-4 self-start px-4 py-2 rounded-lg text-sm font-semibold
                      transition-all duration-500
                      ${isActive ? "bg-white text-primary" : "bg-primary text-white"}
                    `}
                  >
                    {t("readMore")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {}
      {dots.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {dots.map((d) => (
            <button
              key={d}
              onClick={() => setIndex(d)}
              aria-label={`Go to slide ${d + 1}`}
              className={`
                news-dot
                ${d === index ? "news-dot-active" : ""}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsCarousel;