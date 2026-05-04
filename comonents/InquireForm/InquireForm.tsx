"use client";

export default function InquireForm() {
  return (
    <div className="w-1/3 bg-[var(--background-color)] h-screen absolute top-0 right-0">
      <div className="py-8 pl-6 pr-3 bg-[var(--primary-color)] text-white uppercase text-sm">
        <p>Задать вопрос</p>
      </div>
      <div className="py-10 px-12">
        <h1 className="text-[var(--primary-color)] text-4xl">Задать вопрос</h1>
        <p className="mt-5 text-[var(--primary-color)]">
          Стоимость аренды начинается от 5,8 миллионов долларов. Строительство идет полным ходом — первые резиденции
          будут сданы летом 2026 года. Сейчас, когда в комплексе всего 25 роскошно обставленных резиденций Auberge и
          всего 26 жилых комплексов, нет лучшего момента, чем сейчас.
        </p>
        <form className="mt-10">
          <div className="flex items-center gap-5">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary-color)]"></div>
            <p className="text-[var(--secondary-color)]">Контактная информация</p>
          </div>
          <div className="flex justify-between ">
            <button className="primaryBtn w-full">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
