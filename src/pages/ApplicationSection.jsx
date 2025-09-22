import { motion } from "framer-motion";

export function ApplicationSection() {
  const cards = [
    {
      title: "1. Giữ vững bản chất cách mạng",
      items: [
        "Xây dựng Đảng trong sạch, vững mạnh.",
        "Đấu tranh chống tham nhũng, quan liêu, lợi ích nhóm.",
        "Nêu gương cán bộ, đảng viên: “Một tấm gương sống còn có giá trị hơn trăm bài diễn văn”.",
      ],
    },
    {
      title: "2. Đổi mới thời đại 4.0",
      items: [
        "Chuyển đổi số, minh bạch, gần gũi với nhân dân và giới trẻ.",
        "Sử dụng mạng xã hội, truyền thông số để lan tỏa giá trị tích cực, phản bác thông tin sai lệch.",
        "Đổi mới giáo dục chính trị, tư tưởng phù hợp với ngôn ngữ, phong cách thanh niên.",
      ],
    },
    {
      title: "3. Khơi dậy niềm tin và vai trò thanh niên",
      items: [
        "Tạo cơ hội cho thanh niên tham gia xây dựng đất nước.",
        "Đào tạo, bồi dưỡng lực lượng kế tục sự nghiệp cách mạng.",
        "Chú trọng lợi ích thiết thực: học tập, việc làm, khởi nghiệp, đổi mới sáng tạo, công bằng xã hội.",
      ],
    },
    {
      title: "4. Phát huy dân chủ, minh bạch quản lý",
      items: [
        "Thực hiện đúng tinh thần 'dân biết, dân bàn, dân làm, dân kiểm tra'.",
        "Ứng dụng công nghệ số để người dân giám sát hoạt động công quyền.",
        "Mở rộng kênh phản hồi, đối thoại giữa chính quyền và nhân dân.",
      ],
    },
    {
      title: "5. Hội nhập quốc tế, giữ vững bản sắc",
      items: [
        "Tiếp thu tinh hoa văn hóa, khoa học, quản trị toàn cầu.",
        "Khẳng định vai trò Việt Nam trên trường quốc tế.",
        "Bảo vệ, phát huy bản sắc dân tộc trong giao lưu toàn cầu.",
      ],
    },
  ];

  return (
    <motion.section
      className="py-16 px-6 bg-gradient-to-br from-brand-red-dark to-gray-900 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">
        Vận dụng tư tưởng Hồ Chí Minh
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-1">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-red-400 mb-4">
              {card.title}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {card.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Quote nổi bật */}
      <motion.blockquote
        className="mt-12 max-w-3xl mx-auto text-center text-gray-400 italic border-l-4 border-red-500/50 pl-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        “Dân chủ là để cho dân mở miệng ra” – Hồ Chí Minh
      </motion.blockquote>

      {/* Đoạn kết nối */}
      <motion.p
        className="mt-6 max-w-4xl mx-auto text-center text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Vận dụng tư tưởng Hồ Chí Minh trong xây dựng Nhà nước hiện đại không chỉ
        dừng lại ở việc giữ vững bản chất cách mạng, mà còn phải đổi mới phương
        thức quản trị, phát huy sức mạnh của công nghệ số, đề cao vai trò thanh
        niên và mở rộng dân chủ thực chất. Đây là con đường để bảo đảm “dân là
        chủ, dân làm chủ” trong kỷ nguyên số.
      </motion.p>
    </motion.section>
  );
}
