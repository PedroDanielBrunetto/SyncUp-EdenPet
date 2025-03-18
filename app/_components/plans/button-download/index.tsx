"use client";

export default function ButtonDownload() {
  const handleDownload = () => {
    const fileUrl = "/pdf/catalogo_eden_pet.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "catalogo_eden_pet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-50 transition-all bg-gradient-to-r from-[#4B4B4B] via-[#5F5F5F] to-[#8B8B8B] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <button
        role="button"
        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-[#3F3D3B] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#5A5A5A] hover:shadow-md hover:shadow-gray-400/50 hover:-translate-y-0.5 cursor-pointer"
        title="Tirar dúvidas"
        onClick={handleDownload}
      >
        Baixar Catálogo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-down pl-2"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M12 18v-6" />
          <path d="m9 15 3 3 3-3" />
        </svg>
      </button>
    </div>
  );
}
