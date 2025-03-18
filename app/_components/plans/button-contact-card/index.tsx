"use client";

export default function ButtonContactCard() {
  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-50 transition-all bg-gradient-to-r from-[#4B4B4B] via-[#5F5F5F] to-[#8B8B8B] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-[#3F3D3B] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#5A5A5A] hover:shadow-md hover:shadow-gray-400/50 hover:-translate-y-0.5"
        title="Tirar dúvidas"
        href="https://wa.me/+55013992028013"
      >
        Contratar plano
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        >
          <path
            d="M0 5h7"
            className="transition opacity-0 group-hover:opacity-100"
          ></path>
          <path
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          ></path>
        </svg>
      </a>
    </div>
  );
}
