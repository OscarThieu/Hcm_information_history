// src/pages/HeaderSection.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function HeaderSection() {
  return (
    <div className="p-8 md:p-12 min-h-full">
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.h1
          className="relative text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          “Đảng ta là đạo đức, là văn minh” – Hồ Chí Minh
        </motion.h1>

        <motion.p
          className="relative text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8"
        >
          Ngay từ khi thành lập, Hồ Chí Minh nhấn mạnh rằng Đảng Cộng sản Việt
          Nam phải là đạo đức, văn minh, gắn bó máu thịt với nhân dân, tránh
          quan liêu, tham nhũng, và thoái hóa biến chất. Đây là kim chỉ nam cho
          toàn bộ sự nghiệp cách mạng của Đảng.
        </motion.p>

        {/* NEW: phân tích tư tưởng Hồ Chí Minh về dân chủ */}
        <motion.p
          className="relative text-base md:text-lg max-w-4xl mx-auto text-gray-200 mb-6 leading-relaxed"
        >
          Hồ Chí Minh khẳng định: “Nước ta là nước dân chủ, bao nhiêu lợi ích đều vì dân,
          bao nhiêu quyền hạn đều của dân…”. Theo Người, dân chủ vừa là mục tiêu, vừa là
          động lực của công cuộc xây dựng và phát triển đất nước. Nhà nước dân chủ phải
          đặt lợi ích của nhân dân lên hàng đầu, bảo đảm quyền làm chủ của nhân dân trên
          tất cả các lĩnh vực đời sống xã hội.
        </motion.p>

        {/* NEW: vận dụng tư tưởng vào thời đại số */}
        <motion.p
          className="relative text-base md:text-lg max-w-4xl mx-auto text-gray-200 mb-6 leading-relaxed"
        >
          Trong kỷ nguyên số, dân chủ cần được thể hiện bằng việc người dân có thể tham gia
          đóng góp ý kiến trên mạng xã hội, giám sát hoạt động công quyền minh bạch, và tạo
          ra sức ép buộc bộ máy nhà nước đổi mới. Điều này đòi hỏi một mô hình quản trị quốc
          gia hiện đại, kết hợp hài hòa giữa tinh thần “dân là chủ, dân làm chủ” với công nghệ
          số, dữ liệu mở, và quản lý hiệu quả.
        </motion.p>

        {/* NEW: một quote nhỏ */}
        <motion.blockquote
          className="italic text-gray-300 border-l-4 border-white/30 pl-4 mb-8"
        >
          “Dân chủ nghĩa là để cho dân mở miệng ra” – Hồ Chí Minh
        </motion.blockquote>

        <motion.div>
          <Link
            to="/blog"
            className="inline-block bg-white/10 text-black px-6 py-3 rounded-full font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
          >
            Khám Phá Các Tấm Gương Sáng
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Thành lập 1930
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Sứ mệnh: Gắn bó với nhân dân
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Nguyên tắc: Chống quan liêu & tham nhũng
          </span>
          {/* NEW TAGS */}
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Giá trị: Dân là gốc
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold">
            Tinh thần: Dân chủ & minh bạch
          </span>
        </motion.div>
      </div>
    </div>
  );
}
