import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      
      
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="text-xl font-bold tracking-wider text-[#1a2a52]">BOXPACK</div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-black">Услуги</a>
          <a href="#how-it-works" className="hover:text-black">Как это работает</a>
          <a href="#video" className="hover:text-black">Видеофиксация</a>
          <a href="#calc" className="hover:text-black">Калькулятор</a>
          <a href="#cases" className="hover:text-black">Кейсы</a>
          <a href="#contacts" className="hover:text-black">Контакты</a>
        </nav>
      </header>

   
      <section className="bg-[#142347] text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-300 mb-3">Автоматизированный фулфилмент</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Фулфилмент, который держит сроки и репутацию
            </h1>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления. Мы берем на себя хранение, сборку, маркировку и логистику.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#calc" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
                Рассчитать стоимость &rarr;
              </a>
              <a href="#consultation" className="border border-white/30 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg transition">
                Получить консультацию
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold">5000+</p>
                <p className="text-xs text-gray-400 mt-1">заказов в день</p>
              </div>
              <div>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-gray-400 mt-1">точность сборки</p>
              </div>
              <div>
                <p className="text-2xl font-bold">FBO/FBS</p>
                <p className="text-xs text-gray-400 mt-1">все маркетплейсы</p>
              </div>
            </div>
          </div>

         
          <div className="w-full aspect-video bg-slate-800/80 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 text-sm">
            Видео автоматизированной упаковочной линии
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Как начать работать с нами</h2>
        <p className="text-center text-gray-500 mb-12 text-sm">Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.</p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "ШАГ 1", title: "Оставляете заявку", desc: "Через сайт или Telegram" },
            { step: "ШАГ 2", title: "Получаете расчет", desc: "Под ваши объемы и формат работы" },
            { step: "ШАГ 3", title: "Подписываем договор", desc: "Через ЭДО" },
            { step: "ШАГ 4", title: "Привозите товар", desc: "От поставщика или транспортной компании" },
{ step: "ШАГ 5", title: "Автоматизированная упаковка", desc: "С видеоконтролем каждого заказа" },
            { step: "ШАГ 6", title: "Отправляем", desc: "На маркетплейсы по всей России" },
            { step: "ШАГ 7", title: "Получаете результат", desc: "Отчеты в реальном времени и рост продаж" },
          ].map((item, index) => (
            <div key={index} className="rounded-[10px] bg-[#f8f9fa] p-6 border border-gray-100 shadow-sm">
              <p className="text-xs font-bold text-gray-400">{item.step}</p>
              <h3 className="mt-2 font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section id="services" className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Услуги фулфилмента</h2>
          <p className="text-center text-gray-500 mb-12 text-sm">Полный цикл обработки товара от приемки до доставки.</p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Приемка и сортировка", desc: "Принимаем поставки любого объема и размещаем товар на адресное хранение." },
              { title: "Проверка на брак", desc: "Контроль качества перед отправкой покупателям." },
              { title: "Автоматизированная упаковка", desc: "Автоматические линии и видеоконтроль каждого заказа." },
              { title: "Сборка заказов", desc: "Быстрая комплектация заказов по данным маркетплейсов." },
              { title: "Отгрузка на маркетплейсы", desc: "FBO и FBS для всех крупных площадок." },
              { title: "Хранение товаров", desc: "Безопасное и надежное хранение продукции." },
              { title: "Интеграция", desc: "Фиксация с маркетплейсами и CRM." },
            ].map((item, index) => (
              <div key={index} className="rounded-xl bg-white p-6 border border-cyan-100 shadow-sm">
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-[#142347] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают BOXPACK</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Скорость", desc: "До 20 000 товаров за смену и отправка день в день." },
              { title: "Точность", desc: "99.8% точность сборки благодаря автоматизации." },
              { title: "Надежность", desc: "Страхование товара и круглосуточный контроль." },
              { title: "Поддержка", desc: "Персональный менеджер и оперативность помощи." },
            ].map((item, index) => (
              <div key={index} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}