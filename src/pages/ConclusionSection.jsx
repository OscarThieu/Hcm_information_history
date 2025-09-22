import { motion } from "framer-motion";

export function ConclusionSection() {
  return (
    <motion.section
      className="min-h-screen relative py-20 px-6bg-gradient-to-br from-brand-red-dark to-gray-900 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative star */}
      <div className="absolute top-4 right-4 text-yellow-300 text-6xl opacity-20 select-none">★</div>

      <motion.div
        className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl border-l-8 border-red-700"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-red-800 mb-6">
          Thông điệp cốt lõi
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Tư tưởng Hồ Chí Minh về Đảng vẫn mang giá trị thời sự sâu sắc.
          Đảng vừa giữ vai trò lãnh đạo, vừa phải đổi mới, tự chỉnh đốn để xứng đáng là{" "}
          <strong>“đạo đức, là văn minh”</strong>.
        </p>

        {/* Bullet points */}
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg mb-6">
          <li>
            <strong>Giữ vững bản chất cách mạng:</strong> xây dựng Đảng trong sạch, vững mạnh, chống tham nhũng, quan liêu.
          </li>
          <li>
            <strong>Đổi mới phương thức lãnh đạo:</strong> ứng dụng công nghệ, tiếp cận giới trẻ, nâng cao tính minh bạch.
          </li>
          <li>
            <strong>Gắn bó với nhân dân:</strong> lắng nghe, phục vụ lợi ích thiết thực, củng cố niềm tin xã hội.
          </li>
          <li>
            <strong>Phát huy vai trò thanh niên:</strong> khuyến khích học tập, khởi nghiệp, đổi mới sáng tạo, xây dựng tương lai.
          </li>
        </ul>

        <p className="text-xl font-semibold text-red-700">
          Đây chính là con đường để Đảng luôn giữ vững vai trò lãnh đạo và khẳng định sức sống của tư tưởng Hồ Chí Minh trong thời đại mới.
        </p>
      </motion.div>
    </motion.section>
  );
}
