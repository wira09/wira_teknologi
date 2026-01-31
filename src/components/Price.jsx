import useAOS from "../hooks/useAOS";

const Price = () => {
  useAOS();

  const priceSection = [
    {
      id: 1,
      paket: "Basic",
      kalangan: "Pelajar / Tugas",
      price: "Mulai dari 50K",
      title: "Joki Website Sederhana",
      stack: "PHP Native",
      descriptions: [
        "Multi Auth",
        "Free Desain",
        "Source Code Full",
        "Landing Page / Website Sederhana",
        "Revisi 3x (Lebih dari itu akan dikenakan biaya tambahan)",
      ],
      limit: "Harga dapat berubah sesuai kebutuhan project",
    },
    {
      id: 2,
      paket: "Pro",
      kalangan: "Mahasiswa / UMKM",
      price: "Mulai dari 100K",
      title: "Joki Website Menengah",
      stack: "Laravel / Next.JS / React.JS & Express.JS",
      descriptions: [
        "Multi Auth",
        "Free Desain",
        "CRUD + Validasi",
        "Website Dinamis & Database",
        "Revisi 3x (Lebih dari itu akan dikenakan biaya tambahan)",
      ],
      limit: "Harga menyesuaikan kompleksitas project",
    },
    {
      id: 3,
      paket: "Expert",
      kalangan: "Personal / Startup",
      price: "Custom",
      title: "Konsultan & Joki Advanced",
      stack: "-",
      descriptions: [
        "Free Desain",
        "Sesuai Request Anda",
        "Portofolio Personal / Company",
        "Sistem Monolitik atau Microservice",
        "Revisi 3x (Lebih dari itu akan dikenakan biaya tambahan)",
      ],
      limit: "Estimasi harga setelah diskusi",
    },
  ];

  return (
    <div id="services">
      {/* Price Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Paket Harga Kami
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              * Harga bersifat estimasi dan dapat berubah sesuai tingkat
              kesulitan, deadline, dan fitur yang diminta.
            </p>
            <div className="w-24 h-1 mt-5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded"></div>
          </div>

          <div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {priceSection.map((item) => (
              <div
                key={item.id}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-xl"
              >
                <h3 className="text-xl font-semibold text-blue-500">
                  {item.paket}
                </h3>
                <p className="mb-4 text-gray-600">{item.kalangan}</p>

                <div className="mb-2">
                  <span className="text-3xl font-bold text-blue-700">
                    {item.price}
                  </span>
                </div>

                <p className="mb-4 text-sm text-gray-500 italic">
                  {item.limit}
                </p>

                <p className="mb-4 text-sm text-gray-500">
                  <b>Stack:</b> {item.stack}
                </p>

                <ul className="mb-8 space-y-3">
                  {item.descriptions.map((desc, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <svg
                        className="h-5 w-5 text-blue-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* tombol */}
                <a
                  href={`https://wa.me/6285179947809?text=Halo%20saya%20ingin%20paket%20${item.paket}`}
                  target="_blank"
                  className="mt-auto block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
